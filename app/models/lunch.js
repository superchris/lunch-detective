import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr("string"),
  url: DS.attr("string"),
  lunchGroup: DS.belongsTo("lunch_group"),
  votes: DS.hasMany("vote", {async: true}),
  searchTerm: DS.attr("string"),
  recommendation: DS.attr("string")
});
