import { INSUFICIENT_BALANCE, INVALID_ACCOUNT } from "../utils/ErrorMessages";

export abstract class DioAccount {
  private readonly accountNumber: number;
  private readonly name: string;
  private status: boolean = true;
  private balance: number = 0;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName(): string {
    return this.name;
  }

  deposit(amount: number): void {
    if (!this.validateStatus()) throw new Error(INVALID_ACCOUNT);

    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (!this.validateStatus()) throw new Error(INVALID_ACCOUNT);
    if (this.balance < amount) throw new Error(INSUFICIENT_BALANCE);

    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }

  private validateStatus(): boolean {
    if (this.status) {
      return this.status;
    }

    throw new Error(INVALID_ACCOUNT);
  }
}
