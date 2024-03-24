/* 100 doors

100 doors in a row are all initially closed. You make 100 passes by the doors. The first time through, you visit every door and toggle the door (if the door is closed, you open it; if it is open, you close it).
The second time you only visit every 2nd door (door #2, #4, #6, ...).
The third time, every 3rd door (door #3, #6, #9, ...), etc, until you only visit the 100th door.

Question: What state are the doors in after the last pass? Which are open, which are closed?*/

function toggleDoors(doors) {
    let doorsState = [];

    for (let i = 0; i < doors; i++) {
        doorsState[i] = false
    }

    for (let pass = 1; pass <= doors; pass++) {

        for (let door = pass - 1; door < doors; door += pass) {
            doorsState[door] = !doorsState[door];
        }
    }

    let openDoors = ''
    let closedDoors = ''

    for (let i = 0; i < doors; i++) {
        if (doorsState[i]) {
            openDoors += (i + 1) + ',';
        } else {
            closedDoors += (i + 1) + ',';
        }
    }
    return { openDoors, closedDoors }

}
module.exports = toggleDoors