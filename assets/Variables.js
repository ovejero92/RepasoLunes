// esto muestra un mensaje por una ventana emergente 
// alert("Hola desde la alerta")

/*
aldkjakjdsad
laksdjaksjdsa
ashdkajdhkasjhda
alksdjalkd
*/
let nombre
const apellido = "Ovejero"
let anio = 1992
let edad = 2024 - anio

nombre = "Ezequiel"


console.log(nombre +" "+apellido);
console.log(`Tu nombre:${nombre} \nTu apellido:${apellido} \nTu edad es:${edad}`)

// tipo de dato booleano
let lluvia = true

if(!lluvia){
    console.log("Esta lloviendo")
} else {
    console.log("No esta lloviendo")
}
console.log("Mi edad = " + edad)
 //  true           false
if(edad >= 18 && edad < 30) {
    console.log("Sos mayor de 18");
} 
else if(edad >30 && nombre == "Gustavo" || nombre == "gustavo" || nombre == "gusTavo"){
    console.log("Hola Gustavo sos mayor")
}
else if(edad > 30  ){
    console.log("Hola sos mayor pero no Gustavo")
}
else {
    console.log("sos menor que 18")
}