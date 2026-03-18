 const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based task')
  .version('0.8.0');

program.command('addtodo')
  .description('Adds todo list in this file')
  .argument('<todo>', 'todo text')
  .action((todo) => {
    fs.appendFile('todo.txt', todo + '\n', (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('✅ Todo added successfully');
      }
    });
  });

program.parse();