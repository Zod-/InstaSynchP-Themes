QUnit.module('Themes');

QUnit.test('Plugin created', function (assert) {
  'use strict';
  assert.notEqual(window.plugins, undefined, 'Plugins not undefined');
  assert.notEqual(window.plugins.themes, undefined, 'Themes not undefined');
  assert.ok(window.plugins.themes instanceof Themes, 'Themes loaded');
});
