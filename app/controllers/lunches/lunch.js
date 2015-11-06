import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createVote(yesNo) {
      var vote = this.get("store").createRecord("vote", {
        yesNo: yesNo,
        name: this.get("session.content.secure.userName"),
        email: this.get("session.content.secure.userEmail"),
      });
      vote.set("lunch", this.get("model"));
      vote.save();
    }
  }
});
