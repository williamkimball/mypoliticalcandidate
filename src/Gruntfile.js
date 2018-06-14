module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
            scripts: {
                files: [
                    "./index.html",
                    "./scripts/**/*.js",
                    "./styles/**/*.css",
                    "!node_modules/**/*.js"
                ],
                tasks: ["eslint", "browserify", "copy"],
                options: {
                    spawn: false
                }
            }
        },
        browserify: {
            options: {
                browserifyOptions: {
                    debug: true,
                    paths: ["./scripts"]
                }
            },
            dist: {
                files: {
                    "../dist/bundle.js": ["./scripts/**/*.js"]
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: "index.html",
                        dest: "../dist/"
                    },
                    {
                        expand:true,
                        src: "styles/*",
                        dest: "../dist"
                    }
                ]
            }
        },
        eslint: {
            src: ["./scripts/**/*.js", "!node_modules/**/*.js"]
        }
    });
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-eslint");
    grunt.registerTask("default", ["eslint", "browserify", "copy", "watch"]);
};