let t = [];
for (let index = 0; index < 20; index++) {
    t.push({
        nev: "Cirmos" +(i+1),
        eletkor: (Math.random() * 9)+2
    })
}
for (let macska of t){
    if (macska.eletkor === 2){
        console.log(macska);
    }
}
