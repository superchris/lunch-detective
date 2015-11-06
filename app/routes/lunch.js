import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {
    return this.get("store").findRecord("Lunch", params.lunch_id);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set("user", window.googleUser);
  }

});
