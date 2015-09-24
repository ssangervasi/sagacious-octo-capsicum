module.exports = function(grunt) {
	/* -- Establish configuration for tasks -- */
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bower: {
			install: {
			}
		},
		concat: {
			options: {
				//Putting in a js comment for debugging purposes
				separator: ';/*Separator*/;'
			},
			dist: {
				//Include all javascript files
				src: ['lib/angular/angular.js', 'lib/**/*.js', 'src/**/*.js'],
				//Use package.json name for output file
				dest: 'dist/<%= pkg.name %>.js'
			}
		},
		copy: {
			main: {
				src: 'src/index.html',
				dest: 'dist/index.html'
			}
		}
		//TODO: uglify, lint, run tests		
	});
	/* -- Load tasks -- */
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	/* -- Register tasks for running -- */
	grunt.registerTask('default', ['bower', 'concat', 'copy']);
	
};

