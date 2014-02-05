/* global describe, it */
'use strict';

var dd = require('..'),
    should = require('should');

describe('dependencies-diff', function () {

    it('should return something', function () {
        should.exist(dd({}, {}));
    });

    describe('version formats', function () {
        var expected = { bem: { minor: 1 } };
        it('should accept git tags', function () {
            var before = { 'bem': 'git://github.com/bem/bem-bl.git#0.3.11' };
            var after = { 'bem': 'git://github.com/bem/bem-bl.git#0.4.11' };
            dd(before, after).should.containDeep(expected);
        });

        it('should not accept only strict versions', function () {
            var before = {
                'bem': '~0.3.11',
                'bem2': '>0.1.2'
            };
            var after = {
                'bem': '0.3.12',
                'bem2': '0.2.2'
            };
            dd(before, after).should.eql({});
        });
    });

    describe('version changes', function () {
        it('should detect patch version change', function () {
            var before = { 'express': '3.4.1' };
            var after = { 'express': '3.4.2' };

            var result = dd(before, after);
            result.should.containDeep({
                express: {
                    patch: 1
                }
            });
        });

        it('should detect major version change', function () {
            var before = { 'express': '2.4.1' };
            var after = { 'express': '3.4.1' };

            var result = dd(before, after);
            result.should.containDeep({
                express: {
                    major: 1
                }
            });
        });

        it('should detect negative minor version change', function () {
            var before = { 'express': '2.4.1' };
            var after = { 'express': '2.3.1' };

            var result = dd(before, after);
            result.should.containDeep({
                express: {
                    minor: -1
                }
            });
        });

        it('should detect negative minor version change', function () {
            var before = { 'express': '2.4.1' };
            var after = { 'express': '2.3.1' };

            var result = dd(before, after);
            result.should.containDeep({
                express: {
                    minor: -1
                }
            });
        });
    });
});
