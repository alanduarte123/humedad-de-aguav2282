moisture = 0
music.play_melody("C5 B C5 B C5 B C5 B ", 999)

def on_forever():
    global moisture
    moisture = pins.analog_read_pin(AnalogPin.P1)
    if moisture > 1010:
        basic.show_leds("""
            . . # . .
                        . . # . .
                        . . # . .
                        . . # . .
                        . . # . .
        """)
    elif moisture > 900:
        basic.show_leds("""
            . . . . .
                        . . # . .
                        . . # . .
                        . . # . .
                        . . # . .
        """)
    elif moisture > 650:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . # . .
                        . . # . .
        """)
    elif moisture > 450:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . # . .
                        . . # . .
        """)
    elif moisture > 250:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . # . .
        """)
    else:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
basic.forever(on_forever)
