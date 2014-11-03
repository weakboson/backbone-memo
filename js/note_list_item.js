App.NoteListItemView = Backbone.View.extend({
  tagName: 'tr',
  initialize: function() {
    this.listenTo(this.model, 'destroy', this.remove);
  },
  events: {
    'click .js-delete' : 'onClickDelete'
  },
  onClickDelete: function() {
    this.model.destroy();
  },
  render: function() {
    var template = _.template($('#noteListItemView-template').html());
    var html = template(this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});
