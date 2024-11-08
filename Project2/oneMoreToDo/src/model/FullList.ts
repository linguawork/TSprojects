import ListItem from "./ListItem";


//adding more features to the interface
interface List{
    list: ListItem[], 
    load():void, 
    save(): void, 
    clearList():void, 
    addItem(itemObj: ListItem):void, 
    removeItem(id:string):void 
}

export default class FullList implements List{
    
    
    
    constructor(
        private _list:ListItem[] = []){

        }
        

    get list():ListItem[]{
        return this._list
    }


    //stopped here
    load():void{
        //giving  a type and getting a list from a storage
        const storedList: string | null = localStorage.getItem("myList")
        if(typeof storedList !== "string") return

        //giving a type of array of Objects and parsing the list
        const parsedList: {_id:string, _item:string, _checked:boolean}[] =
        JSON.parse(storedList)  
        
        //running through array and creating a newListItem for every element and adding it to FullList
        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
            
            //this is a static method
            FullList.instance.addItem(newListItem)
        }

        )

    } 

    save(): void{
        localStorage.setItem("MyList", JSON.stringify(this._list))
    } 

    clearList():void{
        this._list =[]
        this.save()

    } 

    addItem(itemObj: ListItem):void{
        this._list.push(itemObj)
        this.save()


    } 

    removeItem(id:string):void{
        this._list = this._list.filter(item => item.id !== id) // returning everything except our id
        this.save()

    } 
}

