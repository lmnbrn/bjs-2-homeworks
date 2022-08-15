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
      let verification = checkClock.bind(this);
      function checkClock(AlarmClock) {
         if (AlarmClock.time === this.getCurrentFormattedTime()) AlarmClock.func();
      }
      if (!this.timerId) this.timerID = setInterval(() => this.alarmCollection.forEach(alarm => verification(alarm)), 100);
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