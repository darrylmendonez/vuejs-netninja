new Vue({
  el: '#vue-app',
  data: {
    name: 'Darryl',
    job: 'Front-End Web Developer',
    website: 'http://darrylmendonez.herokuapp.com'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + " " + this.name;
    }
  }
});
