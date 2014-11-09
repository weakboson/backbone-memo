App.NoteControlView = Backbone.View.extend({
  render: function() {
    var html = $('#noteControllerView-template').html();
    this.$el.html(html);
    return this;
  }
})
