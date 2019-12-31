function randomWalk(n) {
    // return coordinates after 'n' block random walk.
    let x = 0, y = 0;

    for (let i = 0; i < n; i++) {
        let dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        let [dx, dy] = dir[Math.floor(Math.random()*dir.length)];
        x = x + dx;
        y = y + dy;
    }
    return([x, y]);
}

let numOfWalks = 10000;
let a, b;

for (let i = 0; i < 31; i++) {
    let noTransport = 0;
    for (let j = 0 ; j < numOfWalks; j++){
        [a, b] = randomWalk(i);
        let distance = Math.abs(a) + Math.abs(b);
        if (distance <= 4) {
            noTransport++;
        }
    }
    let noTransportPercentage = Math.floor(noTransport / numOfWalks);
    console.log(`Walk size = ${i}`, `% of no transport ${noTransportPercentage}`);
}