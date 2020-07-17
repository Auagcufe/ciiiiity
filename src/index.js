var chinaSheet  = require("china-division");
// console.log(chinaSheet.cities)

const sheet = function(codeMax,codeMin){
    const rr = chinaSheet.cities.filter(function(it){
        var kk =  it.provinceCode === codeMax || it.provinceCode === codeMin;
        return kk;
    })
    return rr;
}

console.log(sheet("33","34"));


// console.log(chinaSheet);
