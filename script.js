function getRandomNumber(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let RandomNumber = Math.floor(Math.random() * 101);

            const error = false;

            if (!error){
                resolve({result:RandomNumber});
            }
            else{
                reject("Error: Something went wrong");
            }
        }, 500);
    });
}

async function callRandomNumber() {
    let result = await getRandomNumber();
    console.log(result.result);
    return result
}

callRandomNumber();

//Fetch Remote data using async/await

async function fetchCity(city) {

    const res = await fetch(`https://geocode.xyz/${city}?json=1`);
    const data = await res.json();
    console.log(`Place Name: ${city} Longiture: ${data.longt} Latitude: ${data.latt}`);

}

fetchCity('charlotte');
fetchCity('los angeles');
