#! /usr/bin/env node
const utils = require('./utils.js')
const fs = require('fs')
const { exec } = require("child_process");


yargs = require("yargs");
const usage = "\nUsage: mf <word> <-- to be kicked back";
const options = yargs  
      .usage(usage)  
      .option("k", {alias:"kickback", describe: "Kicks Back Word.", type: "boolean", demandOption: false })     
      .option("m", {alias:"matthew", describe: "run test function.", type: "boolean", demandOption: false })  
      .option("c", {alias:"curDir", describe: "gets current directory", type: "boolean", demandOption: false }) 
      .option("a", {alias:"addOne", describe: "adds one to number passed", type: "boolean", demandOption: false }) 
      .option("s", {alias:"saveDirectory", describe: "Saves Current Directory to file as String", type: "boolean", demandOption: false })                                                                                        
      .help(true)  
      .argv;
if(yargs.argv.m == true || yargs.argv.matthew == true){  
      utils.showTest();  
      return;  
}
if(yargs.argv.k == true || yargs.argv.kickback == true){  
      utils.showWord(yargs.argv._);  
      return;  
}
if(yargs.argv.c == true || yargs.argv.curDir == true){  
      utils.curDir();  
      return;  
}
if(yargs.argv.a == true || yargs.argv.addOne == true){  
      utils.addOne(yargs.argv._);  
      return;  
}
// Saves directory of program to a file. 
// TODO save current directory of command line to file with name
if(yargs.argv.s == true || yargs.argv.saveDirectory == true){  

      exec("pwd", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            const test1 = stdout;
            fs.writeFile(__dirname + '/savedDirectories.json',test1, (err) => {
                  if (err) throw err;
                  else{
                        console.log("the file is updated with data")
                  }
            }) 
        });
}
if(yargs.argv._[0] == null){  

      utils.showHelp();  
      return;  
}
