console.log('Js added.')
// Total Job Count

const totalJob = document.getElementById('total-job')
const jobContainer = document.getElementById('job-card-container');
const jobCount = jobContainer.getElementsByClassName('job-card');
totalJob.innerText = jobCount.length;


function Interview(id){
    console.log('Button clicked')
    const jobCard = document.getElementById(id);
    const status = jobCard.querySelector('h3');
    status.style.background = 'lightblue';
    status.innerText = 'Interview';


    const jobCardClone = jobCard.cloneNode(true);

    const interviewSection = document.getElementById('Interview-section');
    interviewSection.appendChild(jobCardClone);

    const interviewJobCard = interviewSection.getElementsByClassName('job-card');
    document.getElementById('interview-job').innerText = interviewJobCard.length;
    console.log(interviewJobCard.length);

}

