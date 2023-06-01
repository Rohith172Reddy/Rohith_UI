const environment1 = "stage";
let amount = 100;

switch (environment1) {
  case "dev":
    amount += amount * 0.1;
    break;

  case "test":
    amount += amount * 0.2;
    break;

  case "stage":
    amount += amount * 0.3;
    break;

  case "prod":
    amount += amount * 0.05;
    break;

  default:
    break;
}
console.log("amount: ", amount);
