// Declare Global Variables Here
function Calculating_Motor_Speed_and_Gear_Ratios(){

  /*

  This Calculator allows for the calculation of Motor Output Speeds and how different Gear Ratios would effect the Output Speeds of the Motor (Does not include Compound Gear Ratios)

  */
  var motorSpeed;
  var drivenGear;
  var driveGear;
  var gearRatio;
  var finalMotorSpeed;

  motorSpeed = document.getElementById("motorSpeed").value;
  driveGear = document.getElementById("driveGear").value;
  drivenGear = document.getElementById("drivenGear").value;

  gearRatio = driveGear / drivenGear;
  finalMotorSpeed = motorSpeed * gearRatio;


  output.innerHTML = finalMotorSpeed + "rpm" ;

}

function Rack_and_Pinion_Linear_Lift(){ 

  var motorSpeed;
  var drivenGear;
  var driveGear;
  var pinionRadius
  var gearRatio;
  var finalMotorSpeed;
  var stallTorque;
  var efficientTorque;
  var linearVelocity;


  motorSpeed = document.getElementById("motorSpeed").value;
  driveGear = document.getElementById("driveGear").value;
  drivenGear = document.getElementById("drivenGear").value;
  pinionRadius = document.getElementById("pinionRadius").value;
  finalMotorSpeed = motorSpeed * gearRatio;
  gearRatio = driveGear / drivenGear;
  stallTorque = 100/motorSpeed *18.59;
  efficientTorque = stallTorque.value/2;
  linearVelocity = (gearRatio*motorSpeed*pinionRadius*2*3.14)/60


output.innerHTML = "Stall Torque: " + stallTorque + "Efficient Torque: " + efficientTorque ;

}

function fourbar_lift() {

  var motorSpeed;
  var drivenGear;
  var driveGear;
  var gearRatio;
  var armLength;

  motorSpeed = document.getElementById("motorSpeed").value;
  driveGear = document.getElementById("driveGear").value;
  drivenGear = document.getElementById("drivenGear").value;
  armLength = document.getElementById("arm").value;
  
  gearRatio = driveGear / drivenGear;
  stallTorque = 100/motorSpeed *18.59;
  efficientTorque = stallTorque.value/2;
  
output.innerHTML = "Stall Torque: " + stallTorque + "Efficient Torque: " + efficientTorque ;




}