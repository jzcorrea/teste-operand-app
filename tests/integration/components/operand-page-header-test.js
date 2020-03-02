import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('operand-page-header', 'Integration | Component | operand page header', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{operand-page-header}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#operand-page-header}}
      template block text
    {{/operand-page-header}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
