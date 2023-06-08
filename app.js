/* Set counter */
let counter = 0;

/* Select the value element and all the buttons */

const value = document.getElementById("value");
const btn = document.querySelectorAll(".btn");

/* We could create each button with a different event listener and each would call a different function but that would be bad written code. So an option would be to create a event listener on the go then check what class is on the element clicked hence do the operation needed as follows */

btn.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const style = e.currentTarget.classList;
        if(style.contains("decrease")){
            counter--;
        }
        else if(style.contains("increase")){
            counter++;
        }
        else {
            counter = 0;
        }
         if (counter > 0) {
            value.style.color = "green"
         }
         if (counter < 0) {
            value.style.color = "red";
         }
         if (counter === 0) {
            value.style.color = "black";
         }
        value.textContent = counter;
    })
})