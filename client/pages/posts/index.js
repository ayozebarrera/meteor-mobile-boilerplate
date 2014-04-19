Template.posts.helpers({
  
});

Template.posts.events({
  'click .btn-edit': function() {
    alert('Listening and firing from posts/index.js');
  }
});

Template.posts.rendered = function() {
  // add class to cancel out first cell border, TODO convert to css selector
  $('.tableview-cell').first().addClass('first-cell');
};

