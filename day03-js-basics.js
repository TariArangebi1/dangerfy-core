// array methods
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((n) => n * 2);
console.log(doubled);

const evens = numbers.filter((n) => n % 2 === 0);
console.log(evens);

const prices = [10, 25, 40, 5, 60];

const taxRate = prices.map((n) => n + n * 0.2);
console.log(taxRate);

const overThirty = prices.filter((n) => n > 30);
console.log(overThirty);

//objects
const contact ={
    name: "Ade",
    phone: "07123456789",
    isEmergency: true,
};

console.log(contact.name);
console.log(contact["phone"]);


const contact1 ={
    name: "Tari",
    phone: "123456789",
    isEmergency: false,
};

const contact2 ={
    name: "Medwin",
    phone: "54321789",
    isEmergency: true,
};

const contacts = [contact, contact1, contact2]

const EmergencyCheck = contacts.filter((n) => n.isEmergency === true);
console.log(EmergencyCheck)