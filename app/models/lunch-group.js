import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  lunchers: DS.hasMany("luncher", {async: true})
});
