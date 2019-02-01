module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Css minify
        cssmin: {
            css: {
                src: 'src/css/style.css',
                dest: 'dist/css/style.min.css'
            }
        },

        // Js uglify
        uglify: {
            dist: {
                files: {
                    'dist/js/main.min.js': ['src/js/main.js', 'src/js/sample.js'],
                }
            }
        },

        /*Imagemin*/
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: 'src/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/img/'
                }]
            }
        },

        // Less
        less: {
            dev: {
                options: {
                    compress: true
                },
                files: {
                    "dist/css/style.css": "src/less/all.less"
                }
            }
        },

        // Watch
        connect: {
            uses_defaults: {}
        },
        watch: {
            project: {
                files: ['**/*.js', '**/*.html', '**/*.json', '**/*.css'],
                options: {
                    livereload: true,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['cssmin', 'uglify', 'imagemin', 'connect', 'watch']);
}