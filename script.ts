// Get Refernces to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle  Form Submission:
form.addEventListener('submit', (event: Event)=>{
    event.preventDefault(); //prevent  Page Reload

// collect Input Values.
const name = (document.getElementById ('name') as HTMLInputElement).value
const fathername = (document.getElementById ('fathername') as HTMLInputElement).value
const phone = (document.getElementById ('phone') as HTMLInputElement).value
const national = (document.getElementById ('national') as HTMLInputElement).value
const email = (document.getElementById ('email') as HTMLInputElement).value
const education = (document.getElementById ('education') as HTMLInputElement).value
const experiance = (document.getElementById ('experiance') as HTMLInputElement).value
const skills = (document.getElementById ('skills') as HTMLInputElement).value


// Generate the resume content Dynamically
const resumeHTML = `
<h2><b>Resume</b></h2>
<h3>PERSONAL INFORMATION</h3>
<p><b>Name: </b>${name}<p>
<p><b>Father Name: </b>${fathername}</p>
<p><b>Phone: </b>${phone}</p>
<p><b>National ID: </b>${national}</p>
<p><b>Email: </b>${email}</p>


<h3>EDUCATION</h3>
<p>${education}</p>

<h3>EXPERIANCE</h3>
<p>${experiance}</p>

<h3>SKILLS</h3>
<p>${skills}</p>
`;
//display the Generate Resume

if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
}else{ 
   console.error('The Resume display element is missing.'); 
}
});