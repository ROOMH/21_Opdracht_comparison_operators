const age = 18;
const isFemale = false; 
const driverStatus = "bob";
const ageDiscount = 18;
const name = "sarah";
const totalAmount = 101;

if (ageDiscount >=18 && ageDiscount <=25) {
    console.log("Je krijgt 50% korting");
}

if (age >= 18) {
    console.log("JA. Je mag naar binnen");
} else {
    console.log("NEE. Je mag niet naar binnen")
}

if (isFemale) {
    console.log("Je bent vrouw");
} else {
    console.log("Je bent man. Je mag niet naar binnen");
}

if (driverStatus === "bob") {
    console.log("Je bent bob");
} else {
    console.log("Dronken");
}

if ("Bram || Sarah") {
    console.log("Gratis biertje");
}

if (totalAmount >25 && totalAmount <=50) {
    console.log("Gratis (vega)bitterballen");
} else if (totalAmount >50 && totalAmount<=100) {
    console.log("Gratis portie nachos");
} else if (totalAmount >100) {
    console.log("Gratis champagne");
}
