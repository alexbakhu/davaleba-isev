let num1 = 0

let num2 = 0

let button = document.querySelector('.btn1')
let button2 = document.querySelector('.btn2')
let button3 = document.querySelector('.btn3')

let p = document.querySelector('p1')

let p3 = document.querySelector('p3')


button.addEventListener('click', () => {
     
      num1 = num1 + 1
      console.log(num1)
      p.textContent = num1
  })


