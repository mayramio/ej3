let nombre

nombre = prompt ('Ingrese su nombre')

console.log(nombre)

let edad = prompt('Ingrese su edad')

if(edad < 30){
    console.log('Hola, cómo andas?')
    alert("Hola, cómo andas " + nombre )
} else {
    console.log('Bienvenido. Buenos días')
    alert("Bienvenido. Buenos dias " + nombre)
}
