const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        list: ["eat","sleep","enjoy","kill :)"],
        tempTask: "",
      }
    },
    methods: {
      AddTask() {
        if (this.tempTask != ''){
          this.list.push(this.tempTask)
        }
        this.tempTask = ''
      
      },
      RemoveTask(event) {
        const index = this.list.indexOf(event.target.name)
          if (index > -1) {
            this.list.splice(index, 1)
        }
      }
    },
    mounted() {
        setInterval(() => {
          this.counter++
        }, 1000)
      }
  })
  