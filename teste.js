const prog1 = document.getElementById('prog1')
const estruturaI = document.getElementById('ed1')
const estruturaII = document.getElementById('ed2')
const introCC = document.getElementById('introCC')
const infoSocidade = document.getElementById('infoS')
const vetores = document.getElementById('vetores')
const algebraL = document.getElementById('algebraL')

prog1.addEventListener('click', () => {
    if (prog1.classList.contains('desativado')) {
        prog1.classList.replace('desativado', 'ativado')
        estruturaI.classList.add('ativado')
        estruturaII.classList.add('ativado')

    } else if (prog1.classList.contains('ativado')) {
        prog1.classList.replace('ativado', 'desativado')
        estruturaI.classList.remove('ativado')
        estruturaII.classList.remove('ativado')
    }

})

introCC.addEventListener('click', () => {
    if (introCC.classList.contains('desativado')) {
        introCC.classList.replace('desativado', 'ativado')
        infoSocidade.classList.add('ativado')

    } else if (introCC.classList.contains('ativado')) {
        introCC.classList.replace('ativado', 'desativado')
        infoSocidade.classList.remove('ativado')

    }
})

vetores.addEventListener('click', () => {
    if (vetores.classList.contains('desativado')) {
        vetores.classList.replace('desativado', 'ativado')
        algebraL.classList.add('ativado')

    } else if (vetores.classList.contains('ativado')) {
        vetores.classList.replace('ativado', 'desativado')
        algebraL.classList.remove('ativado')

    }
})




