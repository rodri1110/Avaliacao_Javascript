var esconder = document.querySelector('mostrar-ou-esconder')
var equilatero = document.querySelector('.equilatero')
var isosceles = document.querySelector('.isosceles')
var escaleno = document.querySelector('.escaleno')
var recomecar = document.querySelector('.btn-recomecar')

const btn = document.querySelector("#enviar")
btn.addEventListener("click", function (e) {
    e.preventDefault()

    var lado1 = document.querySelector("#lado1").value
    var lado2 = document.querySelector("#lado2").value
    var lado3 = document.querySelector("#lado3").value
    if (lado1 != '' && lado2 != '' && lado3 != '') {
        document.querySelector("#lado1").disabled = true
        document.querySelector("#lado2").disabled = true
        document.querySelector("#lado3").disabled = true
        if (lado1 == lado2 && lado2 == lado3) {
            console.log('Triangulo Equilátero')
            equilatero.style.display = 'block'
            recomecar.style.display = 'block'
            btn.style.visibility = 'hidden'
        } else if (lado1 != lado2 && lado1 != lado3 && lado3 != lado2) {
            console.log('Triangulo Escaleno')
            escaleno.style.display = 'block'
            recomecar.style.display = 'block'
            btn.style.visibility = 'hidden'
        } else {
            console.log('Triangulo Isosceles')
            isosceles.style.display = 'block'
            recomecar.style.display = 'block'
            btn.style.visibility = 'hidden'
        }
    } else {
        window.alert('Os três lados devem ser preenchidos!')
    }
})

recomecar.addEventListener("click", function (e) {
    e.preventDefault()
    equilatero.style.display = 'none'
    escaleno.style.display = 'none'
    isosceles.style.display = 'none'
    recomecar.style.display = 'none'
    btn.style.visibility = 'visible'
    document.querySelector("#lado1").value = ''
    document.querySelector("#lado2").value = ''
    document.querySelector("#lado3").value = ''
    
    document.querySelector("#lado1").disabled = false
    document.querySelector("#lado2").disabled = false
    document.querySelector("#lado3").disabled = false
})