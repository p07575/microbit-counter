a=0
b=0
while 1:
    if input.button_is_pressed(Button.AB):
        basic.show_number(a+b)
    elif input.button_is_pressed(Button.A):
        a=a+1
        basic.show_number(a)
    elif input.button_is_pressed(Button.B):
        b=b+1
        basic.show_number(b)