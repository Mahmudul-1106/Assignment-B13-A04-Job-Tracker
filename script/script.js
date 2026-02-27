
let interviewList = [];
let rejectedList = [];
let currentStatus = 'btn-all'

let totalJob = document.getElementById('total-job');
let interviewJob = document.getElementById('interview-job');
let rejectedJob = document.getElementById('rejected-job');

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
    console.log(currentStatus);
    // console.log(selected);

    // adding bg for current button
    selected.classList.remove('btn-soft')
    
    // step 1 finish

    if (id == 'btn-interview' || id == 'btn-rejected') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderThriving()
    } else if (id == 'btn-all') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
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
        rejectedList = rejectedList.filter(item => item.plantName != cardInfo.plantName)

        // after remove rerender the html
        if (currentStatus == 'btn-rejected') {
            renderStruggling()
        }

         calculateCount()


    } else if (event.target.classList.contains('job-rejected')) {
        const parenNode = event.target.parentNode.parentNode;

        const jobTitle = parenNode.querySelector('.job-title').innerText
        const jobType = parenNode.querySelector('.job-type').innerText
        const jobSalary = parenNode.querySelector('.job-salary').innerText
        const jobStatus = parenNode.querySelector('.job-status').innerText
        const jobDes = parenNode.querySelector('.job-des').innerText

        parenNode.querySelector('.job-status').innerText = 'REJECTED'

        const cardInfo = {
            jobTitle,
            jobType,
            jobSalary,
            jobStatus: 'Rejected',
            jobDes
        }

        const rejectExist = rejectedList.find(item => item.plantName == cardInfo.plantName)

        if (!rejectExist) {
            rejectedList.push(cardInfo)
        }

        // removing job from interview list
        interviewList = interviewList.filter(item => item.jobTitle != cardInfo.jobTitle)

        

        // after remove rerender the html
        if (currentStatus == "btn-interview") {
            renderThriving();
        }
        calculateCount()

    }

})