import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: "/api",
  pathForType: function(type) {
    return Ember.String.pluralize(Ember.String.underscore(type));
  }
});
