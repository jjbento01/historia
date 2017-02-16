import './itemchapter.html'
import { Capitulos } from '../../api/capitulos.js'
Template.itemchapter.helpers({
  sequencia: function () { return [null, 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];}
})
Template.itemchapter.events({
  'change .chapselection'(event) {
    event.preventDefault();
    const target = event.target;
    if(isNaN(parseInt(target.value))) {
      this.chaptersequence=null;
    } else {
      this.chaptersequence=parseInt(target.value);
    }
    Capitulos.update({_id:this._id}, this);
  },
  'change .prevselection'(event) {
    event.preventDefault();
    const target = event.target;
    if(isNaN(parseInt(target.value))) {
      this.previouschapter=null;
    } else {
      this.previouschapter=parseInt(target.value);
    }
    Capitulos.update({_id:this._id}, this);
  },
  'change .nextselection'(event) {
    event.preventDefault();
    const target = event.target;
    if(isNaN(parseInt(target.value))) {
      this.nextchapter=null;
    } else {
      this.nextchapter=parseInt(target.value);
    }
    Capitulos.update({_id:this._id}, this);
  }
})
