import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { RetireeAccount } from "./class/RetireeAccount";

console.log("People Operations");
const peopleAccount: PeopleAccount = new PeopleAccount(1, "Jean", 1);
console.log(peopleAccount.getName());
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
companyAccount.withdraw(1000);
console.log(companyAccount.getBalance());
companyAccount.getLoan(1000);
console.log(companyAccount.getBalance());
companyAccount.withdraw(1000);
console.log(companyAccount.getBalance());

console.log("Retiree Operations");
const retireeAccount: RetireeAccount = new RetireeAccount("Sr. Al", 1);
console.log(retireeAccount.getName());
console.log(retireeAccount.getBalance());
retireeAccount.deposit(100);
console.log(retireeAccount.getBalance());
retireeAccount.withdraw(100);
console.log(retireeAccount.getBalance());
