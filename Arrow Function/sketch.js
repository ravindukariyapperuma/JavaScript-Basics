let counter1;

function setup(){
    noCanvas();
    console.log(this);
    const counter1 = new Counter(100, 500);
    counter1.srart();
    const counter2 = new Counter(200, 700);
    counter2.srart();
    const counter3 = new Counter(500, 200);
    counter3.srart();
}

class Counter {
    constructor(start, wait) {
        this.count = start;
        this.wait = wait;
        this.p = createP('');
    }

    srart() {
        setInterval(() => this.countIt(), this.wait);
        
    }

    countIt() {
        this.count++;
        this.p.html(this.count);
    }

    
}