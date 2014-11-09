window.App = {};

var initializeNotes = function() {
  var noteCollection = new App.NoteCollection([
    {title: 'テスト1', body: 'テスト1です。'},
    {title: 'テスト2', body: 'テスト2です。'},
    {title: 'テスト3', body: 'テスト3です。'}
  ]);
  noteCollection.each(function(note) {
    note.save();
  });
  return noteCollection.models;
};

$(function() {
  App.noteCollection = new App.NoteCollection();
  App.mainContainer = new App.Container({
    el: '#main-container'
  });
  App.headerContainer = new App.Container({
    el: '#header-container'
  })
  App.noteCollection.fetch().then(function(notes) {
    if (notes.length === 0) {
      var models = initializeNotes();
      App.noteCollection.reset(models);
    }
  });
  App.router = new App.Router();
  Backbone.history.start();
});
