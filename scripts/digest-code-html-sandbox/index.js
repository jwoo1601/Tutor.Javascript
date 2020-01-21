const program = require("commander");
const puppeteer = require("puppeteer");
const sanitizeFilename = require("sanitize-filename");
const path = require("path");
const fs = require("fs");
const dateformat = require("dateformat");

const { version } = require("./package.json");

const DEFAULT_START_PAGE = "./static/index.html";
const DEFAULT_CHROMIUM_PATH = puppeteer.executablePath();
const DEFAULT_SLOW_MOTION_DELAY_MS = 250;
const DEFAULT_TIMEOUT = 5 * 60 * 1000; // 5 mins
const DEFAULT_LOG_OUTPUT_PATH = "logs";
const DEFAULT_LOG_FILENAME = "sandbox-log";
const DEFAULT_OUTPUT_PATH = "sandbox";
const DEFAULT_VIEWPORT_SIZE = {
  width: 1000,
  height: 800
};

function buildLocalURL(localPath) {
  return `file:///${path.resolve(process.cwd(), DEFAULT_START_PAGE)}`;
}

function parseCommandLineArguments(args) {
  program
    .version(version, "-v, --version")
    .option(
      "-s, --start-page <page>",
      "sets the starting page from which the sandbox to start"
    )
    .option(
      "-c, --chromium-path <path>",
      "sets the chromium executable path for the sandbox to launch"
    )
    .option(
      "-d, --show-devtools",
      "specifies whether or not to show devtools when launched"
    )
    .option("--no-show-devtools", "sets to not show devtools when launched")
    .option(
      "--delegate-console",
      "sets whether or not to delegate the browser's console to the sandbox console"
    )
    .option(
      "--no-delegate-console",
      "sets to use the browser's default console"
    )
    .option(
      "-S, --slow-motion [time]",
      "runs the sandbox in slow motion with the given time as delay (optional)"
    )
    .option("--no-slow-motion", "removes slow motion delay")
    .option("-h, --headless-viewport", "runs sandbox with headless viewport")
    .option("--no-headless-viewport")
    .option(
      "-v, --viewport <width>:<height>",
      "sets the viewport size of the sandbox"
    )
    .option("-m, --mobile", "runs sandbox in mobile mode")
    .option("-L, --landscape", "runs sandbox in landscape mode")
    .option(
      "-t, --timeout [time]",
      "closes sandbox after the given amount of time (in ms) (default: 5 mins)"
    )
    .option(
      "-l, --generate-log-file [filename]",
      "sets whether or not to generate a log file for console output"
    )
    .option(
      "--log-output-path <path>",
      "sets the output path of the log file (default: logs)"
    )
    .option(
      "--default-output-path <path>",
      "sets the default output path of sandbox (default: sandbox)"
    )
    .option("--ignore-browser-errors", "ignores browser errors")
    .option("--no-ignore-browser-errors")
    .option("--full-screen", "runs sandbox in full screen mode")
    .option("--no-full-screen")

    .parse(args);
}

