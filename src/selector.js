function selector(obj, path){
let currentObj = obj;

path.forEach((key) => {
if(currentObj[key]) {
    currentObj = currentObj[key];
}
});
return currentObj;
}

const obj = {
    field : {
        test: 'Oleksii'
    }
}

console.log(selector (obj['field','test']));