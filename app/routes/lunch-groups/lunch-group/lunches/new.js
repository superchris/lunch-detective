import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord("Lunch", {});
  },

  actions: {
    create() {
      var lunchGroup = this.modelFor("lunch-groups.lunch-group");
      this.currentModel.set("lunchGroup", lunchGroup);
      this.currentModel.save().then( () => {
        this.transitionTo("lunches.lunch", this.currentModel);
      });
    }
  }
});
