function modifyWorker(worker) {
    if (worker.handsShaking === true) {
        worker.bloodAlcoholLevel += 0.1 * worker.experience * worker.weight;
        worker.handsShaking = false;
    }
    
    return worker;
}

console.log(modifyWorker({ weight: 80, experience: 1, bloodAlcoholLevel: 0, handsShaking: true }))
console.log(modifyWorker({ weight: 120, experience: 20, bloodAlcoholLevel: 200, handsShaking: true }))
console.log(modifyWorker({ weight: 95, experience: 3, bloodAlcoholLevel: 0, handsShaking: false }))
