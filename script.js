let rodytiEl = document.getElementById("rodyti-btn")
let btn = document.createElement("button")
let btnText = document.createTextNode("maisyti-btn")
let nuotraukos = document.getElementById("nuotraukos")
let ntrArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']


rodytiEl.addEventListener("click", rodyti)

function rodyti(){
    let rodyti = document.getElementById("rodyti")
    let maisytiEl = document.getElementById("maisyti-btn")
    if (rodyti.style.display ==="block"){
        rodyti.style.display = "none"
        maisytiEl.style.display = "none"
        maisytiEl.style.margin = "auto"
        

        document.getElementById("rodyti-btn").innerHTML = "Rodyti"
    }else{
        rodyti.style.display = "block"
        maisytiEl.style.display = "block"
        maisytiEl.style.margin = "auto"
        document.getElementById("rodyti-btn").innerHTML = "Slepti"
    }
        maisytiEl.addEventListener('click', maisyti)
        function maisyti(){
            nuotraukos.innerHTML = " "
            ntrArray.sort(function(){ return - Math.random() * 6 + 5})
            for (let i = 0; i < ntrArray.length; i++) {
                nuotraukos.innerHTML +=`<img src="img/${ntrArray[i]}">`
            }
        }
}