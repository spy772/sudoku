export function isItMine(mines, x, y) {
    for (let i = 0; i < mines.length; i++) {
        if (mines[i].x === x && mines[i].y === y) {
            return true;
        }
    }
    return false;
}

        // console.log('prev same as before: ' + (before === now));
        // console.log(prev.tiles)
              // console.log(x, y);
/* if (isItMine(mines, x, y)) {
   console.log('boom');
 } else {
   console.log('continue');
} */
           // console.log('flagged x:' + x + ' y:' + y)
