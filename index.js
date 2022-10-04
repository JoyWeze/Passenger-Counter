

count = 0

function increment(){
    count += 1
    document.getElementById("count-el").innerText = count
}

function decrement(){
    count -= 1
    document.getElementById("count-el").innerText = count
}

/* or
count = 0

countEl = document.getElementById("count-el")

function increment(){
    count =+ 1
    countEl.innerText = count
}*/
//use the .textContent instead of the .innerText to be able to output the human unreadable part of the text

function save(){
    let countStr = count + " - "
    document.getElementById("save-el").textContent += countStr
    document.getElementById("count-el").innerText = 0
    count = 0
}
