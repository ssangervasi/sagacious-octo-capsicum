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
				//Putting in a js comment for debuggin purposes
				separator: ';/*Separator*/;'
			},
			dist: {
				//Include all javascript files
				src: ['src/**/*.js'],
				//Use package.json name for output file
				dest: 'dist/<%= pkg.name %>.js'
			}
		}
		//TODO: uglify, lint, run tests		
	});
	/* -- Load tasks -- */
		grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-concat');
	/* -- Register tasks for running -- */
	grunt.registerTask('default', ['bower', 'concat']);
	
};

