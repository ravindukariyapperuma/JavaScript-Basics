let counter1;

function setup(){
    noCanvas();
    console.log(this);
    const counter1 = new Counter(100, 500);
    const counter2 = new Counter(200, 700);
    const counter3 = new Counter(500, 200);
}

class Counter {
    constructor(start, wait) {
        this.count = start;
        this.p = createP('');
        console.log(this);
        
        setInterval( () => {
            console.log(this);
            this.count++;
            this.p.html(this.count);
        }, wait);

        
    }

    
}