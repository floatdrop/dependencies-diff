'use strict';

var semver = require('semver');

function parseVersion(str) {
    if (/[><|~]/.exec(str)) { return; }
    var re = /\d+\.\d+\.\d+/;
    var match = re.exec(str);
    if (!match) { return; }
    return match[0];
}

module.exports = function (lhs, rhs) {
    var diff = {};

    Object.keys(lhs).forEach(function (key) {
        if (!rhs[key]) { return; }

        var lhv = parseVersion(lhs[key]);
        var rhv = parseVersion(rhs[key]);
        if (!lhv || !rhv || lhv === rhv) { return; }

        var lhsv = semver.parse(lhv);
        var rhsv = semver.parse(rhv);

        diff[key] = {
            major: rhsv.major - lhsv.major,
            minor: rhsv.minor - lhsv.minor,
            patch: rhsv.patch - lhsv.patch,
            version: lhv,
            newVersion: rhv
        };
    });

    return diff;
};
