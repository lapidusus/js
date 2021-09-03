// фильтрация строки

const string = "Привет! Как дела?";

const getVowels = stringToFilter => {
    let extractedVowels ="";

    for (let i = 0; i < stringToFilter.length; i++) {
        const currentLetter = stringToFilter[i];

        if (currentLetter == "а" || currentLetter == "и" || currentLetter == "е") {
            extractedVowels = extractedVowels + currentLetter
        }
    }

    return extractedVowels;
}

console.log(getVowels(string));

// выборка объекта

const workers = [
    {"name":"Влад","salary":500},
    {"name":"Стас","salary":1300},
    {"name":"Эдик","salary":1500},
];

const getWorthyWorkers = (workersArr) => {
    const worthyWorkers = [];

    for (let i = 0; i < workersArr.length; i++) {
        const currentWorker =  workersArr[i];

        if (currentWorker.salary > 1000) {
            worthyWorkers.push(currentWorker.name);
        }
    }

    return worthyWorkers;
};

console.log(getWorthyWorkers(workers));

// анализ строки

const path = "/users/download/index.html"

const isHtml = path => {
    const requiredExt = ".html";
    const pathExt = path.slice(-5);

    if (pathExt == requiredExt) {
        return true
    }   else {
        return false
    }
}

console.log(isHtml(path));

// фильтрация массива

const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = num => {
    return num % 2 == 0;
}

const filterArray = (arrayToFilter, filterFn)  => {
    const filteredArray = [];

    arrayToFilter.forEach(num => {
        if (filterFn(num)) {
            filteredArray.push(num);
        }
    })

    return filteredArray;
}

console.log(filterArray(mixedArray, isEven));