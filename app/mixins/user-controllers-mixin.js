import Mixin from '@ember/object';

export default Mixin.create({

    isSaving: false,

    actions: {

        save() {

            alert('Chamou!');
        }
    }
});