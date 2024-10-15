let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');

let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let c4 = document.getElementById('c4');

// Initial setup: show first tab, hide others
c1.style.display = 'block';
c2.style.display = 'none';
c3.style.display = 'none';
c4.style.display = 'none';
btn1.classList.add('active');

// Add event listeners for each button
btn1.addEventListener('click', () => {
    c1.style.display = 'block';
    c2.style.display = 'none';
    c3.style.display = 'none';
    c4.style.display = 'none';
    updateActiveTab(btn1);
});

btn2.addEventListener('click', () => {
    c1.style.display = 'none';
    c2.style.display = 'block';
    c3.style.display = 'none';
    c4.style.display = 'none';
    updateActiveTab(btn2);
});

btn3.addEventListener('click', () => {
    c1.style.display = 'none';
    c2.style.display = 'none';
    c3.style.display = 'block';
    c4.style.display = 'none';
    updateActiveTab(btn3);
});

btn4.addEventListener('click', () => {    
    c1.style.display = 'none';
    c2.style.display = 'none';
    c3.style.display = 'none';
    c4.style.display = 'block';
    updateActiveTab(btn4);
});

function updateActiveTab(activeButton) {
    
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');

    
    activeButton.classList.add('active');
}