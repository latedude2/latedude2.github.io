var tagList = new Vue({
  el: '#tag-list',
  data: {
    checkedTags: [],
    tags: [
      { name: 'C#'},
      { name: 'C++'},
      { name: 'Unity'},
      { name: 'Android'},
      { name: 'Arduino'},
      { name: 'HTML'},
      { name: 'CSS'},
      { name: 'JavaScript'},
      { name: 'NodeJS'},
      { name: 'MongoDB'},
      { name: 'Processing'},
      { name: 'Python'},
      { name: 'Pandas'},
      { name: 'OpenCV'},
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
          { title: '💡 Temple of Starlight - First person puzzle game (2021-Present)', 
            link: 'projects/templeOfBoonil.html',
            technologies: ['C#', 'Unity'],
            projectType:'Group'
          },
          { title: '🤖 Rover - Survival/exploration game made for Game Jam round 2 by Backtrace (2021)', 
            link: 'projects/rover.html',
            technologies: ['C#', 'Unity'],
            projectType:'Group'
          },
          { title: '🏴‍☠️ Sail! - Resource management game made for Inclusivity Game jam 2021 (1st place!)', 
            link: 'projects/sail.html',
            technologies: ['C#', 'Unity'],
            projectType:'Group'
          },
          { title: '💃 The Circle of Dance - Rhythm game made for the GMTK Game jam 2021', 
            link: 'projects/theCircleOfDance.html',
            technologies: ['C#', 'Unity'],
            projectType:'Group',
          },
          { title: '🎨 Ink Busters - Multiplayer FPS Game (2021)' , 
            link: '/projects/dynamicDifficultyAdjustment.html',
            technologies: ['C#', 'Unity', 'HTML', 'CSS', 'JavaScript', 'NodeJS', 'MongoDB', 'Python', 'Pandas'],
            projectType:'Group',
          },
          { 
            title: '🔥 Wildfire Rush - Action/Puzzle Game (2021)', 
            link: '/projects/wildfireRush.html',
            technologies: ['C#', 'Unity', 'JavaScript'],
            projectType:'Group',
          },
          { title: '🐝 Game Navigational Aids Research - Adventure Game (2020)', 
            link: '/projects/gameNavigationalAids.html',
            technologies: ['C#', 'Unity', 'Processing', 'Python', 'Pandas'],
            projectType:'Group',
          },
          { title: '🥳 Party LEDs - Arduino project (2020)', 
            link: '/projects/partyLeds.html',
            technologies: ['Arduino', 'Processing'],
            projectType:'Personal',
          },
          { title: '♠️ Poker assistance app - Image Processing project (2019)',
            link: '/projects/pokerApp.html',
            technologies: ['Android', 'Python', 'OpenCV'],
            projectType:'Group',
          },
          { title: '🇩🇰 Language Learning and Narrative Research - Android story based game (2019)', 
            link: '/projects/languageGame.html',
            technologies: ['Android'],
            projectType:'Group',
          },
          { title: '🥚 EggMission - 2D Unity Arcade Driving game (2018)', 
            link: '/projects/eggMission.html',
            technologies: ['C#', 'Unity'],
            projectType:'Group',
          },
          { title: '♟️ Sorex - C++ .NET Chess game (2016)', 
            link: '/projects/sorex.html',
            technologies: ['C++', '.NET'],
            projectType:'Group',
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