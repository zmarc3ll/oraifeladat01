console.log("1.feladat");
let t = [];

for (let index = 0; index < 10; index++) {
    t.push(Math.random()*101)+1
}
t.sort()
for (let index = 0; index < t.length; index++) {
    console.log(t[index])
}