import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {name:"URL",message:"Enter the URL:"}
  ])
  .then((answers) => {
    var qr_png = qr.image(answers.URL);
    qr_png.pipe(fs.createWriteStream('url.png'));

    fs.writeFile('url.txt', answers.URL, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
       
 

