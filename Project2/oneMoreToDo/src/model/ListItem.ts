export interface Item{
    id:string, 
    item: string, 
    checked: boolean
}

export default class ListItem implements Item{


//a better writing with default parameters and initializtion
      constructor(
        private _id:string = '',
        private _item:string = '',
        private _checked = false
      ){}

//another way of initialization with default values, but this is not a clean code
    // class ListItem {
    //     private _id: string = '';
    //     private _item: string = '';
    //     private _checked: boolean = false;
        
    //     constructor(id: string, item: string, checked: boolean) {
    //       this._id = id;
    //       this._item = item;
    //       this._checked = checked;
    //     }
    //   }



// correct initialization without default values
// class ListItem {
//     private _id: string;
//     private _item: string;
//     private _checked: boolean;
    
//     constructor(id: string, item: string, checked: boolean) {
//       this._id = id;
//       this._item = item;
//       this._checked = checked;
//     }
//   }



      //dont have to write the function word with any function
      //getters and setters have get /set
      get id():string{
        return this._id
      }

      set id(id:string){
        this._id = id 
      }


      get item():string{
        return this._item
      }

      set item(item:string){
        this._item = item 
      }


      get checked():boolean{
        return this._checked
      }

      set checked(checked:boolean){
        this._checked = checked 
      }



}