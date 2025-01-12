console.clear();

const url = "https://swapi.py4e.com/api/people";

//Function created to fetch data, async because we don't know how long the call takes
 async function fetchData() {
    //calls api, and waits for the fetch to work, converts the information to varial response
    const response  = await fetch("url");
    //turns response into a json, data stores that information
    const data = await response.json();
    return data;
 }
console.log(data)

fetchData();
