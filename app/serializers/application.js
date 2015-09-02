import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  keyForAttribute(attr) {
    return Ember.String.underscore(attr);
  },

  payloadKeyFromModelName(modelName) {
    return Ember.String.underscore(modelName);
  },

  keyForRelationship(key, typeClass, method) {
    if (method == "serialize") {
      return `${Ember.String.underscore(key)}_id`;
    } else {
      return key;
    }
  }
});
