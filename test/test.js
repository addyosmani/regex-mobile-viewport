/*global describe, it */
'use strict';
var assert = require('assert');
var auditMobileViewport = require('../');

describe('regex-mobile-viewport node module', function () {
	it('should match a mobile meta-viewport in a string', function (done) {
		assert.equal(auditMobileViewport().test('<meta name="viewport" content="width=device-width, initial-scale=1">'), true);
		assert.equal(auditMobileViewport().test('<meta name="viewport" content="width = device-width, initial-scale=1">'), true);
		assert.equal(auditMobileViewport().test('<meta name="viewport" content="width=device-width, initial-scale = 1">'), true);
		assert.equal(auditMobileViewport().test('<meta name="viewport" content="width=device-width, initial-scale=1.0">'), true);
		done();
	});

	it('should match the long form of a mobile meta-viewport in a string', function (done) {
		assert.equal(auditMobileViewport().test('<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">'), true);
		assert.equal(auditMobileViewport().test('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">'), true);
		done();
	});

	it('should fail on a meta-viewport without device-width and scale', function (done) {
		assert.equal(auditMobileViewport().test('<meta name="viewport">'), false);
		done();
	});

	it('should fail if the meta portion of the tag is excluded', function (done) {
		assert.equal(auditMobileViewport().test('<name="viewport" content="width=device-width, initial-scale=1">'), false);
		assert.equal(auditMobileViewport().test('<name="viewport" content="width = device-width, initial-scale=1">'), false);
		assert.equal(auditMobileViewport().test('<name="viewport" content="width=device-width, initial-scale = 1">'), false);
		assert.equal(auditMobileViewport().test('<name="viewport" content="width=device-width, initial-scale=1.0">'), false);
		done();
	});

});

