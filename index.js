
const celsiusField = document.querySelector("#celcius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

// window loading reset
window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
})

convertBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    convertToCelcius();
})

function convertToCelcius(){
    let inputValue = degree.value;

    if(tempType.value === "farenheit"){
        const farenheitToCelcius = (inputValue -32)*(5/9);
        celsiusField.innerHTML = `${farenheitToCelcius.toFixed(3)} &deg; c`;
    }
    else if(tempType.value === "kelvine"){
        const kelvinToCelicus = inputValue - 273.15;
        celsiusField.innerHTML = `${kelvinToCelicus.toFixed(3)} &deg; c`;
    }
}