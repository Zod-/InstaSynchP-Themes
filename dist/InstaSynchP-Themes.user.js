// ==UserScript==
// @name        InstaSynchP Themes
// @namespace   InstaSynchP
// @description Collection of themes

// @version     0.1.0
// @author      Zod-
// @source      https://github.com/Zod-/InstaSynchP-Themes
// @license     MIT

// @include     *://instasync.com/r/*
// @include     *://*.instasync.com/r/*
// @grant       none
// @run-at      document-start

// @require     https://greasyfork.org/scripts/5647-instasynchp-library/code/code.js?version=37716
// ==/UserScript==

function Themes() {
  'use strict';
  this.version = '0.1.0';
  this.name = 'InstaSynchP Themes';
}

window.plugins = window.plugins || {};
window.plugins.themes = new Themes();
