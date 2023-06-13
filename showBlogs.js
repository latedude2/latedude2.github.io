var tagList = new Vue({
  el: '#tag-list',
  data: {
    checkedTags: [],
    tags: [
      { name: 'Unity'},
      { name: 'C#'},
      { name: 'Git'},
    ]
  },
  methods: {
    check: function(e) {
		console.log(this.checkedCategories)
    }
  }
})


var app = new Vue({
    el: '#app',
    data: {
        projects: [
          { title: 'How to setup a Unity Development Environment (2023)', 
            link: 'blogs/UnityEnvironmentSetup.html',
            technologies: ['C#', 'Unity', 'Git'],
            projectType:'Group'
          },
        ]
      },
      computed:{
        filteredProjects() {
          return this.projects.filter(project => {
            return tagList.checkedTags.every(v => project.technologies.includes(v))
          })
        }
      }
  })