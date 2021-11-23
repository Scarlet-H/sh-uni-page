

const btns = document.querySelectorAll('.nav-item')
console.log(btns)
for (let i = 0; i < btns.length; i++) {  
    let element = btns[i]
    element.addEventListener('click',function(){
        btns.forEach(item =>{
            item.classList.remove('active')
        })
        element.classList.add('active')
    })
}
const btn = document.querySelectorAll('.nav__item')
console.log(btn)
for (let i = 0; i < btn.length; i++) {  
    let element = btn[i]
    element.addEventListener('click',function(){
        btn.forEach(item =>{
            item.classList.remove('active')
        })
        element.classList.add('active')
    })
}