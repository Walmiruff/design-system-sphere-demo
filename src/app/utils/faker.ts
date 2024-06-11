const faker = require('faker');
faker.locale = 'pt_BR';

const myTypes = ['cpfFake'];

const database = (mockJsonAndFaker: Array<Array<string>>, numberSeed = 100) => {
  const array = [];
  for (let i = 0; i < numberSeed; i += 1) {
    let row: any = {};
    for (let indexRow = 0; indexRow < mockJsonAndFaker.length; indexRow += 1) {
      if (myTypes.includes(mockJsonAndFaker[indexRow][1])) {
        row[mockJsonAndFaker[indexRow][0]] = cpfFake();
      } else {
        if (mockJsonAndFaker[indexRow].length > 3) {
          let args;
          if (mockJsonAndFaker[indexRow][3].includes('{')) {
            args = JSON.parse(mockJsonAndFaker[indexRow][3]);
          } else {
            args = mockJsonAndFaker[indexRow][3];
          }

          row[mockJsonAndFaker[indexRow][0]] = faker[mockJsonAndFaker[indexRow][1]][mockJsonAndFaker[indexRow][2]](args);
        } else {
          row[mockJsonAndFaker[indexRow][0]] = faker[mockJsonAndFaker[indexRow][1]][mockJsonAndFaker[indexRow][2]]();
        }
      }
    }

    array.push(row);
  }

  return array;
};

const cpfFake = () => {
  const cpf = [];
  for (let i = 0; i < 11; i += 1) {
    cpf.push(faker.datatype.number({ min: 0, max: 9 }));
  }

  return cpf.join('').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

export { database };
