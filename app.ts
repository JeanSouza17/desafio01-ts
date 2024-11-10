import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

console.log("People Operations");
const peopleAccount: PeopleAccount = new PeopleAccount(1, "Jean", 1);
console.log(peopleAccount.getBalance());
peopleAccount.deposit(100);
console.log(peopleAccount.getBalance());
peopleAccount.withdraw(100);
console.log(peopleAccount.getBalance());

console.log("Company Operations");
const companyAccount: CompanyAccount = new CompanyAccount("Enterprise", 1);
console.log(companyAccount.getBalance());
companyAccount.deposit(1000);
console.log(companyAccount.getBalance());
companyAccount.withdraw(999);
console.log(companyAccount.getBalance());
