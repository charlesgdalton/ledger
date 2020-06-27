"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiabilityType = exports.Liability = void 0;
class Liability {
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
        return `This liability is of type ${this.getType()} and has ${this.getBalance()} balance`;
    }
}
exports.Liability = Liability;
var LiabilityType;
(function (LiabilityType) {
    LiabilityType["DEBT"] = "DEBT";
})(LiabilityType = exports.LiabilityType || (exports.LiabilityType = {}));
let liability1 = new Liability();
liability1.setBalance(100);
liability1.setType(LiabilityType.DEBT);
console.log(liability1.description());
//# sourceMappingURL=Liability.js.map