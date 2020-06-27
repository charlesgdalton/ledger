"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Asset_1 = require("./Asset");
const Liability_1 = require("./Liability");
const Equity_1 = require("./Equity");
class Entity {
    constructor() {
        this.assets = [];
        this.liabilities = [];
        this.ownersEquity = [];
    }
    investCapital(capital) {
        let newEquity = new Equity_1.Equity();
        newEquity.setType(Equity_1.EquityType.PAID_IN);
        newEquity.setBalance(capital.getBalance());
        this.assets.push(capital);
        this.ownersEquity.push(newEquity);
    }
    receiveLoan(capital) {
        let debt = new Liability_1.Liability();
        debt.setType(Liability_1.LiabilityType.DEBT);
        debt.setBalance(capital.getBalance());
        this.assets.push(capital);
        this.liabilities.push(debt);
    }
    giveLoan(capital) {
        let loan = new Asset_1.Asset();
        loan.setType(Asset_1.AssetType.CAPITAL_ASSET);
        loan.setBalance(capital.getBalance());
        this.assets.pop();
        this.assets.push(loan);
    }
}
let alice = new Entity();
let aliceBootstrapCash = new Asset_1.Asset();
aliceBootstrapCash.setType(Asset_1.AssetType.CURRENCY);
aliceBootstrapCash.setBalance(100);
alice.investCapital(aliceBootstrapCash);
let bob = new Entity();
let bobBootstrapCashHalf = new Asset_1.Asset();
bobBootstrapCashHalf.setType(Asset_1.AssetType.CURRENCY);
bobBootstrapCashHalf.setBalance(200);
bob.investCapital(bobBootstrapCashHalf);
bob.investCapital(bobBootstrapCashHalf);
alice.receiveLoan(bobBootstrapCashHalf);
bob.giveLoan(bobBootstrapCashHalf);
console.log('ALICE: ', alice);
console.log('BOB: ', bob);
//# sourceMappingURL=Entity.js.map