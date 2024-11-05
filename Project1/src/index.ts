/**
    stop execution and execute in cli: npm i uuid and 
    restart the project.
    This is just to test how snowpack bundle works
    as it allows us to install JS libraries
 */

import {v4 as uuidV4} from 'uuid'
/*  
    some js libraries dont have types built in,
    so we have to search for the library with types or develop it on
    our own. This lib looks like having types. Otherwise: try to run npm i --save-dev @types/uuid
*/

//console.log(uuidV4()) 

//check the id in inspection mode
//console.log("TEST:inspect in browser console")


//declaring data types
type Task = {
    id: string, 
    title: string, 
    completed: boolean, 
    createdAt: Date
}


/**
    HTMLUListElement helps you work with list elements in a type-safe way, ensuring that only properties applicable to <ul> are available.
    querySelector method may work with generic typization i.e. < >
    getElementByID can not 
    so we can use AS
    
    const form = document.getElementById("#new-task-form") as HTMLFormElement | null   
 */

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.querySelector<HTMLFormElement>("#new-task-form")
const input = document.querySelector<HTMLInputElement>("#new-task-title") 

        //create arr of type Task
        const task_arr:Task [] = loadTasks()
        task_arr.forEach(addListItem)






form?.addEventListener("submit", e => {     //form?. This is optional chaining: if not null and not undefined
    e.preventDefault()                      //preventing form from submitting
    
    if (input?.value == "" || input?.value == null) //optional chaining
    return 
    const task:Task = {        //after creating an object, if hover over the word task: it will show the types
        id: uuidV4(),           //univ id of the task 
        title: input.value,     //text of the task
        completed: false,       //done or not
        createdAt: new Date()   //time created
        }    
        

        //can not push any other type to the arr
        task_arr.push(task)
        // console.log(task_arr)
        saveTasks()
        
        addListItem(task)
        input.value =""

})



//it is better to show error when we have any type
//see config for implicite type any.

//so it is better to make a type Task and set the type at the top of the file
function addListItem(task:Task){

    //create tag elements
    const listItem = document.createElement("li")// li typed is returned as you hover
    const label = document.createElement("label")
    const checkbox = document.createElement("input")

    checkbox.addEventListener("change", ()=>{
        task.completed = checkbox.checked
        // saveTasks() //saving tasks into LocalStorage
    })// check the box means the task is completed

    //input type
    checkbox.type="checkbox"
    checkbox.checked = task.completed

    //attaching checkbox to the task
    label.append(checkbox, task.title) 
    listItem.append(label) // attaching checkbox to list item
    list?.append(listItem) // attaching listItem to list
}


//setting inside local storage
function saveTasks(){
    localStorage.setItem("TASKS", JSON.stringify(task_arr))
}


//reading from LS
function loadTasks(): Task[] {
   const taskJSON = localStorage.getItem("TASKS")
   if (taskJSON==null )
        return []
   return JSON.parse(taskJSON)
}


