/* jshint browser: false, node: true, maxlen: 255 */
'use strict';

var path = require('path');


module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        casper: {
            test: {
                options: {
                    'fail-fast': true,
                    test: true,
                    verbose: true
                },
                files: {
                    tests: 'test/casperjs/**/*.js'
                }
            }
        },

        copy: {
            dist: {
                src: 'src/client/cnn.cipher.js',
                dest: 'dist/cnn.cipher.js'
            }
        },

        jshint: {
            files: {
                /*
                 * You can generate this list with the following shell command:
                 * $ find . -name '*.js' | grep -v '\(node_modules\|.bower_components\|public\|tmp\)' | perl -ne 'if(/(^.*\/)/){print $1."\n"}' | sort -u
                 */
                src: [
                    /* include */
                    '*.js',
                    'lib/*.js',
                    'lib/**/*.js',
                    'test/*.js',
                    'test/**/*.js'
                ]
            },
            options: {
                jshintrc: path.normalize('.jshintrc'),
                reporter: require('jshint-stylish')
            }
        },

        jscs: {
            /*
             * You can generate this list with the following shell command:
             * $ find . -name '*.js' | grep -v '\(node_modules\|.bower_components\|public\|tmp\)' | perl -ne 'if(/(^.*\/)/){print $1."\n"}' | sort -u
             */
            src: [
                /* include */
                '*.js',
                'lib/*.js',
                'lib/**/*.js',
                'test/*.js',
                'test/**/*.js'

                /* exclude */
            ],
            options: {
                reporter: require('jscs-stylish').path
            }
        },

        uglify: {
            options: {
                mangle: true
            },
            target: {
                files: {
                    'dist/cnn.cipher.min.js': ['src/client/cnn.cipher.js']
                }
            }
        }

    });

    grunt.registerTask('default', [
        'jscs',
        'jshint',
        'copy',
        'uglify'
    ]);
};
