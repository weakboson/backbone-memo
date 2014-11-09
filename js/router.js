App.Router = Backbone.Router.extend({
  routes: {
    'notes/:id' : 'showNoteDetail',
    'new'       : 'showNewNote',
    '*actions'  : 'defaultRoute'
  },
  showNewNote: function() {
    var self = this;
    var noteFormView = new App.NoteFormView({
      model: new App.Note()
    });
    noteFormView.on('submit:form', function(attrs) {
      App.noteCollection.create(attrs);
      self.showNoteList();
      self.navigate('notes');
    });
    App.mainContainer.show(noteFormView);
    App.headerContainer.empty();
  },
  defaultRoute: function() {
    this.showNoteList();
    this.navigate('notes');
  },
  showNoteDetail: function(id) {
    var note = App.noteCollection.get(id);
    var noteDetailView = new App.NoteDetailView({model: note});
    App.mainContainer.show(noteDetailView);
    App.headerContainer.empty();
  },
  showNoteList: function() {
    var noteListView = new App.NoteListView({
      collection: App.noteCollection
    });
    App.mainContainer.show(noteListView);
    this.showNoteControl();
  },
  showNoteControl: function() {
    var noteControlView = new App.NoteControlView();
    App.headerContainer.show(noteControlView);
  }
});
