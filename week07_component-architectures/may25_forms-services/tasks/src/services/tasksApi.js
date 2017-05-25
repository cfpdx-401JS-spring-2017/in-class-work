
const types = [
    { _id: '1', name: 'work' },
    { _id: '2', name: 'home' },
    { _id: '3', name: 'play' }
];

let id = 1;

const nextId = () => (id++).toString();

const tasks = [
    { _id: nextId(), name: 'teach React', type: '1' },
    { _id: nextId(), name: 'order Pizza', type: '1' },
    { _id: nextId(), name: 'learn eucher from Tom', type: '3' }
];

export default {
    getTasks() {
        return Promise.resolve(tasks);
    },
    getTypes() {
        return Promise.resolve(types);
    },
    addTask(task) {
        const saved = {
            ...task,
            _id: nextId()
        }
        return Promise.resolve(saved);
    }
}