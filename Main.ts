// Create a Id card system

import inquirer from "inquirer";
import chalk from "chalk";

let Card = await inquirer.prompt({

 name: "Cnic",
 type: "list",
 message: "You want to create Cnic Card?",
 choices:["Yes","No"]
})

if(Card.Cnic === "Yes"){

    let age = await inquirer.prompt({

    name: "Id",
    type: "input",
    message: "Enter You age"
    })

    if (age.Id < 18) {
        console.log(chalk.red("You cannot create an ID card right now because you are under 18 years old."));
        
    }

    else{
        console.log(chalk.green("You can create an ID card"));
        
    }
}

else if(Card.Cnic === "No"){

console.log(chalk.blueBright("Ok Np"));


}
