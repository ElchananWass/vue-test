app.component('add-item',{
    props:{
        rand:{
            type: String
        }
    },
    template:
        /*html*/ 
    `
    item:<input type="text" v-model="item" ref='input' placeholder="new item" @keyup.enter="AddItem"><br />
    <button id="AddItem" @click="AddItem">Add item</button>
    <button @click="CancelItem">Cancel</button>

    `,
    data(){
        return {
            item: "",
        }
    },
    methods:{
        AddItem() {
            if (this.item != ""){
                this.$emit("created-new-item",this.item)
            }
            this.item = ""
            this.CancelItem()
        },
        CancelItem() {
            this.$emit("cancel-item")
        },
    },
    mounted() {
        this.$refs.input.focus()
    }
})