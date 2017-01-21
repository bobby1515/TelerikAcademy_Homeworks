function LexMin() {
        DocMinMax(document);
        DocMinMax(window);
        DocMinMax(navigator);
}

function DocMinMax(objectToParse) {
    let docMin = objectToParse;
    let docMax = objectToParse;

    for (let key in objectToParse) {
        if (key < docMin) {
            docMin = key;
        }

        if (key > docMax) {
            docMax = key;
        }
    }

    console.log('Min :', docMin);
    console.log('Max :', docMax);
}
LexMin()