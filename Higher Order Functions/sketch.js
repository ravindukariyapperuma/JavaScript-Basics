function sing(callback) {
    console.log('la la la la');
    callback();
}

function meow() {
    console.log("meow meow");
}

sing(meow);

function setup() {

}