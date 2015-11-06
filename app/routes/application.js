import Ember from 'ember';

import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

  model: function() {
    return this.get("store").findAll("Lunch")
  },

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
