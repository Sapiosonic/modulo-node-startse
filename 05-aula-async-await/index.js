import fetch from 'node-fetch';

/*function main(){
  const user = 'Sapiosonic';
  const apiUrl = 'https://api.github.com';

  fetch(`${apiUrl}/users/${user}`).then((response) => {
    return response.json();
  }).then((user) => {
    console.log(user.name);
  })
}*/

async function main() {
  const user = "Sapiosonic";
  const user2 = "ramoncasagrande";
  const apiUrl = "https://api.github.com";

  /*const response = await fetch(`${apiUrl}/users/${user}`);
  const response2 = await fetch(`${apiUrl}/users/${user2}`);*/
  const promise = await fetch(`${apiUrl}/users/${user}`);
  const promise2 = await fetch(`${apiUrl}/users/${user2}`);
  const promises = await Promise.all([promise, promise2]);
  
  /*const githubUser = await response.json();
  const githubUser2 = await response2.json();*/
  const githubUser = await promises[0].json();
  const githubUser2 = await promises[1].json();

  console.log(`Rada id: ${githubUser.id}`);
  console.log(`Ramon id: ${githubUser2.id}`);
}

main();