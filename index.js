// Write your solution here!

const cats = ['Milo', 'Otis', 'Garfield'];


function destructivelyAppendCat() {
    cats.push("Ralph");
};

destructivelyAppendCat;

function destructivelyPrependCat() {
    cats.unshift("Bob");
};

destructivelyPrependCat;

function destructivelyRemoveLastCat() {
    cats.pop();
};

destructivelyRemoveLastCat;

function destructivelyRemoveFirstCat() {
    cats.shift();
};

destructivelyRemoveFirstCat;



const copyOfCats = [...cats];

function appendCat() {
    copyOfCats.push("Broom");
    return copyOfCats;
}

appendCat;

const anotherCopyOfCats = [...cats];

function prependCat() {
    anotherCopyOfCats.unshift("Arnold");
    return anotherCopyOfCats;
}

prependCat;

const triceCopyOfCats = [...cats];

function removeLastCat() {
    triceCopyOfCats.pop();
    return triceCopyOfCats;
}

removeLastCat;

const quadCopyOfCats = [...cats];

function removeFirstCat() {
    quadCopyOfCats.shift();
    return quadCopyOfCats;
}

removeFirstCat;