let Cantidad_agua = 0
input.onButtonPressed(Button.A, function () {
    Cantidad_agua = 0
    for (let index = 0; index < 30; index++) {
        Cantidad_agua += randint(0, 6)
    }
    basic.showNumber(Cantidad_agua)
})
basic.forever(function () {
	
})
