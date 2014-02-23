/*global Posts */


Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {

  // Route Route
  this.route('posts',    { path: '/', controller: Posts.index });

  // Posts Routes
  this.route('posts',    { path: '/posts',          controller: Posts.index });
  this.route('newPost',  { path: '/posts/new',      controller: Posts.new   });
  this.route('showPost', { path: '/posts/:id',      controller: Posts.show  });
  this.route('editPost', { path: '/posts/edit/:id', controller: Posts.edit  });
  
}); // _end_router_

