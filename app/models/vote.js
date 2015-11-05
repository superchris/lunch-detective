import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr("string"),
  name: DS.attr("string"),
  lunch: DS.belongsTo("lunch"),
  yesNo: DS.attr("boolean")
});
