import Ember from 'ember';

import {Socket} from '../phoenix';

export default Ember.Service.extend({

  connect: function(channel, topic, initialPayload={}){
    let socket = new Socket("ws://localhost:4000/socket");
    socket.connect();
    let chan = socket.channel(`${channel}:${topic}`, initialPayload);

    chan.join().receive("ok", chan => {
      console.log("Success!");
    });
    return chan;
  }
});
