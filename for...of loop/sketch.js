function draw() {
    background(0);

    for (let unicorn of bubbles) {
        unicorn.move();
        unicorn.show();
    }

    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}