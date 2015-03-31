function Themes() {
  'use strict';
  this.version = '{{ VERSION }}';
  this.name = 'InstaSynchP Themes';
}

window.plugins = window.plugins || {};
window.plugins.themes = new Themes();
