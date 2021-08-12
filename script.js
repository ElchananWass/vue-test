const app = Vue.createApp({
    data() {
      return {
        treeNodeList:{
          '/':{
            parent:"",
            name:'/',
            children:[]
          },
        },
        tempItem: ""
      }
    },
    methods: {
      DeleteItem(itemToDel) {
        itemItself = this.treeNodeList[itemToDel]
        parent = this.treeNodeList[itemItself.parent]
        index = parent.children.indexOf(itemToDel);
        if (index > -1) {
          parent.children.splice(index, 1);
        }
        this.treeNodeList[itemToDel] = ""
        delete this.treeNodeList[itemToDel]
      },
      AddNewItem(newItem) {
        this.treeNodeList[newItem.name] = newItem
        this.treeNodeList[newItem.parent].children.push(newItem.name)
      },
      AddToRoot() {
        this.AddNewItem({parent:'/',name:this.tempItem,children:[]})
        this.tempItem = ''
      },
    }
  })
  