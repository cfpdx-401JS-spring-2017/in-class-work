// Arrays
const arr1 = [{}, {}, {}];

// add
const arr2 = arr1.slice();
arr2.push({});

// remove from middle
const arr3 = arr2.slice();
/**** sPlice, not slice ****/
arr3.splice(1, 1);

// remove last item
const arr4 = arr3.slice(0, -1);

// Objects
const obj = {
    name: 'Joey',
    dob: '7/1/2000',
    color: 'blue'
}

const obj2 = Object.assign({}, obj, { color: 'pink' });
//or
const obj3 = Object.assign({}, obj);
obj3.color = 'pink';
// or
const obj4 = {
    ...obj,
    color: 'pink'
};

// array of object and change object prop
const obj1 = {
    name: 'Joey',
    color: 'blue'
}
const obj2 = {
    name: 'Julie',
    color: 'red'
}
const obj3 = {
    name: 'Sarah',
    color: 'yellow'
}

const people = [obj1, obj2, obj3];

// this would be handler method on component that owns state
function changePerson(index, changes) { 
    const { people: oldPeople } = this.state;
    const people = oldPeople.slice();
    const oldPerson = people[index];
    people[index] = { ...oldPerson, changes };
    this.setState({ people });
}



