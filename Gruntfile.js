module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Js uglify
        uglify: {
            dist: {
                files: {
                    'dist/js/main.min.js': ['src/js/main.js', 'src/js/sample.js'],
                }
            }
        },

        // Imagemin
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

        // Sass
        sass: {
            options: {
                style: 'compressed'
            }
            ,
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['*.scss'],
                    dest: 'dist/css',
                    ext: '.css'
                }]
            }
        },

        // Watch
        connect: {
            uses_defaults: {}
        },
        watch: {
            project: {
                files: ['**/*.js', '**/*.html', '**/*.json', '**/*.css'],
                tasks: ['sass', 'uglify'],
                options: {
                    livereload: true,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify', 'imagemin', 'sass', 'watch', 'connect']);
}