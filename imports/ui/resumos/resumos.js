import './resumos.html'
import { Capitulos } from '../../api/capitulos.js'
Template.resumos.helpers({
  count: function () {return Capitulos.find().count()},
  capitulos: function () {
    return Capitulos.find({}, {sort: {"chaptersequence":1}});
  }
})
