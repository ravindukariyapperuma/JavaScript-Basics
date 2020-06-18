function draw() {
    background(0);

    for (let bubble of bubbles) {
        bubble.move();
        bubble.show();
    }

    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}