import Component from '@ember/component';
import { Promise } from 'rsvp';

export default Component.extend({

    tagName: 'form',

    classNames: ['operand-form'],
    
    action: null,

	submit() {

		return this.action();
	}
});