function computeDefaultValues() {
  let computed = {
    startPage: buildLocalURL(program.startPage || DEFAULT_START_PAGE),
    chromiumPath: program.chromiumPath || DEFAULT_CHROMIUM_PATH,
    showDevtools: program.showDevtools || false,
    delegateConsole: program.delegateConsole || true,
    mobile: program.mobile || false,
    landscape: program.landscape || false,
    generateLogFile: program.generateLogFile || false,
    logOutputPath: program.logOutputPath || DEFAULT_LOG_OUTPUT_PATH,
    defaultOutputPath: program.defaultOutputPath || DEFAULT_OUTPUT_PATH,
    headlessViewport: program.headlessViewport || false,
    ignoreBrowserErrors: program.ignoreBrowserErrors || false,
    fullScreen: program.fullScreen || false
  };

  if (program.slowMotion) {
    let parsed = Number.parseInt(program.slowMotion);
    if (Number.isNaN(parsed)) {
      computed.slowMotionDelay = DEFAULT_SLOW_MOTION_DELAY_MS;
    } else {
      computed.slowMotionDelay = parsed;
    }
  } else {
    computed.slowMotionDelay = 0;
  }

  if (program.timeout) {
    let parsed = Number.parseInt(program.timeout);
    if (Number.isNaN(parsed)) {
      computed.timeout = DEFAULT_TIMEOUT;
    } else {
      computed.timeout = parsed;
    }
  } else {
    computed.timeout = -1;
  }

  if (program.generateLogFile) {
    if (
      typeof program.generateLogFile == "string" ||
      program.generateLogFile instanceof String
    ) {
      computed.logFilename = sanitizeFilename(program.generateLogFile);
    } else {
      computed.logFilename = DEFAULT_LOG_FILENAME;
    }

    computed.logFilename = `${computed.logFilename}-${dateformat(
      new Date(),
      "yyyy-mm-dd"
    )}.log`;
  }

  if (program.viewport) {
    let viewportMatch = program.viewport.match(/^(\d+)\:(\d+)$/);
    if (viewportMatch.length == 3) {
      let parsedWidth = Number.parseInt(viewportMatch[1]);
      let parsedHeight = Number.parseInt(viewportMatch[2]);
      if (!Number.isNaN(parsedWidth) && !Number.isNaN(parsedHeight)) {
        computed.viewport = {
          width: parsedWidth,
          height: parsedHeight
        };
      }
    }
  }

  if (!computed.viewport) {
    computed.viewport = DEFAULT_VIEWPORT_SIZE;
  }

  return computed;
}

function launchBrowser(computedValues) {
  if (computedValues.generateLogFile) {
    const resolvedLogOutputPath = path.resolve(
      process.env.cwd(),
      computedValues.logOutputPath
    );

    if (!fs.existsSync(resolvedLogOutputPath)) {
      fs.mkdirSync(resolvedLogOutputPath);
    }

    process.stdout.pipe(
      fs.createWriteStream(
        path.join(resolvedLogOutputPath, computedValues.logFilename),
        {
          flags: "a",
          autoClose: true
        }
      ),
      {
        end: true
      }
    );
  }

  puppeteer
    .launch({
      executablePath: computedValues.chromiumPath,
      slowMo: computedValues.slowMotionDelay,
      defaultViewport: {
        width: computedValues.viewport.width,
        height: computedValues.viewport.height,
        isMobile: computedValues.mobile,
        hasTouch: computedValues.mobile,
        isLandscape: computedValues.landscape
      },
      devtools: computedValues.showDevtools,
      dumpio: computedValues.delegateConsole,
      headless: computedValues.headlessViewport,
      ignoreHTTPSErrors: computedValues.ignoreBrowserErrors,
      args: computeDefaultValues.fullScreen && ["--start-fullscreen"]
    })
    .then(browser => {
      if (computedValues.timeout !== -1) {
        setTimeout(() => {
          browser.close();
        }, computedValues.timeout);
      }

      return browser.newPage();
    })
    .then(page => {
      page.on("console", message => {
        console.log(message.text());
      });

      page.goto(computedValues.startPage).then(response => {});
    });
}

function run() {
  parseCommandLineArguments(process.argv);
  launchBrowser(computeDefaultValues());
}

module.exports = {
  buildLocalURL: buildLocalURL,
  parseCommandLineArguments: parseCommandLineArguments,
  computeDefaultValues: computeDefaultValues,
  launchBrowser: launchBrowser,
  run: run,

  defaultStartPage: DEFAULT_START_PAGE,
  defaultChromiumPath: DEFAULT_CHROMIUM_PATH,
  defaultSlowMotionDelay: DEFAULT_SLOW_MOTION_DELAY_MS,
  defaultTimeout: DEFAULT_TIMEOUT,
  defaultLogOutputPath: DEFAULT_LOG_OUTPUT_PATH,
  defaultLogFilename: DEFAULT_LOG_FILENAME,
  defaultOutputPath: DEFAULT_OUTPUT_PATH,
  defaultViewportSize: DEFAULT_VIEWPORT_SIZE
};
