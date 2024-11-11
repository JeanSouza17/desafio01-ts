import { DioAccount } from "./DioAccount";

export class RetireeAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit(amount: number): void {
    super.deposit(amount + 10);
  }
}
