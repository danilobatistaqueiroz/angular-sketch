# Starting from ZERO

create a folder for your project.

execute the commands:

`install nodejs`

`npm install -g bower`

`npm init`

`npm install bower`

At the root of the project create the following directory structure:
`
webapp
---app
------index.html
---dist
`

At the root of the project create **.bowerrc** file with the following content:
```javascript
{
    "directory": "webapp/app/bower_components"
}
```

`bower init`

`bower install angular --save`

`npm install -g gulp`

`npm install --save-dev gulp`

`npm install --save-dev gulp-uglify`

`npm install --save-dev del`

`npm install --save-dev gulp-usemin gulp-minify-html`

'npm i gulp-htmlmin --save-dev'

create the **gulpfile.js** file:

```javascript
var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var usemin = require('gulp-usemin');
var minifyHtml = require('gulp-minify-html');

gulp.task('clean', function (cb) {
    return del([
        // everything inside the dist folder
        'webapp/dist/**/*'
    ], cb);
});

gulp.task('usemin', function () {
    return gulp.src('webapp/app/*.html')
        .pipe(usemin({
            html: [minifyHtml({empty: true, conditionals:true})],
            js: [uglify(), 'concat']
        }))
        .pipe(gulp.dest('webapp/dist'));
});

gulp.task('build', ['clean'], function () {
    gulp.run('usemin');
});
```

`gulp build`

`npm install --save-dev gulp-html-replace`

`npm i gulp-bower-files`