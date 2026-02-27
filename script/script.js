
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