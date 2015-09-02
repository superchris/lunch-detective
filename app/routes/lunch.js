import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {title: "Tacos", imageUrl: "http://s3-media4.fl.yelpcdn.com/bphoto/J_SZToJQ61vNQIcabfXCaw/o.jpg"};
  }
});
