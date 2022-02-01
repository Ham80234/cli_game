import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";

let sleep = (ms = 2000) => new Promise(resolve => setTimeout(resolve, ms));

async function Welcome(){
    console.clear()
    const msg = `Welcome Gamer!`
    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data))
    })
}


async function howToPlay(){
    console.log(`
        Hello and welcome to the game!
        the goal is to get 20 points in total, guessing the correct answer willa ward you a certain amount fo points 
        there are four differnt difficulties of question the harder the difficulty the more points it gives you 
        you have 3 lives, after that you will loose the game 

        now do you understand
    `)

    const confirm = inquirer.prompt({
        name: "answer",
        type: "input",
        question: "do you understand (y/n)"
    })

    if ((await confirm).answer == 'y'){
        console.log('good')
    }else{
        chalkAnimation.glitch("goodbye loser ")
        await sleep(3000)
        process.exit(0)
    }
}


await Welcome()
await sleep(1000)
await howToPlay()