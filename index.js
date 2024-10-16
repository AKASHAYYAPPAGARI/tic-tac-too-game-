/*let list =[ "student1","student2","student3"];
list.forEach((value) => {
    console.log(value.toUpperCase());
});
*/



/*let number =[ 2,3,4,5,6,7,8,9,10];
number.forEach((squares) => {
    console.log(squares squares);
});*/




/*let arr =[1,2,3,4,5,6,7];
 let evenarr= arr.filter((val)=> {
    return val % 2!==0;
})
console.log(evenarr);*/




// let employee ={
// name: "jon smith",
// job : "programer",
// age : 31,
// report : function () {
//     alert("name is : "+ this.name+"job name :"+this.job+"job is :"+this.job);
// }

// }

// let alpha = document.querySelector("#one");
//   alpha.addEventListener( "click",function oandx() {
//     if ( alpha.textContent === "") {
//         alpha.textContent= "x";
//     }else if (alpha.textContent==="x") {
//         alpha.textContent="O";
//     } else{
//         alpha.textContent="";
//     }});


// create the data only as x an o in the in boxes 

// created a button for clearing the data on the game 

let restart = document.querySelector("#bu");

let squares = document.querySelectorAll("td");

function clearall (params) {
    for (let i = 0; i < squares.length; i++) {
         squares[i].textContent="";
        }
}
  restart.addEventListener("click",clearall);

    
  
    function addalpha() {
    if (this.textContent==="") {
        this.textContent="X";
    } else if (this.textContent==="X") {
        this.textContent="O";
    } else {
        this.textContent="";
    }
}
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click",addalpha);
   }




