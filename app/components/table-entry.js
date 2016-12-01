import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tbody',

  click () {
    this.$().toggleClass('is-open');
  }
});
