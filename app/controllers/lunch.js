import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    accept() {
      this.set("model.accepted", true);
    }
  }
});
