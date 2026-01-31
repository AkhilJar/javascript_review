//old form of writing functions
function DoSomething() {

}

//arrow function 
/*
help with callback functions
easier to export
*/
export const DoSomething = () => {

}

//Anonymous functions
//Use - declare function in same line without creating elsewhere 
<button onClick={() => {console.log("Print hello")}}>

</button>

//ternary
//output = if condition ? true case: else case
//use render based on value
const Component = () => {
    return age > 10?<div>Pedro</div> :<div>Jack</div>
}