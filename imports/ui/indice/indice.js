import './indice.html'
import { Capitulos } from '../../api/capitulos.js'
Template.indice.helpers({
  capitulos: function () {
    return Capitulos.find({}, {sort: {"chaptersequence":1}})
  }
})
