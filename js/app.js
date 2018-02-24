new Vue({
  el: '#vue-app',
  data: {
    name: 'Darryl',
    job: 'Front-End Web Developer',
    website: 'http://darrylmendonez.herokuapp.com',
    websiteTag: '<a href="http://darrylmendonez.herokuapp.com" target="_blank">Darryl\'s Profile Page</a>'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + " " + this.name;
    }
  }
});
