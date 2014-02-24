Template.posts.helpers({
  
});

Template.posts.events({
  'click .btn-edit': function() {
    alert('Listening and firing from posts/index.js');
  }
});

Template.posts.rendered = function() {
  
};

