function createOrModifyObject(inputCommands) {
    let objectProcessor = (function processObject() {
        let processedObjects = {};
        function create(name, inherit, parentName) {
            if (inherit === 'inherit') {
                processedObjects[name] = Object.create(processedObjects[parentName]);
            } else {
                processedObjects[name] = {};
            }
        }

        function set(name, key, value) {
            processedObjects[name][key] = value;
        }

        function print(name) {
            let printedObject = processedObjects[name];
            //let printedObjectKeys = Object.keys(printedObject);
            let printedObjectProperties = [];
            for (let printedObjectKey in printedObject) {
                printedObjectProperties.push(printedObjectKey + ':' + printedObject[printedObjectKey]);
            }
            // for (let printedObjectKey of printedObjectKeys) {
            //     printedObjectProperties.push(printedObjectKey + ':' + printedObject[printedObjectKey]);
            // }

            // let printedObjectPrototype = Object.getPrototypeOf(printedObject);
            // while(printedObjectPrototype !== null && printedObjectPrototype !== undefined){
            // //while (printedObjectPrototype !== null) {
            //     for (let prototypeKey of Object.keys(printedObjectPrototype)) {
            //         printedObjectProperties.push(prototypeKey + ':' + printedObject[prototypeKey]);
            //     }

            //     printedObjectPrototype = Object.getPrototypeOf(printedObjectPrototype);
            // }

            console.log(printedObjectProperties.join(', '));
        }

        return { create, set, print };
    })();
    for (let inputCommand of inputCommands) {
        let [command, ...parameters] = inputCommand.split(' ');
        objectProcessor[command](...parameters);
    }
}

createOrModifyObject(['create c1', 'create c2 inherit c1', 'set c1 color red', 'set c2 model new', 'print c1', 'print c2'])