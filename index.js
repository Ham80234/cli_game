import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";


async function Welcome(){
    console.clear()
    const msg = `Welcome Gamer!`
    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data))
    })
}

await Welcome()