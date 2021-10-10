input.onButtonPressed(Button.A, function () {
    basic.showNumber(Humedad)
    if (Humedad > 900) {
        music.playMelody("C5 C5 C5 B B C5 C5 C5 ", 1999)
        basic.showIcon(IconNames.Yes)
    } else {
        music.playMelody("D D D C C D D D ", 1999)
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("R")
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    temperatura = temperatura
    basic.showString("" + input.temperature() + "C")
    basic.showString("" + (input.temperature() * (9 / 5) + 32) + "F")
})
let temperatura = 0
let Humedad = 0
music.playMelody("C5 B C5 B C5 B C5 B ", 999)
basic.showLeds(`
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    # # # # #
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    # # # # #
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    # # # # #
    `)
music.playMelody("C5 C5 C5 - - - - - ", 1999)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    # . # . #
    # # # # #
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . # # # .
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    # . . . #
    # # . # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    # # # # #
    # # # # #
    `)
music.playMelody("C D E F G A B C5 ", 1999)
basic.forever(function () {
    Humedad = pins.analogReadPin(AnalogPin.P1)
    if (Humedad > 1010) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (Humedad > 900) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (Humedad > 650) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (Humedad > 450) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            `)
    } else if (Humedad > 250) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    if (Humedad < 850) {
        servos.P1.setAngle(0)
    } else {
        servos.P1.setAngle(134)
        basic.pause(15000)
    }
})
