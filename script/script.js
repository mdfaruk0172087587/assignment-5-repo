const buttons = document.querySelectorAll('.completed-btn');
for (const btn of buttons) {
    btn.addEventListener('click', function (event) {
        const button = event.target;
        const title = event.target.parentNode.parentNode.parentNode.childNodes[3].innerText;
        if (button) {
            alert('kire chodir bhai');
            button.disabled = true;
            const taskValue = parseInt(document.getElementById('task-assigned').innerText);
            const upValue = parseInt(document.getElementById('in-number').innerText);
            const value = 1;
            document.getElementById('task-assigned').innerText -= 1;
            document.getElementById('in-number').innerText = upValue + value;
            const comment = document.getElementById('comment-section');
            const div = document.createElement('div');
            div.innerHTML = `
       <div class="bg-slate-300 p-3 rounded-md"> ${title} ${hours}:${minutes}:${seconds}:${amPm}</div>
       `;
            comment.appendChild(div);
        }
    })
}
// 6 btn
document.getElementById('btn-last').addEventListener('click', function () {
    alert('ha ha atai bastob');
})
// new page
document.getElementById('discover-div').addEventListener('click', function () {
    document.getElementById('header-hidden').classList.add('hidden');
    document.getElementById('main-section-hidden').classList.add('hidden');
    document.getElementById('chain-hidden-section').classList.remove('hidden');
})
// back btn
document.getElementById('Back-to-desk').addEventListener('click', function () {
    document.getElementById('header-hidden').classList.remove('hidden');
    document.getElementById('main-section-hidden').classList.remove('hidden');
    document.getElementById('chain-hidden-section').classList.add('hidden');
})
// set time
const setTime = new Date();
const day = setTime.getDay();
const dayName = setTime.toLocaleString('en-US', { weekday: 'long' });
const minutes = setTime.getMinutes();
const seconds = setTime.getSeconds();
const hours = setTime.getHours();
const year = setTime.getFullYear();
const month = setTime.toLocaleString('en-US', { month: 'long' });
const amPm = hours < 12 ? "AM" : "PM";
document.getElementById('day').innerText = `${dayName}`;
document.getElementById('time').innerText = `${month} ${day} ${year}`;
// clear history
document.getElementById('clear-history').addEventListener('click', function () {
    document.getElementById('comment-section').style.display = 'none';
});
// thi m ching
function setColor() {
    const color = '0123456789ABCDEF';
    let colorCode = '#';
    for (let i = 0; i < 6; i++) {
        colorCode += color[Math.floor(Math.random() * 16)];
    }
    return colorCode;
};
document.getElementById('btn-theme').addEventListener('click', function () {
    document.body.style.backgroundColor = setColor();
});

