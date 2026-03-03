/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: katherine
 * Created on: Feb 2026
 * This program will be cookie clicker!!! I love cokieesssss!!!
*/

let cookie: number

basic.clearScreen()
basic.showString("0")

input.onButtonPressed(Button.A, function()
    {basic.clearScreen()
    cookie = cookie+1

    basic.showString(cookie)
    })