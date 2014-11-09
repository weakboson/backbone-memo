App.Router = Backbone.Router.extend({
  routes: {
    'notes/:id' : 'showNoteDetail',
    'new'       : 'showNewNote',
    'notes/:id/edit' : 'showEditNote',
    '*actions'  : 'defaultRoute'
  },
  showEditNote: function(id) {
    var self = this;
    var note = App.noteCollection.get(id);
    var noteFormView = new App.NoteFormView({
      model: note
    });
    noteFormView.on('submit:form', function(attrs) {
      note.save(attrs);
      self.showNoteDetail(note.get('id'));
      self.navigate('notes/'+note.get('id'));
    });
    App.mainContainer.show(noteFormView);
    App.headerContainer.empty();
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
