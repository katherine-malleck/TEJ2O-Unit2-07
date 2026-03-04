/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: katherine
 * Created on: Feb 2026
 * This program will be cookie clicker!!! I love cokieesssss!!!
*/

let cookie = 0

basic.clearScreen()
basic.showString("0")

input.onButtonPressed(Button.A, function () {
    cookie += 1
    basic.showNumber(cookie)
})

input.onButtonPressed(Button.B, function () {
    cookie = 0
    basic.showNumber(cookie)
})