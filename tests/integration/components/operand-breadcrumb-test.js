import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('operand-breadcrumb', 'Integration | Component | operand breadcrumb', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{operand-breadcrumb}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#operand-breadcrumb}}
      template block text
    {{/operand-breadcrumb}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
