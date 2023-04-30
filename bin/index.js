#! /usr/bin/env node
console.log("Hello World!");
yargs = require("yargs");
const usage = "\nUsage: tran <lang_name> sentence to be translated";const options = yargs  
      .usage(usage)  
      .option("l", {alias:"languages", describe: "List all supported languages.", type: "boolean", demandOption: false })                                                                                                
      .help(true)  
      .argv;