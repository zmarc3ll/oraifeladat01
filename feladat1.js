console.log("1.feladat");
let t = [];

for (let index = 0; index < 10; index++) {
    t.push(Math.random()*99)+1
}
function osszehasonlit(a, b){
    if (a < b) {
        return 1;
    } else if (a > b) {
        return-1;
    } else {
        return 0;
    }
    t.sort(osszehasonlit);
}
for (let index = 0; index < t.length; index++) {
    console.log(t[index])
}