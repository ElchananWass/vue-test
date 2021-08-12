app.component('task-card',{
    props:{
        depth:{
            type:String
        },
        text:{
            type : String,
            required : true,
        }
    },
    template:
        /*html*/ 
    `
    <div>
        {{depth}}<label :for="'toggle-add-text'+text">{{text}}</label>
        <button :id="'toggle-add-text'+text" @click = "ToggleAddTask" hidden>+</button>
        <button @click = "DeleteMe">x</button>
        <br />
        <div v-for="task in tasks">
            <task-card :text="task" :depth="depth + '|  '" @delete-me="DeleteSubTask"></task-card>
        </div>
        <add-task v-if="!hideAddTask" @new-task="AddNewTask" @cancel-task="ToggleAddTask"></add-task>
    </div>
    `,
    data(){
        return {
            tasks:[],
            hideAddTask: true,
        }
    },
    methods:{
        AddNewTask(newTask) {
            this.tasks.push(newTask)
        },
        ToggleAddTask() {
            this.hideAddTask = !this.hideAddTask
        },
        DeleteMe() {
            this.tasks = []
            this.$emit("delete-me",this.text)
        },
        DeleteSubTask(taskToRemove) {
            index = this.tasks.indexOf(taskToRemove);
            if (index > -1) {
                this.tasks.splice(index, 1);
            }
        }
    },
})