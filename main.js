console.log("Level 2, here I come!");

// ≈≈≈≈≈≈≈≈≈≈≈≈≈ lvl_2-1_ ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈

let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ name

const newNameArrforEach = [];

edelMetallPreise.forEach((elt) => {
    newNameArrforEach.push(elt.name);
})

console.log(newNameArrforEach);

// =========

const newNameArrMap = edelMetallPreise.map((elt) => {
    return elt.name;
});

console.log(newNameArrMap);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ preiseGramEuro

const newPriceArrforEach = [];

edelMetallPreise.forEach((elt) => {
    newPriceArrforEach.push(elt.preiseGramEuro);
})
console.log(newPriceArrforEach);

// =========

const newPriceArrMap = edelMetallPreise.map((elt) => {
    return elt.preiseGramEuro;
})
console.log(newPriceArrMap);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ veraenderung

const newVeraenderungforEach = [];

edelMetallPreise.forEach((elt) => {
    newVeraenderungforEach.push(elt.veraenderung);
})
console.log(newVeraenderungforEach);

// =========

const newVeraenderungMap = edelMetallPreise.map((elt) => {
    return elt.veraenderung;
})
console.log(newVeraenderungMap);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ filter

const higherFifty = edelMetallPreise.filter((elt) => elt.preiseGramEuro > 50);

console.log(higherFifty);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ create table

let table = '<table><tr><td>Name</td><td>PreiseGramEuro</td><td>Veranderung</td></tr>'

edelMetallPreise.forEach((elt) => {
    table += `<tr><td>${elt.name}</td><td>${elt.preiseGramEuro}</td><td>${elt.veraenderung}</td></tr>`;
});

table += "</table>";

document.body.innerHTML = table;





