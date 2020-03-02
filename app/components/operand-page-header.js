import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';

export default Component.extend({

    router: service(),

    classNames: ['operand-page-header'],

    title: computed('router.currentURL', function() {

        const currentRoute = getOwner(this).lookup(`route:${this.get('router.currentRouteName')}`);

        return currentRoute.title;
    })
});