"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetType = exports.Asset = void 0;
class Asset {
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
        return `This asset is of type ${this.getType()} and has ${this.getBalance()} balance`;
    }
}
exports.Asset = Asset;
var AssetType;
(function (AssetType) {
    AssetType["CURRENCY"] = "CURRENCY";
    AssetType["COMMODITY"] = "COMMODITY";
    AssetType["CAPITAL_ASSET"] = "CAPITAL_ASSET";
})(AssetType = exports.AssetType || (exports.AssetType = {}));
let asset1 = new Asset();
asset1.setBalance(100);
asset1.setType(AssetType.CURRENCY);
console.log(asset1.description());
//# sourceMappingURL=Asset.js.map