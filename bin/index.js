#! /usr/bin/env node
const utils = require('./utils.js')

yargs = require("yargs");
const usage = "\nUsage: mf <word> <-- to be kicked back";
const options = yargs  
      .usage(usage)  
      .option("k", {alias:"kickback", describe: "Kicks Back Word.", type: "boolean", demandOption: false })     
      .option("m", {alias:"matthew", describe: "run test function.", type: "boolean", demandOption: false })  
      .option("c", {alias:"curDir", describe: "gets current directory", type: "boolean", demandOption: false }) 
      .option("a", {alias:"addOne", describe: "adds one to number passed", type: "boolean", demandOption: false })                                                                                        
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
if(yargs.argv._[0] == null){  

      utils.showHelp();  
      return;  
}
