'use strict';

var casper = require('casper');
casper.test.begin('Hello, Test!', 1, function (test) {
    test.assert(true);
    test.done();
});

casper.on('error', function (err) {
    console.log(err);
    casper.done();
});
