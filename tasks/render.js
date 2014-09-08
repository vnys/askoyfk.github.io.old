'use strict';

var gulp = require('gulp');
var Handlebars = require('handlebars');
var fs = require('fs');
var $ = require('lib/promisified');
var path = require('path');
var templates = {};


require('handlebars-layouts')(Handlebars);


// Register helpers
require('handlebars-helpers')({
    Handlebars: Handlebars,
    options: {
        marked: {
            smartypants: true
        }
    }
});

// using generators:
// run task with: node --harmony `which gulp` render

gulp.task('render', function() {

    var root = 'src',
        pagesdir =      path.join(root, 'pages'),
        partialsdir =   path.join(root, 'partials'),
        layoutsdir =    path.join(root, 'layouts'),
        templatesdir =  path.join(root, 'templates');


    // TODO: Promisify registering of partials, layouts and templates

    // Register partials
    fs.readdirSync(partialsdir).forEach(function(partial) {
        Handlebars.registerPartial(
            path.basename(partial, '.hbs'),
            fs.readFileSync(path.join(partialsdir, partial), 'utf8')
        )
    });

    // Register layouts
    fs.readdirSync(layoutsdir).forEach(function(layout) {
        Handlebars.registerPartial(
            path.basename(layout, '.hbs'),
            fs.readFileSync(path.join(layoutsdir, layout), 'utf8')
        )
    });


    // Register templates
    fs.readdirSync(templatesdir).forEach(function(template) {
        templates[path.basename(template, '.hbs')] = Handlebars.compile(fs.readFileSync(path.join(templatesdir, template), 'utf8'));
    });



        return $.fs_readDir(pagesdir).then(function(pages) {


            pages = pages.map(function(page) {
                return path.join(pagesdir, page);
            });


            return pages.reduce(function(sequence, pageUrl) {
                return sequence.then(function() {
                    return $.fs_readFile(pageUrl)
                }).then(function(page) {
                    page = JSON.parse(page);
                    fs.writeFile(path.join('app', page.filename), templates[page.template](page));
                })
            }, Promise.resolve());

        }).catch(function(err) {
            console.log(err);
        });


})
