const allBtns = document.querySelectorAll('button');



console.log(allBtns)

allBtns.forEach(i=>{

    i.addEventListener('click',()=>{
        i.classList.toggle('ativado')
    })

})





