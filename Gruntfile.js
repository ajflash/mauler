module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        path: {
            main: 'build/<%= pkg.name %>-<%= pkg.version %>.js',
            min: 'build/<%= pkg.name %>-<%= pkg.version %>-min.js'
        },

        concat: {
            options: {
                separator: grunt.util.linefeed + grunt.util.linefeed
            },
            dist: {
                src: ['src/mauler.js', 'src/**/*.js'],
                dest: '<%= path.main %>'
            }
        },

        clean: {
            dist: [
                '<%= path.main %>',
                '<%= path.min %>'
            ]
        },

        uglify: {
            options: {
                report: 'min',
                preserveComments: 'some'
            },
            dist: {
                files: {
                    '<%= path.min %>': [
                        '<%= path.main %>'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['build'])
    grunt.registerTask('build', [ 'concat' ]);
};