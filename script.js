let a= new Date()
let hours=a.getHours()
let minutes = a.getMinutes()
let seconds = a.getSeconds()
let date  = a.getDate()

console.log(date,hours,minutes,seconds)



let d = document.getElementsByTagName("table")[0]

let e= d.lastElementChild
let f= e.firstElementChild
// console.log(f)

// f.firstElementChild.innerHTML=date
// f.firstElementChild.nextElementSibling.innerHTML=hours
// f.firstElementChild.nextElementSibling.nextElementSibling.innerHTML=minutes
// f.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML=seconds

const update = (date,hours,minutes,seconds)=>{
    a= new Date()
    minutes=a.getMinutes()
    hours=a.getHours()
    seconds=a.getSeconds()
    f.firstElementChild.innerHTML=date
f.firstElementChild.nextElementSibling.innerHTML=hours
f.firstElementChild.nextElementSibling.nextElementSibling.innerHTML=minutes
f.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML=seconds


}


setInterval (update,1000,date,hours,minutes,seconds)



