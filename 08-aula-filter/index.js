import { getPeople } from "./StarWarsService.js";

async function main() {
  const starWarsPeople = await getPeople(1);
  const starWarsPeopleFiltered = starWarsPeople
  .filter(person => {
    return (person.gender === "male" && person.height > 200);
  })
  .map(person => { 
    return {name: person.name, gender: person.gender, height:person.height}
  });

  console.log(starWarsPeopleFiltered)
}

main();
