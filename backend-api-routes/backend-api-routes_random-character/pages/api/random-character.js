import Chance from 'chance';

export default function handler(request, response) {
  const chance = new Chance();
  const character = {
    firstName: chance.first();
    lastName: chance.last();
  }
  response.status(200).json(character);
}
