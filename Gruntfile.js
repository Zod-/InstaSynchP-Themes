module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    copy: {
      dist: {
        flatten: true,
        expand: true,
        src: ['src/themes/*.css'],
        dest: 'dist/',
      }
    },
    pkg: grunt.file.readJSON('package.json'),
    'string-replace': {
      build: {
        files: {
          'dist/': 'dist/*.js',
        },
        options: {
          replacements: [{
            pattern: /{{ VERSION }}/g,
            replacement: '<%= pkg.version %>'
          }]
        }
      },
      jshint: {
        files: {
          'dist/': 'dist/*.js',
        },
        options: {
          replacements: [{
            pattern: /\/\*\s*jshint[^\n]*\n/g,
            replacement: ''
          }]
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
      },
      beforereplace: ['src/cssLoader.js'],
      afterreplace: ['dist/InstaSynchP-Themes.user.js'],
      beforeconcat: ['tests/src/*.js'],
      afterconcat: ['tests/test.js'],
      other: ['Gruntfile.js']
    },
    concat: {
      test: {
        src: ['tests/src/*.js'],
        dest: 'tests/test.js',
      },
      dist: {
        src: ['src/meta.js', 'src/themes.js'],
        dest: 'dist/InstaSynchP-Themes.user.js'
      }
    },
    qunit: {
      all: ['tests/index.html']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-shell');

  //TODO add shell task that generates rawgit urls for ever .css in dist
  grunt.registerTask('default', ['copy', 'concat',
    'string-replace:build', 'jshint', 'string-replace:jshint', 'qunit'
  ]);
  grunt.registerTask('test', ['concat', 'jshint', 'qunit']);
  grunt.registerTask('build-css', ['copy']);
  grunt.registerTask('build-js', ['concat', 'string-replace']);
  grunt.registerTask('build', ['build-css', 'build-js']);
};
