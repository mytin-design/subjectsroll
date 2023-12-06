//get all inputs
let mathmark = document.getElementById("math");
let engmark = document.getElementById("eng");
let kiswmark = document.getElementById("kisw");
let sciemark = document.getElementById("scie");
let inshamark = document.getElementById("insha");
let compmark = document.getElementById("comp");

let allSubjects = [mathmark, engmark, kiswmark, sciemark, inshamark, compmark];

//get output buttons
let outbtn1 = document.getElementById("subject_output_btn1");
let outbtn2 = document.getElementById("subject_output_btn2");




//get output boxes
let totalmarks = document.getElementById("total_marks");
let total_subjs = document.getElementById("total_subjs");

let lowerout = document.querySelector('.lower_output');

//calculate total


outbtn1.addEventListener('click', function givetotalMarks() {
    if(mathmark !== null && engmark !== null && sciemark !== null && kiswmark !== null & inshamark !== null && compmark !== null) {
        //change typeof input from string to number -integer
        let overallMarks = parseInt(mathmark.value) + parseInt(engmark.value) + parseInt(kiswmark.value) + parseInt(sciemark.value) + parseInt(inshamark.value) + parseInt(compmark.value);
        return totalmarks.innerHTML = overallMarks + " Marks.";
    }else {
        let lowerouter = lowerout.innerHTML = '*Insert all marks';
        
        lowerouter.style.color = "#f00";
    }     

});


outbtn2.addEventListener('click', function showsubjectsNum() {
  let outerme = allSubjects.length;  
  total_subjs.innerHTML = outerme + " Subjects.";
})