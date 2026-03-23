


function getRandom(start, end) {
    return Math.round((Math.random() * (end - start))) + start;
}

function bytesToGB(value) {
    return Math.round(value / 1024 / 1024 / 1024)
}

const util= { getRandom, bytesToGB };

module.exports=util;