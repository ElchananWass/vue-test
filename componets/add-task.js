app.component('add-task',{
    props:{
    },
    template:
        /*html*/ 
    `
    task:<input type="text" v-model="task" placeholder="new task" @keypress="CheckEnter($event)"><br />
    <button id="AddTask" @click="AddTask">Add task</button>
    <button @click="CancelTask">Cancel</button>

    `,
    data(){
        return {
            task: "",
        }
    },
    methods:{
        AddTask() {
            if (this.task != ""){
                this.$emit("new-task",this.task)
            }
            this.task = ""
            this.CancelTask()
        },
        CancelTask() {
            this.$emit("cancel-task")
        },
        CheckEnter($event) {
            if($event.keyCode==13){
                this.AddTask()
            }
        }
    }
})