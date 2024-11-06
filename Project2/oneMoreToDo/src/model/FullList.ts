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

