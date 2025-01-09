document.getElementById("calculateBtn").addEventListener("click", function () {
    var designCapacity = parseFloat(
        document.getElementById("designCapacity").value
    );
    var fullChargeCapacity = parseFloat(
        document.getElementById("fullChargeCapacity").value
    );

    if (
        !isNaN(designCapacity) &&
        !isNaN(fullChargeCapacity) &&
        fullChargeCapacity !== 0
    ) {
        var percentage = (fullChargeCapacity / designCapacity) * 100;
        animateBattery(percentage);
    } else {
        alert("Please enter valid values.");
    }
});

function animateBattery(percentage) {
    var batteryInner = document.querySelector(".battery-inner");
    var batteryPercentage = document.getElementById("batteryPercentage");
    var currentPercentage = 0;
    var increment = 1;

    var animation = setInterval(function () {
        if (currentPercentage >= percentage) {
            clearInterval(animation);
        } else {
            currentPercentage += increment;
            batteryPercentage.textContent = currentPercentage + "%";
            batteryInner.style.width = currentPercentage + "%";
        }
    }, 30); // ajusta la velocidad de la animación
}
