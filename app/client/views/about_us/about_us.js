Template.AboutUs.events({
  'click a#home-link': function(e, tmpl) {
    e.preventDefault();
    Router.go('home');
  }
});