module.exports = function(grunt) {
  grunt.initConfig({
    karma: {
      unit: {
        configFile: "karma-unit.conf.js"
      }
    },
    bower: {
      dev: {
        dest: 'bower_components'
      }
    },
    devserver: {
      server: {
        base: './src/app/',
        port: 8888
      }
    }
  });

  grunt.loadNpmTasks("grunt-karma");
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-devserver')

};