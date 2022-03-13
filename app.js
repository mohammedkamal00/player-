//Modules 
const fs = require('fs')
fs.writeFileSync('notes.txt','Hellooo ')

console.log(fs.readFileSync('notes.txt').toString())

fs.appendFileSync('notes.txt' , 'ahmed')

console.log(fs.readFileSync('notes.txt').toString())

const x = require ('./data')
console.log(x)

console.log(x.sum(5,5))


const validator = require('validator')
console.log(validator.isEmail('osama'))
console.log(validator.isEmail('mohammed@yahoo.com'))