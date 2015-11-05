import { moduleForModel, test } from 'ember-qunit';

moduleForModel('lunch', 'Unit | Model | lunch', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
