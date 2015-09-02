import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord("LunchGroup", {});
  },

  actions: {
    create() {
      this.controller.get("model").save().then( () => {
        this.transitionTo("lunch-groups.index");
      });
    }
  }
});
