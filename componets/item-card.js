app.component('item-card',{
    props:{
        depth:{
            type:String
        },
        item:{
            type : String,
            required : true,
        }
    },
    template:
        /*html*/ 
    `
    <div>
        {{depth}}<label :for="'toggle-add-item'+item">{{item}}</label>
        <button :id="'toggle-add-item'+item" @click = "ToggleAddItem" hidden>+</button>
        <button @click = "DeleteMe">x</button>
        <br />
        <add-item v-if="!hideAddItem" @created-new-item="BackPropogateNewItem" @cancel-item="ToggleAddItem" :rand="item"/>
        <div v-for="subItem in this.$root.treeNodeList[item].children">
            <item-card :item="subItem" :depth="depth+'|  '" @add-new-item="BackPropogateItem" @delete-me="BackPropogateDeleteMe"/>
        </div>
    </div>
    `,
    data(){
        return {
            hideAddItem: true,
        }
    },
    methods:{
        BackPropogateNewItem(newItemText) {
            newItem={
                parent:this.item,
                name:newItemText,
                children:[]
            }
            this.$emit("add-new-item",newItem)
        },
        BackPropogateItem(newItem) {
            this.$emit("add-new-item",newItem)
        },
        ToggleAddItem() {
            this.hideAddItem = !this.hideAddItem
        },
        DeleteMe() {
            this.$emit("delete-me",this.item)
        },
        BackPropogateDeleteMe(itemToDel) {
            this.$emit("delete-me",itemToDel)
        },
    },
})