
const fallAsleeepTime = new Date(); //stores the current date and time -
//instatiates an object of the Date class

console.log("hello, world!");

console.log(fallAsleeepTime); //this is in universal time 

console.log(fallAsleeepTime.toLocaleDateString("en-US")); //this is in eastern US time zone
fallAsleeepTime.setMinutes(fallAsleeepTime.getMinutes() + 14); //takes the avg person 14 minutes to fall asleep so add 14 

console.log(fallAsleeepTime.toLocaleTimeString("en-US")); //this gives us only the time and not the date including seconds


console.log("you will fall asleep at", fallAsleeepTime.toLocaleTimeString("en-US", {timeStyle: "short"})); //this gives us the time not including seconds

const wakeUpTime = new Date(fallAsleeepTime);
const wakeUpTimes = [];

for(let i = 1; i <= 6; i++) {
    wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
    const wakeUpTimeString = wakeUpTime.toLocaleTimeString("en-US", {timeStyle: "short",});
    wakeUpTimes.push(wakeUpTimeString); //add each time into the array 
}

//wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
//const wakeUpTimeString = wakeUpTime.toLocaleTimeString("en-US", {timeStyle: "short",});

//console.log('The  sleep cycle # {i} ends at ${wakeUpTimeString}');


console.log("Wake-up times:", wakeUpTimes.join(", ")); //the join concotonates the array with a comma and space in between 


function calcWakeUpTimes() {
    const fallAsleepTime = new Date();
    fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14);
  
    const wakeUpTime = new Date(fallAsleepTime);
    const wakeUpTimes = [];
    for (let i = 1; i <= 6; i++) {
      wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
      const wakeUpTimeString = wakeUpTime.toLocaleTimeString("en-US", {
        timeStyle: "short",
      });
      // console.log(`The sleep cycle #${i} ends at ${wakeUpTimeString}`);
      wakeUpTimes.push(wakeUpTimeString);
    }
  
    console.log("Wake-up times:", wakeUpTimes.join(", "));
  }