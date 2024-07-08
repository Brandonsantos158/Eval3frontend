function updateValue(value) {
    const rangeValueElement = document.getElementById("rangeValue1");
    const alertMessageElement = document.getElementById("success-alert");

    rangeValueElement.innerText = value;

    if (value < 1 || value > 120) {
        alertMessageElement.style.display = "block";
    } 
    else {
        alertMessageElement.style.display = "none";
    }
}

function updateValue2(value) {
    const rangeValueElement = document.getElementById("rangeValue2");
    const alertMessageElement = document.getElementById("success-alert2");

    rangeValueElement.innerText = value;

    if (value < 5 || value > 150) {
        alertMessageElement.style.display = "block";
    } 
    else {
        alertMessageElement.style.display = "none";
    }
}

function calcular() {
    var selectElement = document.getElementById("activity-select");
    var eleccion = selectElement.value;
    var peso = parseFloat(document.getElementById("rangeValue1").innerText);
    var minutos = parseFloat(document.getElementById("rangeValue2").innerText);
    
    if (eleccion === "1") {
        met = 3.5
    } 
    else if (eleccion === "2") {
        met = 8.0
    } 
    const calorias = (met * 3.5 * peso * (minutos / 200));
    console.log("Quema de calorias es de: " + calorias);

    document.getElementById("alert-text").innerText = "La quema de calorias es de: " + calorias + " durante " + minutos + " (Min) ";
    document.getElementById("success-alert3").style.display = "block";

}








