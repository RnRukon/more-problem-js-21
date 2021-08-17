function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWoodQuantity = perChairWood * chairQuantity;
    const tableWoodQuantity = perTableWood * tableQuantity;
    const bedWoodQuantity = perBedWood * bedQuantity;
    const totalWoodQuantity = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWoodQuantity;
}


console.log(woodCalculator(10, 4, 3));