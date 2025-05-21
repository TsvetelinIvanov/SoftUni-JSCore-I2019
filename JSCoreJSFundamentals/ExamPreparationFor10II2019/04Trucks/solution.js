function solve() {
    let buttons = document.getElementsByTagName('button');
    let addNewTruckButton = buttons[0];
    let addNewTiresButton = buttons[1];
    let goToWorkButton = buttons[2];
    let endOfTheShiftButton = buttons[3];
    let fieldsets = document.getElementsByTagName('fieldset');
    let newTruckFieldset = fieldsets[0];
    let newTiresFieldset = fieldsets[1];
    let workFieldSet = fieldsets[2];
    let backupTiresSetsFieldset = fieldsets[3];
    let trucksFieldset = fieldsets[4];
    let outputTextarea = document.querySelector('textarea');

    //let truckObject = { 'backupTireSets': [] };
    let truckObject = { backupTireSets: [] };

    addNewTruckButton.addEventListener('click', addNewTruck);
    addNewTiresButton.addEventListener('click', addNewTires);
    goToWorkButton.addEventListener('click', goToWork);
    endOfTheShiftButton.addEventListener('click', showEndOfShiftInfo);

    function addNewTruck() {
        let plateNumber = document.getElementById('newTruckPlateNumber').value; 
        let tires = document.getElementById('newTruckTiresCondition').value.split(' ').map(Number);
        
        //if(!truckObject[plateNumber]) {
        if(!truckObject.hasOwnProperty(plateNumber)) {
            truckObject[plateNumber] = {tires, distance: 0};
        }

        let truck = createElement('div', plateNumber, 'truck');
        let truckDiv = trucksFieldset.lastElementChild;
        truckDiv.appendChild(truck);
    }

    function addNewTires() {
        let tires = document.getElementById('newTiresCondition').value.split(' ').map(Number);        
        truckObject.backupTireSets.push(tires);

        let tireSet = createElement('div', tires.join(' '), 'tireSet');
        tireDiv = backupTiresSetsFieldset.lastElementChild;
        tireDiv.appendChild(tireSet);
    }

    function goToWork() {
        let plateNumber = document.getElementById('workPlateNumber').value;
        let distance = Number(document.getElementById('distance').value);
        if(truckObject.hasOwnProperty(plateNumber)) {
            let results = areTiresGoodEnough(truckObject[plateNumber].tires, distance);
            if (results.finalResult){
                truckObject[plateNumber].distance += distance;
                truckObject[plateNumber].tires = results.testedTires;
            }
            else if (truckObject.backupTireSets.length > 0) {
                let backupSet = truckObject.backupTireSets[0];
                let results = areTiresGoodEnough(backupSet, distance);
                if (results.finalResult) {
                    truckObject[plateNumber].distance += distance;
                    truckObject[plateNumber].tires = results.testedTires;
                    truckObject.backupTireSets.shift();
                    let usedTires = document.querySelector('div.tireSet');
                    usedTires.remove();
                }
            }
        }
    }

    function areTiresGoodEnough(tires, disnance) {
        let parsedDistance = disnance /1000;
        let result = {testedTires: [], finalResult: false};
        tires.forEach(tire => {
            result.testedTires.push(tire - parsedDistance);
        });

        if (result.testedTires.every(t => t >= 0)) {
            result.finalResult = true;
        }
        
        return result;
    }
   
    function showEndOfShiftInfo() {
        Object.keys(truckObject).filter(plateNumber => plateNumber !== 'backupTireSets').forEach(plate => {
            outputTextarea.value += `Truck ${plate} has traveled ${truckObject[plate].distance}.\n`;
        });

        outputTextarea.value += `You have ${truckObject.backupTireSets.length} sets of tires left.\n`;
    }

    function createElement(type, text, className) {
        let element = document.createElement(type);
        element.textContent = text;
        element.classList.add(className);
        
        return element;
    }
}
