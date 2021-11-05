const prog1 = document.getElementById('prog1')
const prog2 = document.getElementById('prog2')
const ed1 = document.getElementById('ed1')

const arq = document.getElementById('arq')
const ed2 = document.getElementById('ed2')


function mudarCor(mat1, ...arguments) {
    let tam = mat1.classList.length
    mat1.addEventListener('click', () => {

        for (let i = 0; i <= tam; i++) {
            if (mat1.classList[i] == 'desativado') {
                mat1.classList.replace('desativado', 'ativado')
                for (let j = 0; j <= arguments.length; j++) {

                    arguments[j].classList.toggle('ativado')

                }

            } else if (mat1.classList[i] == 'ativado') {

                mat1.classList.replace('ativado', 'desativado')
                for (let j = 0; j <= arguments.length; j++) {

                    arguments[j].classList.toggle('ativado')

                }
            }
        }


    })
}


mudarCor(prog1, prog2, ed1, arq)
mudarCor(ed1, ed2)