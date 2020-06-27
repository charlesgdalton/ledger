"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquityType = exports.Equity = void 0;
class Equity {
    setBalance(newBalance) {
        this.balance = newBalance;
    }
    getBalance() {
        return this.balance;
    }
    setType(newType) {
        this.type = newType;
    }
    getType() {
        return this.type;
    }
    description() {
        return `This equity is of type ${this.getType()} and has ${this.getBalance()} balance`;
    }
}
exports.Equity = Equity;
var EquityType;
(function (EquityType) {
    EquityType["PAID_IN"] = "PAID_IN_CAPITAL";
    EquityType["RETAINED_EARNINGS"] = "RETAINED_EARNINGS";
})(EquityType = exports.EquityType || (exports.EquityType = {}));
let equity1 = new Equity();
equity1.setBalance(100);
equity1.setType(EquityType.PAID_IN);
console.log(equity1.description());
//# sourceMappingURL=Equity.js.map