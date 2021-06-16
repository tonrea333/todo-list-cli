const prompt = require('prompt-sync')({sigint: true});

console.log();
console.log();
console.log("Hello.  This is your to-do list manager.");
console.log();
console.log();
console.log();
console.log("Your to-do list is empty.");
console.log();
console.log("~Select an action~");
console.log("[1] Create a to-do item");
console.log("[2] Complete a to-do item");
let selectionAction =prompt("Which of the two would you like to do(enter 1 or 2)?")
console.log();
console.log();

let count = 0
let createToDo =[];
let completeToDo =[];
let numberIncomplete = 0

while (selectionAction !== 0){
    if (selectionAction == "1"){
        count = count + 1;
    
        console.log("~Creating a new to-do item~")
        let newCreate = prompt("What is this to-do item called?");
        createToDo.push(newCreate);

}
    else if (selectionAction == "2"){
      
        if (count > 0 && createToDo){
            count = count - 1;
            }
        console.log("You have",count,"to-do item(s).");

        
        console.log("~Complete a to-do item~")
        deleteComplete =prompt("Which to-do item would you like to complete?")
        

        createToDo = createToDo.splice(deleteComplete);
        completeToDo.push(createToDo.splice(deleteComplete));


}

    if (createToDo){
    
        numberIncomplete = numberIncomplete + 1;
        console.log("You have",count,"to-do item(s).");
        console.log("",numberIncomplete,". [incomplete]",createToDo,"")
        console.log("[complete]",completeToDo,"");
        console.log("~Select an action~")
        console.log("[1] Create a to-do item");
        console.log("[2] Complete a to-do item");
        selectionAction =prompt("Which of the two would you like to do(enter 1 or 2)?")
        

}

}









