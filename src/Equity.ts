
export class Equity {
    balance: number;
    type: EquityType;

    setBalance(newBalance: number) {
        this.balance = newBalance;
    }

    getBalance() {
        return this.balance;
    }

    setType(newType: EquityType) {
        this.type = newType;
    }

    getType() {
        return this.type;
    }

    description() {
        return `This equity is of type ${this.getType()} and has ${this.getBalance()} balance`;
    }
}

export enum EquityType {
    PAID_IN = "PAID_IN_CAPITAL",
    RETAINED_EARNINGS = "RETAINED_EARNINGS"
}


let equity1 = new Equity();

equity1.setBalance(100);
equity1.setType(EquityType.PAID_IN);

console.log(equity1.description());
