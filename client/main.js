//On a client, the function will run as soon as the DOM is ready.

//These code should be included in both client and server side
Messages = new Mongo.Collection("messages");

Photos = new Mongo.Collection("photos");

Meteor.subscribe("messages");
Meteor.subscribe("photos");

//settings for signing up users
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
Template.ads.onRendered(function() {
  $.getScript("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", function() {
    var ads, adsbygoogle;
    ads = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-5046136522435444" data-ad-slot="1218246011" data-ad-format="auto"></ins>';
    $('.ads').html(ads);
    return (adsbygoogle = window.adsbygoogle || []).push({});
  });
});
