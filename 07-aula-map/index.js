import { getPeople } from "./StarWarsService.js";

async function main() {
  const starWarsPeople = await getPeople(2);

  //const starWarsPeopleNames = starWarsPeople.map((person) => { return person.name });
  const starWarsPeopleNames = starWarsPeople
    .map((person) => {
      /*const name = person.name;
      const height = person.height;*/
      const { name, height, gender } = person;//destruction 
      return { name, height, gender }
      //return { name: name, height: height}
  });
  console.log(starWarsPeopleNames);
}

main();
