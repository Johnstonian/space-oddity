module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {   
      dist: {
        src: [
          'js/dev/libs/*.js', // All JS in the libs folder
          'js/dev/main.js'  // This specific file
        ],
        dest: 'js/dev/allthejs.js',
      }
    },

    uglify: {
      build: {
          src: 'js/dev/allthejs.js',
          dest: 'js/main.min.js'
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'style.css': 'sass/style.scss'
        }
      } 
    },

    autoprefixer: {
      dist: {
        files: {
          'style.css': 'style.css'
        }
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: ['js/*/*.js'],
        tasks: ['concat', 'uglify'],
        //tasks: ['concat'],
        options: {
          spawn: false,
        },
      },
      css: {
        files: ['sass/*/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
          spawn: false,

        }
      },
    },

  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['watch']);

};