let a = 0
let b = 0
while (1) {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showNumber(a + b)
    } else if (input.buttonIsPressed(Button.A)) {
        a = a + 1
        basic.showNumber(a)
    } else if (input.buttonIsPressed(Button.B)) {
        b = b + 1
        basic.showNumber(b)
    }
    
}
