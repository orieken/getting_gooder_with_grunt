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
    }

  });

  grunt.loadNpmTasks("grunt-karma");

};