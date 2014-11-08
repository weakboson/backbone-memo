App.Router = Backbone.Router.extend({
  routes: {
    'notes/:id' : 'showNoteDetail',
    '*actions'  : 'defaultRoute'
  },
  defaultRoute: function() {
    this.showNoteList();
    this.navigate('notes');
  },
  showNoteDetail: function(id) {
    var note = App.noteCollection.get(id);
    var noteDetailView = new App.NoteDetailView({model: note});
    App.mainContainer.show(noteDetailView);
  },
  showNoteList: function() {
    var noteListView = new App.NoteListView({
      collection: App.noteCollection
    });
    App.mainContainer.show(noteListView);
  }
});
