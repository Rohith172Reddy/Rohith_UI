var environment = "stage";
var sendingAmount = 100;

if (environment === "dev") {
  sendingAmount += sendingAmount * 0.1;
} 
else if (environment === "test") {
  sendingAmount += sendingAmount * 0.2;
} 
else if (environment === "stage") {
  sendingAmount += sendingAmount * 0.3;
} 
else if (environment === "prod") {
  sendingAmount += sendingAmount * 0.05;
}

console.log("Sending Amount:", sendingAmount);

