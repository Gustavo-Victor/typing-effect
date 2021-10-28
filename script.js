//h1
const main_title = window.document.querySelector("#main-title");
//console.log(main_title);
            
//create function
function typeWriter(element){
    const myArray = element.innerHTML.split('');
    element.innerHTML = '';
    //console.log(myArray);

    /*loop to iterate through the array and wait a certain amount of time
    to print each element of the array*/
    myArray.forEach((item, index) => {
        setTimeout(() =>{
        element.innerHTML += item;
        }, 75 * index); 
    });
}

//call function
typeWriter(main_title);