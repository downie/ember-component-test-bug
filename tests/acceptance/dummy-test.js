import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'component-test-bug/tests/helpers/start-app';

var application;

module('Acceptance: Dummy', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentPath(), 'index');
  });
});
