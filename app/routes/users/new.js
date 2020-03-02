import Route from '@ember/routing/route';

export default Route.extend({

    title: 'Adicionar usuário',

    renderTemplate() {

        return this.render('users.form');
    }
});