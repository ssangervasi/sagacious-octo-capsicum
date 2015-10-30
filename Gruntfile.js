module.exports = function(grunt) {
	/* -- Establish configuration for tasks -- */
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bower: {
			install: {}
		},
		sass: {
			dist: {
				options: {
					sourcemap: 'none',
					noCache: true
				},
				files: {
					'dist/<%= pkg.name %>.css': 'src/styles/main.scss'
					// 'dist/srsApp.css': 'src/main.scss'
				}
			}
		},
		concat: {
			js: {
				options: {
					stripBanners: true,
					banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
									'<%= grunt.template.today("yyyy-mm-dd") %> */\n',
				},
				//Include all javascript files
				src: [
						'lib/angular/angular.js',
						'lib/**/*.js',
						'src/srsApp.js',
						'src/**/*.js'
				],
				//Use package.json name for output file
				dest: 'dist/<%= pkg.name %>.js'
			}
		},
		copy: {
			main: {
				files: [
					{
						expand: true, 
						cwd: 'src/',
						src: ['index.html', '**/*.html'],
						dest: 'dist/'
						// ,
						// filter: function (path){
						// 	return !/\.html$/.test(path);
						// }
					}
				]
			}
		}
		//TODO: uglify, lint, run tests		
	});
	/* -- Load tasks -- */
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	/* -- Register tasks for running -- */
	//Default to Bear Necessities
	var defaultTasks = ['sass', 'concat', 'copy'];
	grunt.registerTask('default', defaultTasks);
	//Full install, etc.
	grunt.registerTask('full', ['bower'].concat(defaultTasks));
	
};