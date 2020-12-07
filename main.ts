input.onButtonPressed(Button.A, function () {
    rope += -0.1
})
input.onButtonPressed(Button.B, function () {
    rope += 0.1
})
let rope = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(Math.round(rope), 2)
    if (rope < 0) {
        basic.showString("a winner")
    } else {
        basic.showString("b winner")
    }
})
