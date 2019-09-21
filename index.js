var faker = require('faker');
var fs = require('fs');

// Person details
var fullName = faker.name.findName;
var jobTitle = faker.name.jobTitle; // var title = faker.name.title();
var prefix = faker.name.prefix;
var jobDescriptor = faker.name.jobDescriptor;
var jobType = faker.name.jobType;

// Phone number
var phone = faker.phone.phoneNumberFormat;

// Email
// TODO: use fullName to generate email

// Company
var companyName = faker.company.companyName
var companySuffix = faker.company.companySuffix;
var catchPhrase = faker.company.catchPhrase;
var bs = faker.company.bs;

// Address
var streetAddress = faker.address.streetAddress;
var streetSuffix = faker.address.streetSuffix;
var city = faker.address.city;
var state = faker.address.state;
var country = faker.address.country;
var zipCode = faker.address.zipCode;

// Commerce
var department = faker.commerce.department;
var color = faker.commerce.color;
var productName = faker.commerce.productName;
var price = faker.commerce.price;
var product = faker.commerce.product;

// variable names
var person = ["fullName", "jobTitle", "prefix", "jobDescriptor", "jobType"];
var phoneNumber = ["phoneNumber"];
var companyDetails = ["companyName", "catchPhrase", "bs"];
var addressDetails = ["streetAddress", "city", "state", "country", "zipCode"];
var commerceDetails = ["department", "color", "productName", "price", "product"];

function getJSON() {
    let dict = {}
    for (let i = 0; i < arguments.length - 1; i++) {
        let keyName = arguments[arguments.length - 1][i]
        dict[keyName] = arguments[i]();        
    };
    return dict;
};

let times = 5
data = []
for (let i = 0; i < times; i++) {
    let instance = getJSON(fullName, jobTitle, prefix, jobDescriptor, jobType, person)
    data.push(instance);
}

fs.writeFile("details.json", JSON.stringify(data), function(err) {
    if (err) {
        console.log(err);
    }
});