const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
];

heroes.sort(function (a, b) {
    if (a.health < b.health) {
        return 1;
    } else if (a.health > b.health) {
        return -1;
    }
});

export default heroes

