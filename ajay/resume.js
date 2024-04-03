//about dispaly on right window
//image display fom chhose file
document.getElementById("file").addEventListener('change',(event)=>{
    document.getElementById('displayspecial').src=URL.createObjectURL(event.target.files[0]);
})
//displaying first name
document.getElementById('firstname').addEventListener('input',()=>{
    document.getElementById('aboutrightone').textContent=document.getElementById('firstname').value;
    
})
//displaying middle name
document.getElementById('middlename').addEventListener('change',()=>{
    document.getElementById('aboutrightone').textContent+=" "+document.getElementById('middlename').value;
    
})
//displaying last name
document.getElementById('lastname').addEventListener('change',()=>{
    document.getElementById('aboutrightone').textContent+=" "+document.getElementById('lastname').value;

})
//display email
document.getElementById('email').addEventListener('change',()=>{
    document.getElementById('aboutrightoneemail').textContent="Email:-"+document.getElementById('email').value;

})
//display phone
document.getElementById('PhoneNo').addEventListener('change',()=>{
    document.getElementById('aboutrightonephone').textContent="Phoneno:-"+document.getElementById('PhoneNo').value;

})
//display summary
document.getElementById('summary').addEventListener('change',()=>{
    document.getElementById('aboutrightonesummary').textContent="Summary:-"+document.getElementById('summary').value;

})

//achivement display on right window
//title of achivement display
document.getElementById('title').addEventListener('change',()=>{
    document.getElementById('Rachivements1').textContent=document.getElementById('title').value+":-";

})
document.getElementById('description').addEventListener('change',()=>{
    document.getElementById('Rachivements2').textContent=document.getElementById('description').value;

})
//display education on display
document.getElementById('school').addEventListener('change',()=>{
    document.getElementById('REDUCATION1').textContent="Scholl/college:-"+document.getElementById('school').value;

})
document.getElementById('degree').addEventListener('change',()=>{
    document.getElementById('REDUCATION2').textContent="Degree:-"+document.getElementById('degree').value;

})
document.getElementById('city').addEventListener('change',()=>{
    document.getElementById('REDUCATION3').textContent="City:-"+document.getElementById('city').value;

})
document.getElementById('startdateedu').addEventListener('change',()=>{
    document.getElementById('REDUCATION4').textContent="Duration:-"+document.getElementById('startdateedu').value;

})
document.getElementById('enddateedu').addEventListener('change',()=>{
    document.getElementById('REDUCATION4').textContent+="-to-"+document.getElementById('enddateedu').value;

})
document.getElementById('descriptionedu').addEventListener('change',()=>{
    document.getElementById('REDUCATION5').textContent="Description:-"+document.getElementById('descriptionedu').value;

})

//experience display on right window
document.getElementById('title2').addEventListener('change',()=>{
    document.getElementById('REXPERIENCE1').textContent="Title:-"+document.getElementById('title2').value;

})
document.getElementById('company/organization').addEventListener('change',()=>{
    document.getElementById('REXPERIENCE2').textContent="company/organization:-"+document.getElementById('company/organization').value;

})
document.getElementById('location').addEventListener('change',()=>{
    document.getElementById('REXPERIENCE3').textContent="location:-"+document.getElementById('location').value;

})
document.getElementById('startdateexp').addEventListener('change',()=>{
    document.getElementById('REXPERIENCE4').textContent="Duration:-"+document.getElementById('startdateexp').value;

})
document.getElementById('enddateexp').addEventListener('change',()=>{
    document.getElementById('REXPERIENCE4').textContent+="-to-"+document.getElementById('enddateexp').value;

})
document.getElementById('descriptionexp').addEventListener('change',()=>{
    document.getElementById('REXPERIENCE5').textContent="Description:-"+document.getElementById('descriptionexp').value;

})

//project display on right window
document.getElementById('projectname').addEventListener('change',()=>{
    document.getElementById('RPROJECTS1').textContent="ProjectName:-"+document.getElementById('projectname').value;

})
document.getElementById('projectlink').addEventListener('change',()=>{
    document.getElementById('RPROJECTS2').textContent="ProjectLink:-"+document.getElementById('projectlink').value;

})
document.getElementById('descriptionpro').addEventListener('change',()=>{
    document.getElementById('RPROJECTS3').textContent="Description:-"+document.getElementById('descriptionpro').value;

})
// Adding skills to right part
document.getElementById('skills').addEventListener('change',()=>{
    // console.log("shivay");
    // console.log(document.getElementById('skills').value);
    document.getElementById('skillsrightone').textContent=document.getElementById('skills').value;
})

//DOWNLOADING PDF CODE
function generatePDF() {
        
    const element = document.getElementById("resumedownload");
    // document.getElementById("reportbox").style.display = "block";
    // document.getElementById("reportbox").style.marginTop = "0px"; 
    // document.getElementById("pageprint").style.border = "1px solid black";
    html2pdf().from(element).save('download.pdf'); 
    }
    function downloadCode(){
        var x = document.getElementById("ajay");  
        generatePDF();
        setTimeout(function() { window.location=window.location;},3000);}




//print the right  part page
let print1=document.getElementById('print');
let rightcontent=document.getElementById('resumedownload');
print1.addEventListener('click',()=>{
    var printContents = document.getElementById('resumedownload').innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
})




//jobs
// let skillssearch=document.getElementById('skills').value;
// document.getElementById('jobs').addEventListener('click',()=>{
//     window.location.href="./gemini.html";
//     console.log(skillssearch);
// })


//project
document.getElementById('project').addEventListener('click',()=>{
    console.log("mahakal")
    
})




