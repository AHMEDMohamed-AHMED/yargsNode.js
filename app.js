const fs = require('fs');
const student = require('./data')
const yargs = require("yargs");


/*id
Gpa
comment*/
yargs.command({
    command: "add",
    builder: {
        id: {
            describe: "This is the id ",
            demandOption: true,
            type: "string",
        },

        name: {
            describe: "This is the name ",
            demandOption: true,
            type: "string",
        },

        Gpa: {
            describe: "This is the Gpa ",
            demandOption: true,
            type: "string",
        },
    },
    handler: (argv) => {
        student.add(argv.id, argv.name, argv.Gpa)

    },


});

/*yargs.command({
  command: "name",
    builder: {
      name: {
        describe: "This is the name ",
        demandOption: true,
        type: "string",
      },
  },
  handler: (argv) => {
      student.add(argv.id,argv.name,argv.Gpa)
  },
});

yargs.command({
  command: "Gpa",
    builder: {
      id: {
        describe: "This is the Gpa ",
        demandOption: true,
        type: "string",
      },
  },
  handler: (argv) => {
      student.add(argv.id,argv.name,argv.Gpa)
  },
});*/


yargs.parse()