
let interviewList = [];
let rejectedList = [];
let currentStatus = 'btn-all'

let totalJob = document.getElementById('total-job');
let interviewJob = document.getElementById('interview-job');
let rejectedJob = document.getElementById('rejected-job');
let jobZero = document.getElementById('job-zero');

const allBtn = document.getElementById('btn-all')
const interviewBtn = document.getElementById('btn-interview')
const rejectedBtn = document.getElementById('btn-rejected')

const allCardSection = document.getElementById('job-card-container');
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filtered-section')

function calculateCount() {
    totalJob.innerText = allCardSection.children.length //3
    interviewJob.innerText = interviewList.length
    rejectedJob.innerText = rejectedList.length
}

calculateCount();

// step 1;
function toggleStyle(id) {
    // removing bg for all
    allBtn.classList.add('btn-soft');
    interviewBtn.classList.add('btn-soft');
    rejectedBtn.classList.add('btn-soft');


    // console.log(id);
    const selected = document.getElementById(id)//this is the button that clicked for filter

    currentStatus = id
    // console.log(currentStatus);
    // console.log(selected);

    // adding bg for current button
    selected.classList.remove('btn-soft')
    
    // step 1 finish

    if (id == 'btn-interview' ) {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderInterview()   
    }
    
    else if(id == 'btn-rejected'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderRejected()
    }
    
    else if (id == 'btn-all') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
        jobZero.classList.add('hidden')

        if(allCardSection.children.length === 0){
        jobZero.classList.remove('hidden')
    }
    else{
        jobZero.classList.add('hidden')
    }
    }
 
}

// step-2
mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('job-interview')) {
        const parenNode = event.target.parentNode.parentNode;
        

        const jobTitle = parenNode.querySelector('.job-title').innerText
        const jobType = parenNode.querySelector('.job-type').innerText
        const jobSalary = parenNode.querySelector('.job-salary').innerText
        const jobStatus = parenNode.querySelector('.job-status').innerText
        const jobDes = parenNode.querySelector('.job-des').innerText

        parenNode.querySelector('.job-status').innerText = 'INTERVIEW'
        parenNode.querySelector('.job-status').classList.remove('bg-red-300')
        parenNode.querySelector('.job-status').classList.add('bg-green-300')

        const cardInfo = {
            jobTitle,
            jobType,
            jobSalary,
            jobStatus: 'Interview',
            jobDes
        }

        const interviewExist = interviewList.find(item => item.jobTitle == cardInfo.jobTitle)

        if (!interviewExist) {
            interviewList.push(cardInfo)
        }

        // step 2 finish
        // removing the job from reject list
        rejectedList = rejectedList.filter(item => item.jobTitle != cardInfo.jobTitle)

        // after remove rerender the html
        if (currentStatus == 'btn-rejected') {
            renderRejected()
        }

         calculateCount()


    } else if (event.target.classList.contains('job-rejected')) {
        const parenNode = event.target.parentNode.parentNode;

        const jobTitle = parenNode.querySelector('.job-title').innerText
        const jobType = parenNode.querySelector('.job-type').innerText
        const jobSalary = parenNode.querySelector('.job-salary').innerText
        const jobStatus = parenNode.querySelector('.job-status').innerText
        const jobDes = parenNode.querySelector('.job-des').innerText

        parenNode.querySelector('.job-status').innerText = 'REJECTED';
        parenNode.querySelector('.job-status').classList.remove('bg-green-300')
        parenNode.querySelector('.job-status').classList.add('bg-red-300')

        const cardInfo = {
            jobTitle,
            jobType,
            jobSalary,
            jobStatus: 'Rejected',
            jobDes
        }

        const rejectExist = rejectedList.find(item => item.jobTitle == cardInfo.jobTitle)

        if (!rejectExist) {
            rejectedList.push(cardInfo)
        }

        // removing job from interview list
        interviewList = interviewList.filter(item => item.jobTitle != cardInfo.jobTitle)

        

        // after remove rerender the html
        if (currentStatus == "btn-interview") {
            renderInterview();
        }
        calculateCount()

    }

})

// step 3  html file creation
function renderInterview() {

    if(interviewList.length === 0){
        jobZero.classList.remove('hidden')
    }
    else{
        jobZero.classList.add('hidden')
    }

    // make the filterSection empty every time
    filterSection.innerHTML = ''

    // crating innerHtml
    for (let job of interviewList) {
        // console.log(job);

        let div = document.createElement('div');
        div.className = 'job-card my-5 p-6 flex justify-between bg-[#fff] rounded-lg'
        div.innerHTML = `
         <div>
                    <h4 class="job-title text-xl font-semibold">${job.jobTitle}</h4>
                    <p class="job-type text-[#64748B]">${job.jobType}</p>
                    <br>
                    <p class="job-salary text-[#64748B]">${job.jobSalary}</p>
                    <br>
                    <h3 class="job-status p-2 bg-green-300 max-w-32 text-center rounded-md font-medium">${job.jobStatus}
                    </h3>
                    <br>
                    <p class="job-des">${job.jobDes}</p>
                    <br>


                    <button class="job-interview btn btn-outline btn-success">INTERVIEW</button>
                    <button class="job-rejected btn btn-outline btn-error">REJECTED</button>
                </div>
                
        `
        filterSection.appendChild(div)
    }
}


// step 4  html file creation
function renderRejected() {
    if(rejectedList.length === 0){
        jobZero.classList.remove('hidden')
    }
    else{
        jobZero.classList.add('hidden')
    }
    // make the filterSection empty every time
    filterSection.innerHTML = ''

    // crating innerHtml
    for (let job of rejectedList) {
        // console.log(job);

        let div = document.createElement('div');
        div.className = 'job-card my-5 p-6 flex justify-between bg-[#fff] rounded-lg'
        div.innerHTML = `
         <div>
                    <h4 class="job-title text-xl font-semibold">${job.jobTitle}</h4>
                    <p class="job-type text-[#64748B]">${job.jobType}</p>
                    <br>
                    <p class="job-salary text-[#64748B]">${job.jobSalary}</p>
                    <br>
                    <h3 class="job-status p-2 bg-red-300 max-w-32 text-center rounded-md font-medium">${job.jobStatus}
                    </h3>
                    <br>
                    <p class="job-des">${job.jobDes}</p>
                    <br>


                    <button class="job-interview btn btn-outline btn-success">INTERVIEW</button>
                    <button class="job-rejected btn btn-outline btn-error">REJECTED</button>
                </div>
                
        `
        filterSection.appendChild(div)
    }
}


// delete function
function deleteJob(event){
    let removeJob =  event.target.parentNode.parentNode.parentNode;
    
    // console.log(removeJob);

    let removeTitle = removeJob.querySelector('.job-title').innerText;

    interviewList = interviewList.filter(item => item.jobTitle != removeTitle);
    rejectedList = rejectedList.filter(item => item.jobTitle != removeTitle);

    removeJob.remove();
    calculateCount();

    if(allCardSection.children.length === 0){
        jobZero.classList.remove('hidden')
    }
    

}



