import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
  channelService: Ember.inject.service("channel"),
  channel: null,

  setupChannel: function(){
    this.set('channel', this.get('channelService').connect('lunch','updates', {}));

    this.channel.on("lunch", lunchData => {
      console.log("Received updated lunch!");
      console.log(lunchData);
      Ember.run.later( () => {
        this.get('store').push('lunch', lunchData.lunch);
      }, 200);
    });

  }.on('init')

});
