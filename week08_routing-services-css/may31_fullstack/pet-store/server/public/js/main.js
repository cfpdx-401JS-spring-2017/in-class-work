fetch('/api/stores')
    .then(res => res.json())
    .then(loadStores);

function loadStores(stores) {
    const fragment = document.createDocumentFragment();
    const addFragment = store => fragment.appendChild(store);
    
    stores
        .map(createStore)
        .forEach(addFragment);
    
    addToList(fragment);
}

const ul = document.getElementById('stores');
function addToList(node) {
    ul.appendChild(node);
}

const storeTemplate = document.getElementById('storeTemplate').content;
const getBoundNodes = ({ children: [li] }) => { 
    const [span, button] = li.children;
    return { li, span, button };
};

function createStore(store) {
    const storeFrag = storeTemplate.cloneNode(true);
    const { li, span, button } = getBoundNodes(storeFrag);

    span.textContent = `${store.name} at ${store.address ? store.address.city : 'nowhere'}`;
    button.addEventListener('click', () => {
        removeStore(store)
            .then(() => li.parentNode.removeChild(li));
    });
    
    return storeFrag;
}

const error = document.getElementById('error');
const setError = (msg = '') => error.textContent = msg;
const resetError = () => setError();

function addStore(form) {
    resetError();
    const { name, city } = form.elements;
    const store = {
        name: name.value,
        address: {
            city: city.value
        }
    };

    const body = JSON.stringify(store);
    const method = 'POST';
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Content-Length': body.length.toString()
    });

    fetch('/api/stores', { method, body, headers })
        .then(res => {
            if (!res.ok) {
                return res.text().then(err => { throw err; });
            }
            return res.json();
        })
        .then(createStore)
        .then(addToList)
        .then(() => form.reset())
        .catch(setError);
}

function removeStore(store) {
    return fetch(`/api/stores/${store._id}`, { method: 'DELETE' })
        .then(res => {
            if (!res.ok) {
                res.text().then(err => { throw err; });
            }
        });
}

