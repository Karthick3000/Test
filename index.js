const { jsPDF } = require("jspdf");

const fs = require('fs')

var employees = [
    { "firstName": " Arun ", "age": 19, "gender": " male", "blood": "AB-" },
    { "firstName": " Vijay ", "age": 21, "gender": " male", "blood": "O+" },
    { "firstName": " Suriya ", "age": 18, "gender": " male", "blood": "B+" }
];

const doc = new jsPDF();

employees.forEach((employee, i) => {

    doc.text(20, 10 + (i * 10),
        "\n FirstName: " + employee.firstName +
        " Age: " + employee.age +
        " Gender: " + employee.gender +
        " Blood Group: " + employee.blood
    )

});

doc.save("example.pdf");