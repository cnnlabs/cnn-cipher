/* jshint browser: false, node: true, maxlen: 255 */
'use strict';

var path = require('path');


module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({

        jscs: {
            /*
             * You can generate this list with the following shell command:
             * $ find . -name '*.js' | grep -v '\(node_modules\|.bower_components\|public\|tmp\)' | perl -ne 'if(/(^.*\/)/){print $1."\n"}' | sort -u
             */
            src: [
                /* include */
                '*.js',
                'lib/**/*.js'

                /* exclude */
            ],
            options: {
                reporter: require('jscs-stylish').path
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
                    'lib/**/*.js'
                ]
            },
            options: {
                jshintrc: path.normalize('.jshintrc'),
                reporter: require('jshint-stylish')
            }
        },

        jsonlint: {
            files: {
                src: [
                    /* include */
                    '*.json',
                    '**/*.json',

                    /* exclude */
                    '!node_modules/**'
                ]
            }
        }

    });

    grunt.registerTask('default', [
        'jscs',
        'jshint',
        'jsonlint'
    ]);
};
