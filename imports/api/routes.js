import { Capitulos } from './capitulos.js'
Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function() {
  this.layout('layout');
  this.render('empty', {to: "navbar"});
  this.render('indice', { to: "mainpart"});
  this.render('empty', { to: "secondpart"});
  this.render('empty', {to: "listpart"});
});

Router.route('/resumo', function() {
  this.layout('layout');
  this.render('empty', {to: "navbar"});
  this.render('resumos', { to: "mainpart"});
  this.render('empty', { to: "secondpart"});
  this.render('empty', {to: "listpart"});
});

Router.route('/sequence', function() {
  this.layout('layout');
  this.render('empty', {to: "navbar"});
  this.render('editsequence', { to: "mainpart"});
  this.render('empty', { to: "secondpart"});
  this.render('empty', {to: "listpart"});
});


Router.route('/chapterpos/:pos', function() {
  this.layout('layout');
  this.render('navigation', {
    data: function () {
      return Capitulos.findOne({"chaptersequence": parseInt(this.params.pos)});
    },
    to: "navbar"
  });
  this.render('chapter', {
    data: function () {
      return Capitulos.findOne({"chaptersequence": parseInt(this.params.pos)});
    },
    to: "mainpart"
  });
  this.render('empty', { to: "secondpart"});
  this.render('empty', {to: "listpart"});
});
