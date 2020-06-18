function setup(){
  const particle = {x: 100, y: 100}; //object
  console.log(particle);

  particle.x = 200;
  console.log(particle);

  particle.z = 50;
  console.log(particle);

//   particle = {x:20,y:100};
//   console.log(particle);

  particle = "hello";
  console.log(particle);
}