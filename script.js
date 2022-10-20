var nineTA = document.getElementById('nineTA');
var tenTA = document.getElementById('tenTA');
var elevenTA = document.getElementById('elevenTA');
var twelveTA = document.getElementById('twelveTA');
var oneTA = document.getElementById('oneTA');
var twoTA = document.getElementById('twoTA');
var threeTA = document.getElementById('threeTA');
var fourTA = document.getElementById('fourTA');
var fiveTA = document.getElementById('fiveTA');

var Btn9 = document.getElementById('9Btn');
var Btn10 = document.getElementById('10Btn');
var Btn11 = document.getElementById('11Btn');
var Btn12 = document.getElementById('12Btn');
var Btn1 = document.getElementById('1Btn');
var Btn2 = document.getElementById('2Btn');
var Btn3 = document.getElementById('3Btn');
var Btn4 = document.getElementById('4Btn');
var Btn5 = document.getElementById('5Btn');

var toDos = [];

(function() {
    var currentDay = document.getElementById('currentDay');

    currentDay.textContent = dayjs().format('ddd, DD MMM. YYYY');

    if (dayjs().$H === 9) {
        nineTA.classList.remove('future');
        nineTA.classList.add('present');
    } else if (dayjs().$H > 9) {
        nineTA.classList.remove('present');
        nineTA.classList.add('past');
    } else {
        nineTA.classList.remove('present');
        nineTA.classList.remove('past');
        nineTA.classList.add('future');
    }

    if (dayjs().$H === 10) {
        tenTA.classList.remove('future');
        tenTA.classList.add('present');
    } else if (dayjs().$H > 10) {
        tenTA.classList.remove('present');
        tenTA.classList.add('past');
    } else {
        tenTA.classList.remove('present');
        tenTA.classList.remove('past');
        tenTA.classList.add('future');
    }

    if (dayjs().$H === 11) {
        elevenTA.classList.remove('future');
        elevenTA.classList.add('present');
    } else if (dayjs().$H < 11) {
        elevenTA.classList.remove('present');
        elevenTA.classList.add('future');
    } else {
        fiveTA.classList.remove('present');
        elevenTA.classList.remove('future');
        elevenTA.classList.add('past');
    }

    if (dayjs().$H === 12) {
        twelveTA.classList.remove('future');
        twelveTA.classList.add('present');
    } else if (dayjs().$H < 12) {
        twelveTA.classList.remove('present');
        twelveTA.classList.add('future');
    } else {
        twelveTA.classList.remove('present');
        twelveTA.classList.remove('future');
        twelveTA.classList.add('past');
    }

    if (dayjs().$H === 13) {
        oneTA.classList.remove('future');
        oneTA.classList.add('present');
    } else if (dayjs().$H < 13) {
        oneTA.classList.remove('present');
        oneTA.classList.add('future');
    } else {
        oneTA.classList.remove('future');
        oneTA.classList.add('past');
    }

    if (dayjs().$H === 14) {
        twoTA.classList.remove('future');
        twoTA.classList.add('present');
    } else if (dayjs().$H < 14) {
        twoTA.classList.remove('present');
        twoTA.classList.add('future');
    } else {
        twoTA.classList.remove('present');
        twoTA.classList.remove('future');
        twoTA.classList.add('past');
    }

    if (dayjs().$H === 15) {
        threeTA.classList.remove('future');
        threeTA.classList.add('present');
    } else if (dayjs().$H < 15) {
        threeTA.classList.remove('present');
        threeTA.classList.add('future');
    } else {
        threeTA.classList.remove('present');
        threeTA.classList.remove('future');
        threeTA.classList.add('past');
    }

    if (dayjs().$H === 16) {
        fourTA.classList.remove('future');
        fourTA.classList.add('present');
    } else if (dayjs().$H < 16) {
        fourTA.classList.remove('present');
        fourTA.classList.add('future');
    } else {
        fourTA.classList.remove('present');
        fourTA.classList.remove('future');
        fourTA.classList.add('past');
    }

    if (dayjs().$H === 17) {
        fiveTA.classList.remove('future');
        fiveTA.classList.add('present');
    } else if (dayjs().$H < 17) {
        fiveTA.classList.remove('present');
        fiveTA.classList.add('future');
    } else {
        fiveTA.classList.remove('present');
        fiveTA.classList.remove('future');
        fiveTA.classList.add('past');
    }

}());

function setStorage() {
console.log(toDos);
    localStorage.setItem('toDo', JSON.stringify(toDos));

}

var gottenLocalStorage;

function getStorage() {
    console.log(localStorage);
    gottenLocalStorage = JSON.parse(localStorage.getItem('toDo'));
    console.log(gottenLocalStorage);

    if (toDos) {
        toDos.push(gottenLocalStorage[0]);
        toDos.push(gottenLocalStorage[1]);
        toDos.push(gottenLocalStorage[2]);
        toDos.push(gottenLocalStorage[3]);
        toDos.push(gottenLocalStorage[4]);
        toDos.push(gottenLocalStorage[5]);
        toDos.push(gottenLocalStorage[6]);
        toDos.push(gottenLocalStorage[7]);
        toDos.push(gottenLocalStorage[8]);
    }

    if (gottenLocalStorage[0]) {
        nineTA.innerHTML = gottenLocalStorage[0];
    }

    if (gottenLocalStorage[1]) {
        tenTA.innerHTML = gottenLocalStorage[1];
    }

    if (gottenLocalStorage[2]) {
        elevenTA.innerHTML = gottenLocalStorage[2];
    }

    if (gottenLocalStorage[3]) {
        twelveTA.innerHTML = gottenLocalStorage[3];
    }

    if (gottenLocalStorage[4]) {
        oneTA.innerHTML = gottenLocalStorage[4];
    }

    if (gottenLocalStorage[5]) {
        twoTA.innerHTML = gottenLocalStorage[5];
    }

    if (gottenLocalStorage[6]) {
        threeTA.innerHTML = gottenLocalStorage[6];
    }

    if (gottenLocalStorage[7]) {
        fourTA.innerHTML = gottenLocalStorage[7];
    }

    if (gottenLocalStorage[8]) {
        fiveTA.innerHTML = gottenLocalStorage[8];
    }
}


if(localStorage.length>0){
    getStorage();
}

Btn9.addEventListener('click', function() {
    var userInput9 = nineTA.value.trim();

    toDos[0] = userInput9;

    setStorage();
});

Btn10.addEventListener('click', function() {
    var userInput10 = tenTA.value.trim();

    toDos[1] = userInput10;

    setStorage();

});

Btn11.addEventListener('click', function() {
    var userInput11 = elevenTA.value.trim();

    toDos[2] = userInput11;

    setStorage();

});

Btn12.addEventListener('click', function() {
    var userInput12 = twelveTA.value.trim();

    toDos[3] = userInput12;

    setStorage();

});

Btn1.addEventListener('click', function() {
    var userInput1 = oneTA.value.trim();

    toDos[4] = userInput1;

    setStorage();

});

Btn2.addEventListener('click', function() {
    var userInput2 = twoTA.value.trim();

    toDos[5] = userInput2;

    setStorage();

});

Btn3.addEventListener('click', function() {
    var userInput3 = threeTA.value.trim();

    toDos[6] = userInput3;

    setStorage();

});

Btn4.addEventListener('click', function() {
    var userInput4 = fourTA.value.trim();

    toDos[7] = userInput4;

    setStorage();

});

Btn5.addEventListener('click', function() {
    var userInput5 = fiveTA.value.trim();

    toDos[8] = userInput5;

    setStorage();

});

getStorage();


