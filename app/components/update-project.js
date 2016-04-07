import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('updateProjectForm');
    },
    updateProject(project) {
      var params = {
        title: this.get('title'),
        details: this.get('details'),
        technologies: this.get('technologies'),
        image: this.get('image'),
      };
      this.toggleProperty('updateProjectForm');
      this.sendAction('updateProject', project, params);
    }
  }
});
