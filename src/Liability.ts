export class Liability {
    balance: number;
    type: LiabilityType;

    setBalance(newBalance: number) {
        this.balance = newBalance;
    }

    getBalance() {
        return this.balance;
    }

    setType(newType: LiabilityType) {
        this.type = newType;
    }

    getType() {
        return this.type;
    }

    description() {
        return `This liability is of type ${this.getType()} and has ${this.getBalance()} balance`;
    }
}

export enum LiabilityType {
    DEBT = "DEBT"
}

let liability1 = new Liability();

liability1.setBalance(100);
liability1.setType(LiabilityType.DEBT);

console.log(liability1.description());
