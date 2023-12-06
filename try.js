let thisOne = document.getElementById("thisone")

let thisTwo = document.getElementById("thistwo");


let thisBtn = document.getElementById('thisbtn')

let outMe = document.querySelector('.outer');


thisBtn.onclick = outputSomething;


function outputSomething() {
    //Sth new
    //Note that the input from the 'input' element is always a string

    //So that

    //let sum = thisOne.value + thisTwo.value

    //if value of thisOne is 55 and thisTwo is 56, the sum is 5556
    //concatenation occurs

    //To solve this, we have to change typeof to Number-integer data type by using parseInt
    
    let sum = parseInt(thisOne.value) + parseInt(thisTwo.value);
    outMe.innerHTML = sum;
}


//calculate total

/*

outbtn1.onclick = givetotalMarks;

function givetotalMarks() {
    if(mathmark !== null && engmark !== null && sciemark !== null && kiswmark !== null & inshamark !== null && compmark !== null) {
        let overallMarks = mathmark + engmark + kiswmark + sciemark + inshamark + compmark;
        return totalmarks.innerHTML = parseInt(overallMarks, 10);
    }else {
        let lowerouter = lowerout.innerHTML = '*Insert all marks';
        
        lowerouter.style.color = "#f00";
    }     

};

*/