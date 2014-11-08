App.NoteDetailView = Backbone.View.extend({
  render: function() {
    var template = _.template($('#noteDetailView-template').text());
    var html = template(this.model.toJSON());
    this.$el.html(html);
    return this;
  }
});
