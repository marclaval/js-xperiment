module.exports = function (grunt) {
  grunt.initConfig({
    hspserver: {
      port: 8080,
      base: __dirname,
      templateExtension: "hsp"
    }
  });


  grunt.loadTasks('build');

  grunt.registerTask('default', ['hspserver']);
};