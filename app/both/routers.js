Router.route('home', {
  path: '/',
  action: function() {
    this.redirect('/news/3');
  }
});

Router.route('news', {
  path: /^\/news\/(\d*)/,
  template: 'Home',
  data: function() {
    var news = [{
      dateTime: 'December 19, 2014',
      text: 'December Devshop SF: Advances in MongoDB scalability, Meteor + Polymer, reactive MySQL, and more'
    }, {
      dateTime: 'December 10, 2014',
      text: 'Meteor Day Recap: 4,259 developers at 134 meetups on one day'
    }, {
      dateTime: 'December 9, 2014',
      text: 'Meteor 1.0.1: security fix for allow/deny rules'
    }, {
      dateTime: 'October 28, 2014',
      text: 'Meteor 1.0'
    }];
    return {
      news: news.slice(0, this.params[0])
    };
  },
  action: function() {
    this.render();
  }
});

Router.route('aboutUs');

Router.route('/restful', {where: 'server'})
  .get(function () {
    this.response.end('get request\n');
  })
  .post(function () {
    this.response.end('post request\n');
  });