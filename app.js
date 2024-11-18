let reviewCard = document.querySelectorAll('.reviewCard');
let index = 0;

let icon = document.getElementById('icon')

let surgery = document.querySelectorAll('.card')

let button = document.getElementById('id')

reviewCard.forEach((cards, index) => {
    cards.style.left = `${index * 100}%`
})
function reviewcards() {
    reviewCard.forEach((curval) => {
        curval.style.transform = `translateX(-${index * 100}%)`
    })
}
setInterval(() => {
    index++;
    if (reviewCard.length == index) {
        index = 0;
    }
    reviewcards()
}, 3000)

//icon 

icon.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('mode')
    if (icon.className == 'bi bi-moon-fill') {
        icon.className = 'bi bi-brightness-high-fill'
    } else if (icon.className == 'bi bi-brightness-high-fill') {
        icon.className = 'bi bi-moon-fill'

    }
})

//surgery
surgery.forEach((card) => {
    card.addEventListener('click', () => {

        let div = document.createElement('div')
        div.classList.add('card-details');
        div.innerHTML = `
     <i id='cross' class="bi bi-x-lg"></i>
     <img src=${card.firstElementChild.src}>
        <h1>${card.lastElementChild.innerHTML}</h1>
        <p>Robot-assisted cardiac surgery is heart surgery done through very small cuts (incisions)
         in the chest. The surgeons use tiny instruments and robot-controlled tools to do heart surgery
          in a way that is much less invasive than open-heart surgery. 
        This surgery is often called robotic cardiac surgery.<br>
        A leg bypass surgery may be necessary if fatty deposits have clogged a blood vessel,
         impeding blood flow through the leg. During this surgery, 
        doctors will create a new pathway for blood to travel.</p>
     `
        document.querySelector('body').appendChild(div)

        document.getElementById('cross').addEventListener('click', () => {
            div.remove();
        })
    })
})

// our patients details

const myButton = document.getElementById('users');

function redirectToUserPage() {
    window.location.href = 'patients.html';
}

myButton.addEventListener('click', redirectToUserPage);


