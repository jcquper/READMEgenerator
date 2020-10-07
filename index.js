import {writeFile} from "fs";
import pkg from 'inquirer';
import generateMarkdown from "./untils/generateMarkdown.js";

const {prompt} = pkg;

//array of questions for user to create file
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "Title"
    },
    {
        type: "input",
        message: "Describe your project",
        name: "Description"
    };
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "Installation"
    },
    {
        type:"input",
        message: "Provide instructions for use.",
        name: "Usage"
    },
    {
        type:"list",
        message: "Select License",
        name: "License",
        choices: [
            "MIT",
            "GVL-GPL 3.0",
            "APACHE 2.0",
            "BSDD 3",
            "NONE"
        ]
    },
    {
        type:"input",
        message: "Contributors?",
        name: "Contributors"
    },
    {
        type:"input",
        message:"How do you test your project?",
        name: "Test"
    },

    {
        type:"input",
        message: "Contact info for further questions",
        name: "Questions"
    },
    {
      type: "input",
      message: "Your Github username",
      name: "Username"  
    },
    {
        type:"input",
        message: "What is your email?"
        name: "email"
    }

];

// Function to write file 
function writeToFile(fileName, data) {
    writeFile(fileName, data, err => {
        if (err) {
            throw err;
        }
    });
}


//function to initialize program
function init() {
    prompt(questions).then(answers => {

        const response = generateMarkdown(answers);
        console.log(answers);

        writeToFile("README.md", reponse);

    })

}

//function to start program
init();
