radiusValue = document.getElementById("radius")
radiusValue.addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
        let radius = parseFloat(radiusValue.value);
        let volume = ((4 / 3) * Math.PI * (Math.pow(radius, 3)))
        document.getElementById("volume").innerHTML = volume;
        console.log(volume);
    }
});



