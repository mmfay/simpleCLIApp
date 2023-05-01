#! /usr/bin/env node
const utils = require('./utils.js')

console.log("Hello World!");
yargs = require("yargs");
const usage = "\nUsage: mf <word> <-- to be kicked back";
const options = yargs  
      .usage(usage)  
      .option("k", {alias:"kickback", describe: "Kicks Back Word.", type: "boolean", demandOption: false })     
      .option("m", {alias:"matthew", describe: "run test function.", type: "boolean", demandOption: false })                                                                                         
      .help(true)  
      .argv;
if(yargs.argv.m == true || yargs.argv.matthew == true){  
      utils.showTest();  
      return;  
}
if(yargs.argv.kb == true || yargs.argv.kickback == true){  
      utils.showTest();  
      return;  
}
if(yargs.argv._[0] == null){  

      utils.showHelp();  
      return;  
}