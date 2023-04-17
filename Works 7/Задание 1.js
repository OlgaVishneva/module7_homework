const animal = {
 color: "green",
 weight: 20,
}

const dog = Object.create(animal);
dog.ownName = "Dacky";
dog.ownHeight = 2;

for (let key in dog) {
    if (dog.hasOwnProperty(key)) {
        console.log(key);
    }   
}