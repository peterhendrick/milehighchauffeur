'use strict';

exports.config = {
    seleniumServerJar: '/usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar',

    // directConnect: true,

    chromeDriver: '/usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.25',

    specs: [
        './test.js'
    ],

    exclude: [

    ],

    suites: {
        suiteOne: [

        ]
    },

    capabilities: {
        'browserName': 'chrome',
        // 'browserName': 'phantomjs',
        // 'phantomjs.binary.path': './node_modules/phantomjs/bin/phantomjs',
        'chromeOptions': {
            'args': [
                'incognito',
                'disable-extensions',
                'start-maximized'
            ]
        }
    },

    allScriptsTimeout: 20000,

    resultJsonOutputFile: null,
    restartBrowserBetweenTests: false,
    plugins: '',


    beforeLaunch: function() {

        // process.env.NODE_ENV = 'test';
    },

    onPrepare: function() {
        //globals.signIn();
        //browser.waitForAngular();
    },

    // A callback function called once tests are finished.
    onComplete: function() {
        //globals.logOut();
        browser.close();
    },

    // A callback function called once the tests have finished running and
    // the WebDriver instance has been shut down. It is passed the exit code
    // (0 if the tests passed). This is called once per capability.
    onCleanUp: function(exitCode) {},

    // A callback function called once all tests have finished running and
    // the WebDriver instance has been shut down. It is passed the exit code
    // (0 if the tests passed). This is called only once before the program
    // exits (after onCleanUp).
    afterLaunch: function() {},
    // multiCapabilities: [
    //     {
    //         'browserName': 'chrome',
    //         'chromeOptions': {
    //             'args': [
    //                 'incognito',
    //                 'disable-extensions',
    //                 'start-maximized'
    //             ]
    //         }
    //     }, {
    //         'browserName': 'firefox'
    //     }, {
    //         'browserName': 'safari'
    //     }
    // ],
    jasmineNodeOpts: {
        // If true, display spec names.
        isVerbose: true,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 20000
    }
    // For Jasmine 2 Framework
    //jasmineNodeOpts: {
    //    // If true, print colors to the terminal.
    //    showColors: true,
    //    // Default time to wait in ms before a test fails.
    //    defaultTimeoutInterval: 120000
    //    // Function called to print jasmine results.
    //    // print: function() {},
    //    // If set, only execute specs whose names match the pattern, which is
    //    // internally compiled to a RegExp.
    //    // grep: 'pattern',
    //    // Inverts 'grep' matches
    //    // invertGrep: false
    //}
};

