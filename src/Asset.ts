export class Asset {
    balance: number;
    type: AssetType;

    setBalance(newBalance: number) {
        this.balance = newBalance;
    }

    getBalance() {
        return this.balance;
    }

    setType(newType: AssetType) {
        this.type = newType;
    }

    getType() {
        return this.type;
    }

    description() {
        return `This asset is of type ${this.getType()} and has ${this.getBalance()} balance`;
    }
}

export enum AssetType {
    CURRENCY = "CURRENCY",
    COMMODITY = "COMMODITY",
    CAPITAL_ASSET = "CAPITAL_ASSET"
}

let asset1 = new Asset();

asset1.setBalance(100);
asset1.setType(AssetType.CURRENCY);

console.log(asset1.description());
