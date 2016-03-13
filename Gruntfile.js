module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    compass: true
                },

                files: {
                    'public/stylesheets/dist.css': 'public/stylesheets/compile.scss'
                }
            }
        },

        watch: {
            gruntfile: {
                files: ['Gruntfile.js']
            },

            styles: {
                files: ['public/stylesheets/*.scss'],
                tasks: ['sass'],
                options: {
                    nospawn: true
                }
            }
        }
    })
    
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-requirejs')
    grunt.loadNpmTasks('grunt-contrib-sass')

    //grunt.registerTask('default', ['less', 'cssmin', 'watch'])
    grunt.registerTask('default', ['sass', 'watch'])
    grunt.registerTask('build-styles', ['sass'])
    grunt.registerTask('build-scripts', ['requirejs:compile', 'requirejs:signup'])
}