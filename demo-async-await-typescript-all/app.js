/**
 * (c) 2016 Kip Streithorst
 * License: MIT
 */
function getClosestStore(zipCode) {
    return __awaiter(this, void 0, void 0, function () {
        var storeIds;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getNearbyStores(zipCode)];
                case 1:
                    storeIds = _a.sent();
                    if (storeIds.length) {
                        return [2 /*return*/, getStoreDetails(storeIds[0])];
                    }
                    return [2 /*return*/, null];
            }
        });
    });
}
$(function () {
    $("#search").on("click", function () {
        $("#results").hide();
        $("#noResults").hide();
        var zip = $("#zipCode").val();
        getClosestStore(zip).then(function (details) {
            showDetails(details);
        });
        //.catch(function (e) {
        //  alert('error occurred - used .catch');
        //});
    });
    /*$("#search").on("click", async function () {
      //try {
      $("#results").hide();
      $("#noResults").hide();
      var zip = $("#zipCode").val();
      var details = await getClosestStore(zip);
      showDetails(details);
      //} catch (e) {
      //  alert('error occurred - used try/catch');
      //}
    });*/
});
function showDetails(details) {
    if (details) {
        $("#address").text(details.address);
        $("#hours").text(details.hours);
        $("#results").show();
    }
    else {
        $("#noResults").show();
    }
}
//# sourceMappingURL=app.js.map