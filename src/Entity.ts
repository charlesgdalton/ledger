import { Asset, AssetType } from "./Asset";
import { Liability, LiabilityType } from "./Liability";
import { Equity, EquityType } from "./Equity";

class Entity {
    assets: Asset[];
    liabilities: Liability[];
    ownersEquity: Equity[];

    constructor() {
        this.assets = [];
        this.liabilities = [];
        this.ownersEquity = [];
    }

    investCapital(capital: Asset) {
        let newEquity = new Equity();
        newEquity.setType(EquityType.PAID_IN);
        newEquity.setBalance(capital.getBalance());

        this.assets.push(capital);
        this.ownersEquity.push(newEquity);
    }

    receiveLoan(capital: Asset) {
        let debt = new Liability();
        debt.setType(LiabilityType.DEBT);
        debt.setBalance(capital.getBalance());

        this.assets.push(capital);
        this.liabilities.push(debt);
    }

    giveLoan(capital: Asset) {
        let loan = new Asset();
        loan.setType(AssetType.CAPITAL_ASSET);
        loan.setBalance(capital.getBalance());

        this.assets.pop();
        this.assets.push(loan);
    }
}

let alice = new Entity();

let aliceBootstrapCash = new Asset();
aliceBootstrapCash.setType(AssetType.CURRENCY);
aliceBootstrapCash.setBalance(100);

alice.investCapital(aliceBootstrapCash);

let bob = new Entity();

let bobBootstrapCashHalf = new Asset();
bobBootstrapCashHalf.setType(AssetType.CURRENCY);
bobBootstrapCashHalf.setBalance(200);

bob.investCapital(bobBootstrapCashHalf);
bob.investCapital(bobBootstrapCashHalf);

alice.receiveLoan(bobBootstrapCashHalf);
bob.giveLoan(bobBootstrapCashHalf);

console.log('ALICE: ', alice);
console.log('BOB: ', bob);
