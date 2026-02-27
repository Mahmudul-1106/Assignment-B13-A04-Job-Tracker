console.log('Js added.')
// Total Job Count
function totalJobCount(){
    const totalJob = document.getElementById('total-job')
    const jobContainer = document.getElementById('job-card-container');
    const jobCount = jobContainer.getElementsByClassName('job-card');
    totalJob.innerText = jobCount.length;  
}


// clicking All Button function
document.getElementById('btn-all').addEventListener('click', function(){

   
    document.getElementById('job-card-container').classList.remove('hidden');
    document.getElementById('Interview-section').classList.add('hidden');

    document.getElementById('btn-all').classList.remove('btn-soft');
    document.getElementById('btn-interview').classList.add('btn-soft');
})



// Clicking Interview button Functions
document.getElementById('btn-interview').addEventListener('click', function(){

    const interviewJobs = document.getElementById('interview-job').innerText;
    if(Number(interviewJobs) > 0){
        document.getElementById('interview-zero').classList.add('hidden');
    }
    if(Number(interviewJobs) == 0){
        document.getElementById('interview-zero').classList.remove('hidden');
    }


    document.getElementById('job-card-container').classList.add('hidden');
    document.getElementById('Interview-section').classList.remove('hidden');

    document.getElementById('btn-all').classList.add('btn-soft');
    document.getElementById('btn-interview').classList.remove('btn-soft');
})


// clicking delete button functions
function Delete(id){
   const deleteJob = document.getElementById(id).remove();
   
   totalJobCount();
}


// Interview function
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


totalJobCount();