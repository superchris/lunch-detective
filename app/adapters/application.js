import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: "/api",
  host: "http://lunch-detective-server.herokuapp.com",
  pathForType: function(type) {
    return Ember.String.pluralize(Ember.String.underscore(type));
  }
});
