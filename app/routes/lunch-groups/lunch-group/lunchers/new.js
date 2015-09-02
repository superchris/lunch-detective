import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord("Luncher", {});
  },

  actions: {
    create() {
      var lunchGroup = this.modelFor("lunch-groups.lunch-group");
      this.currentModel.set("lunchGroup", lunchGroup);
      this.currentModel.save().then( () => {
        this.send("luncherCreated");
      });
    }
  }
});
