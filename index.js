const faker = require('faker');
const fs = require('fs')

try {
    for (let i = 0; i < 1000; i++) {
        const randomName = faker.name.findName();
        fs.appendFileSync('names.txt', randomName + '\n')
     
    }
    console.log('el proceso ha terminado satisfactoriamente')
  } catch (error) {
    console.error('el proceso NO ha terminado satisfactoriamente');
  }
