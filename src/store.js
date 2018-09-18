import { observable, action, computed } from "mobx";

class CounterStore {
  @observable
  counter = 10;

  @observable
  arr = [];

  @action
  setCounter = int => {
    this.counter = this.counter + int;
  };

  @computed
  get getTickets() {
    let newArr = this.arr.map(a => ({ ticket: a.ticket }));
    if (newArr.length > 0) {
      return `You have ${newArr.length} tickets`;
    }

    return `You have no tickets`;
  }
}


@computed
get fullname() {
  return this.firstName + ' ' + this.surName
}

export default new CounterStore();

// function x() {

// }

// var x = function() {

// }

// const x = function(a) {
//   return a
// }

// const x = (a) => {
//   return a
// }

// const x = a => {
//   return a + 10
// }

// const x = (a,b) => a + b

// const pow2 = arr => arr.map(function(value ) {
//   return value * value
// })

// const pow2 = arr => arr.map(a => a * a)
