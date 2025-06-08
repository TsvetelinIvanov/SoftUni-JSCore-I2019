function extendObject() {
    let objectToExtend = {
        extend: function(template) {            
            for (let parentProperty of Object.keys(template)) {
                if (typeof template[parentProperty] === 'function') {
                    //Object.getPrototypeOf(objectToExtend)[parentProperty] = template[parentProperty];
                    Object.getPrototypeOf(this)[parentProperty] = template[parentProperty];                    
                }
                else {
                    //objectToExtend[parentProperty] = template[parentProperty];
                    this[parentProperty] = template[parentProperty];
                }
            }
        }
    };
    
    return objectToExtend;
}
