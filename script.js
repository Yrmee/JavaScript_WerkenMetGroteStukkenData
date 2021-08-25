console.log("Werken met grote arrays en objecten");


// Functie om te sorteren op Alfabetische volgorde van land te komen.
// Helaas niet gelukt om het toe te kunnen passen in de opdracht hieronder.
const getLandenLijst = function () {
    const data = randomPersonData;

    return data.map(person => {
        return person.region;
    }).sort(function(a, b) {
        return a.localeCompare(b);
    });
};

console.log(getLandenLijst());


// Opdracht maak een lijst met landen, gesorteerd op naam van het land.
const setLandenLijst = function () {

    const landenLijst = document.getElementById("landenLijst")
    const data = randomPersonData;
    
    return data.forEach(person => {
        const newListItem = document.createElement("li");
        const newListItemContent = document.createTextNode(
            `${person.region}`
        );

        newListItem.appendChild(newListItemContent);
        landenLijst.append(newListItem);
    });
};

document.getElementById("landenLijst_btn").addEventListener("click", setLandenLijst);

// Opdracht Steenbok Vrouwen.

const filterSteenbokVrouwen = () => randomPersonData.filter(
    (person) => person.gender === "female" && person.age === 30
)


// Opdracht Steenbok vrouwen filteren

const steenbokVrouwen = function () {

    const steenbokVrouwenLijst = document.getElementById("steenbokVrouwenLijst");
    const data = filterSteenbokVrouwen();

    return data.forEach(person => {
        
        const newListItem = document.createElement("li");
        const newListLink = document.createElement("a");
        const newListImg = document.createElement("img");

        newListLink.target = '_blank';
        newListLink.href = person.photo;
        newListImg.src = person.photo;

        newListItem.appendChild(newListLink).appendChild(newListImg);
        steenbokVrouwenLijst.appendChild(newListItem);
    });
};


document.getElementById("steenbokVrouwen_btn").addEventListener("click", steenbokVrouwen());