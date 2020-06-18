function draw() {
    background(0);

    for (let elt of bubbles) {
        elt.move();
        elt.show();
    }

    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}