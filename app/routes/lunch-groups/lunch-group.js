import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.get("store").findRecord("LunchGroup", params.lunch_group_id);
  },
  actions: {
    luncherCreated() {
      this.refresh();
    }
  }
});
