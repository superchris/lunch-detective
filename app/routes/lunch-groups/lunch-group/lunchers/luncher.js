import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.get("store").findRecord("Luncher", params.luncher_id);
  }
});
