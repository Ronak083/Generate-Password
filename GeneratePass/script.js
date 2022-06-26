let bu1El = document.getElementById("genepass")
console.log(bu1El)
let bu2El = document.getElementById("genepass")
console.log(bu2El)
let bu3El = document.getElementById("genepass")
console.log(bu3El)
let bu4El = document.getElementById("genepass")
console.log(bu4El)

var string = "QW67890ERTYUIOPASD12345FGHJKLZXCVBNMqwertyuiop[]{}\|:;'<asdfghjkl>?,./~!@#zxcvbnm$%^&*()_+-="

function pass() {
var pas1 = " "
var pas2 = " "
var pas3 = " "
var pas4 = " "

    for (let i = 0 ; i < 8; i++){
        let num = Math.floor(Math.random()*string.length)
        pas1 += string[num]
    }

    for (let i = 0 ; i < 8; i++){
        let num = Math.floor(Math.random()*string.length + 1)
        pas2 += string[num]
    }
    for (let i = 0 ; i < 8; i++){
        let num = Math.floor(Math.random()*string.length + 1)
        pas3 += string[num]
    }
    for (let i = 0 ; i < 8; i++){
        let num = Math.floor(Math.random()*string.length + 1)
        pas4 += string[num]
    }
    bu1.textContent = pas1
    bu2.textContent = pas2
    bu3.textContent = pas3
    bu4.textContent = pas4
}
