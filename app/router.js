import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('lunches', {path: "/lunches"}, function() {
    this.route("lunch", {path: "/:lunch_id"});
  });

  this.route('lunch-groups', function() {
    this.route("new");
    this.route("lunch-group", {path: "/:lunch_group_id"}, function() {
      this.route("lunchers", function() {
        this.route("new");
        this.route("luncher", {path: "/:luncher_id"});
      });
      this.route("lunches", function() {
        this.route("new");
      });
    });
  });
  this.route('login');
});

export default Router;
