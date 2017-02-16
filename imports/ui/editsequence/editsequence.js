import { Template } from 'meteor/templating';
import { Capitulos } from '../../api/capitulos.js'
import './editsequence.html'
Template.editsequence.helpers({
  capitulos :  function () {
    return Capitulos.find({}, {sort: {"chaptersequence":1}})
  }
})
