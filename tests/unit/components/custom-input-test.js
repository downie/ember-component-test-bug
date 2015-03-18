import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('custom-input', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});


test('trivial test if click is defined', function(assert) {
  assert.expect(1);

  var component = this.subject();
  this.render();

  click('input');

  assert.ok(true, 'trivial true check');
});
