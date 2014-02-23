/*global Posts, db */


// Show a list of Posts 
Posts.index = AppController.extend({
  template: 'posts',

  waitOn: function() {
    return Meteor.subscribe('posts');
  },

  data: function() {
    return db.posts.find();
  }
});


// Show a single Post 
Posts.show = AppController.extend({
  template: 'showPost',

  waiton: function() {
    return meteor.subscribe('post', this.params.id);
  },

  data: function() {
    return db.posts.findone(this.params.id);
  }
});


// Edit a single Post 
Posts.edit = AppController.extend({
  template: 'editPost',

  waitOn: function() {
    return Meteor.subscribe('post', this.params.id);
  },

  data: function() {
    return db.posts.findOne(this.params.id);
  }
});
 

// Show a new Post page
Posts.new = AppController.extend({
  template: 'newPost'
});
   

// ------------------ CRUD Controllers --------------------

Posts.create = function(data, callback) {
  // TODO
};


Posts.update = function(id, data, callback) {
  db.posts.update(id, data, callback);
};


Posts.destory = function(id, callback) {
  // TODO
};

