

let rub = document.getElementById('1coin')
let rub2 = document.getElementById('2coin')
let rub5 = document.getElementById('5coin')
let rub10 = document.getElementById('10coin')

let banknote10 = document.getElementById('10banknote')
let banknote50 = document.getElementById('50banknote')
let banknote100 = document.getElementById('100banknote')

let balance = document.getElementById('balance')

let disp = 0



 rub.addEventListener('click', () => {

     balance.innerHTML = disp += 1;
 }

 )


 rub2.addEventListener('click', () => {

     balance.innerHTML = disp += 2;
 }

 )

rub5.addEventListener('click', () => {

    balance.innerHTML = disp += 5;
}

)

rub10.addEventListener('click', () => {

    balance.innerHTML = disp += 10;
}

)

banknote10.addEventListener('click', () => {

    balance.innerHTML = disp += 10;
}

)

banknote50.addEventListener('click', () => {

    balance.innerHTML = disp += 50;
}

)

banknote100.addEventListener('click', () => {

    balance.innerHTML = disp += 100;
}

)

btns = document.getElementsByClassName("but");
const cup = document.querySelector('.cup');
change = document.querySelector('.change');


for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        if (disp >= 30) {
            cup.style.visibility = "visible";
            cup.classList.add('animate__animated', 'animate__slideInDown', 'animate__delay-4s');
            balance.innerHTML = "Ожидайте ";

            change.innerHTML = (disp -= 30) + "р.";


            if (disp == 0) {
                change.style.visibility = "hidden";
            }
            else {
                change.style.visibility = "visible";
            }
            setTimeout(func, 4000);
            disp = 0;

        }
    });
}

change.addEventListener('click', () => {

    change.style.visibility = "hidden";
}
)

function func() {
    balance.innerHTML = 0;
}



cup.addEventListener('click', () => {

    cup.style.visibility = "hidden";
    cup.classList.remove('animate__animated', 'animate__slideInDown', 'animate__delay-4s');
})



//Drag
// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
   
    // enable autoScroll
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener
    }
  })

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}



