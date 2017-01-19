/**
 * (c) 2016 Kip Streithorst
 * License: MIT
 */
function getNearbyStores(zipCode) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        if (zipCode == 12121) {
                            resolve([1, 2]);
                        }
                        else if (zipCode == 34343) {
                            resolve([3, 4]);
                        }
                        else if (zipCode == 56565) {
                            reject(new Error("Fake exception!!"));
                        }
                        else {
                            resolve([]);
                        }
                    }, 2 * 1000);
                })];
        });
    });
}
function getStoreDetails(storeId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        if (storeId === 1) {
                            resolve({
                                address: '100 Main St. Raleigh, NC',
                                hours: '8am - 8pm'
                            });
                        }
                        if (storeId === 3) {
                            resolve({
                                address: '424 Washington Ave. Washington, DC',
                                hours: '11am - 11pm'
                            });
                        }
                    }, 1 * 1000);
                })];
        });
    });
}
//# sourceMappingURL=services.js.map