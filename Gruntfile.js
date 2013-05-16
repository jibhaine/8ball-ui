module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-requirejs');
    grunt.initConfig({
        jshint:{

        },
        concat: {
            // concat task configuration goes here.
        },
        uglify: {
            // uglify task configuration goes here.
        },
        requirejs: {
            compile: {
                options: {
                    appPath:'./public/',
                    baseUrl: 'public/js/',
                    mainConfigFile:'public/js/8ball.js',
                    name: '8ball',
                    optimize: 'uglify',
                    out: 'public/js/8ball.min.js'
                }
            }
        }
    });
};