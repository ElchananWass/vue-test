const app = Vue.createApp({
    data() {
      return {
        goals: [],
        tempNewGoal: ""
      }
    },
    methods: {
      AddGoal() {
          this.goals.push(this.tempNewGoal)
          this.tempNewGoal = ''
      },
      DeleteSubGoal(goalToRemove) {
        index = this.goals.indexOf(goalToRemove);
        if (index > -1) {
            this.goals.splice(index, 1);
        }
      }
    },
  })
  