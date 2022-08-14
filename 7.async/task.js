//Задача №1. Будильник-колыбельная
//п.1
class AlarmClock {
    constructor() {
       this.alarmCollection = [];
       this.timerId = null;
    }
    addClock(time, callback, id) {
        if (id === undefined) { 
          throw new Error('Параметр ID не передан');
        }
        else if (this.alarmCollection.some(alarm => alarm.id === id)) {
          console.error('Будильник с таким id уже существует');
          return;
        }
        this.alarmCollection.push({time:time, id:id, callback:callback})
    }
    removeClock(id) {
        for (let i = 0; i < this.alarmCollection.length; i++) {
          if (id === this.alarmCollection[i].id) {
            this.alarmCollection.splice(i, 1);
            return true;
          }
        }
        return false;
    }
    getCurrentFormattedTime() {
        let date = new Date;
        let hour = date.getHours();
        if (hour >= 0 && hour <= 9) {
          hour = ('0' + hour);
        }
        let min = date.getMinutes();
        if (min >= 0 && min <= 9) {
          min = ('0' + min);
        }
        return (hour + ':' + min);
    }
    start() {
        let currentTime = this.getCurrentFormattedTime();
        checkClock = checkClock.bind(this);
        function checkClock(clock, time) {
          if (clock.time === time) {
            return clock.param();
          } 
        }
        if (this.timerId === null) {
          this.timerId = setInterval(getClock(this.alarmCollection));     
          function getClock(clock) {
            for (let i = 0; i < clock.length; i++) {
              checkClock(clock[i], currentTime);
            }
          }       
        }     
    }
    stop() {
        if (this.timerId !== null) {
          clearInterval(this.timerId);
          this.timerId = null;
        }
    }      
    printAlarms() {
      this.alarmCollection.forEach(alarm => console.log(alarm.id, alarm.time));
    }      
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
}

//п.2
function testCase() {
  let phoneAlarm = new AlarmClock;
  phoneAlarm.addClock('21:18', () => console.log('Пора вставать!'), 1);  
  phoneAlarm.addClock('20:08', () => {console.log('Пора вставать уже!'); phoneAlarm.removeClock(2)}, 2);  
  phoneAlarm.addClock('20:08', () => {console.log('Проспишь же!'); phoneAlarm.clearAlarms(); phoneAlarm.printAlarms()}, 3);
  phoneAlarm.printAlarms();  
  phoneAlarm.start();
}

testCase();