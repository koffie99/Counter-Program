let subtract = document.getElementById("subtract");
let add = document.getElementById("add");
let reset = document.getElementById("reset");
let counter = document.getElementById("counter");
let count = 0;


// Add event listeners

add.addEventListener('click', function(){

    counter.innerHTML = ++ count;

})

reset.addEventListener('click', function(){

	count = 0;
    counter.innerHTML = count;

})

subtract.addEventListener('click', function(){

    counter.innerHTML = -- count;

})