const person = {
  firstName: "dhivya",
  lastName: "bharathi",
};

const details = { age: 25, hobbies: ["reading", "travelling"] };

const newperson = Object.assign(person, details);

console.log(newperson);
