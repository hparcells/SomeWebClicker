var autoClickerCard = document.getElementById("autoClickerCard");
var autoClickerCardTitle = document.getElementById("autoClickerCardTitle");
var autoClickerCardPrice = document.getElementById("autoClickerCardPrice");
var autoClickerSpacer = document.getElementById("autoClickerSpacer");

var autoClickerLevel = 0;
var autoClickerInterval;
var autoClickerMax = false;

var autoClickerLevelData = [
    {level: 1, price: 2500, perSecond: 2},
    {level: 2, price: 3500, perSecond: 3},
    {level: 3, price: 4500, perSecond: 4},
    {level: 4, price: 5500, perSecond: 5},
    {level: 5, price: 6500, perSecond: 6},
    {level: 6, price: 7500, perSecond: 7}
];

function buyAutoClicker() {
    if(clicks >= autoClickerLevelData[autoClickerLevel].price) {
        clicks -= autoClickerLevelData[autoClickerLevel].price;
        clickCount.innerText = `Clicks: ${clicks}`;

        clearInterval(autoClickerInterval);
        var per = autoClickerLevelData[autoClickerLevel].perSecond / 10;
        autoClickerInterval = setInterval(function() {
            clicks += per;
            clicks = Number(clicks.toFixed(2));
            clickCount.innerText = `Clicks: ${clicks}`;

            checkCases();
            checkStats();
        }, 100);

        autoClickerLevel++;

        if(autoClickerLevel >= autoClickerLevelData.length) {
            autoClickerCard.style.display =  "none";
            autoClickerSpacer.style.display = "none";

            autoClickerMax = true;
        }else {
            var nextAutoClickerLevel = autoClickerLevel + 1;
            var nextAutoClickerPrice =  autoClickerLevelData[autoClickerLevel].price;

            autoClickerCardTitle.innerText = "Auto Clicker (Lvl. " + nextAutoClickerLevel + ")";
            autoClickerCardPrice.innerText = "Buy (" + nextAutoClickerPrice  + " Clicks)";
        }

        upgradesBought++;
        
        playSound("buy");
        console.log(`Bought Upgrade: Auto Clicker, Level: ${autoClickerLevel}.`);
    }else {
        var data = {
            message: "Not enough clicks!",
            timeout: 2000
        };
        snackbar.MaterialSnackbar.showSnackbar(data);
    }
}

function loadAutoClicker() {
    if(autoClickerLevel === 0) {
        return;
    }

    var index = autoClickerLevel - 1;
    var per = autoClickerLevelData[index].perSecond / 10;
    autoClickerInterval = setInterval(function() {
        clicks += per;
        clicks = Number(clicks.toFixed(2));
        clickCount.innerText = `Clicks: ${clicks}`;

        checkCases();
        checkStats();
    }, 100);

    if(autoClickerLevel >= autoClickerLevelData.length) {
        autoClickerCard.style.display =  "none";
        autoClickerSpacer.style.display = "none";

        autoClickerMax = true;
    }else {
        var nextAutoClickerLevel = autoClickerLevel + 1;
        var nextAutoClickerPrice =  autoClickerLevelData[autoClickerLevel].price;

        autoClickerCardTitle.innerText = "Auto Clicker (Lvl. " + nextAutoClickerLevel + ")";
        autoClickerCardPrice.innerText = "Buy (" + nextAutoClickerPrice  + " Clicks)";
    }
}
