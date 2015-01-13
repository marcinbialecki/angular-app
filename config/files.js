/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function (lineman) {
    return {
        js: {
            vendor: [
                "vendor/bower/jquery/jquery.min.js",
                "vendor/bower/angular/angular.js",
                "vendor/bower/bootstrap/dist/js/bootstrap.min.js",
                "vendor/bower/angular-bootstrap/ui-bootstrap-tpls.min.js",
                "vendor/js/**/*.js"
            ],
            app: [
                "app/js/app.js",
                "app/js/**/*.js"
            ]
        },
        css: {
            vendor: [
                "vendor/bower/bootstrap/dist/css/bootstrap.min.css",
                //'vendor/bower/bootstrap/dist/css/bootstrap-theme.min.css',
                "vendor/css/custom.css",
                "vendor/bower/ng-table/ng-table.css",
                "vendor/bower/font-awesome/css/font-awesome.css",
                'app/css/**/*.css'
            ]
        },
        webfonts: {
            root: "fonts"
        }

    };
};