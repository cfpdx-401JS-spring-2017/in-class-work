fetch('/api/stores')
    .then(res => res.json())
    .then(loadStores);

const ul = document.getElementById('stores');

function loadStores(stores) {
    const fragment = document.createDocumentFragment();
    stores.map(createStore)
        .forEach(storeFrag => {
            fragment.appendChild(storeFrag);
        });
    ul.appendChild(fragment);
}

const storeTemplate = document.getElementById('storeTemplate').content;

function createStore(store) {
    const storeFrag = storeTemplate.cloneNode(true); 
    storeFrag.children[0].textContent =
        `${store.name} at ${store.address ? store.address.city : 'nowhere'}`;
    return storeFrag;
}

function addStore(form) {
    const store = {
        name: form.name.value,
        address: {
            city: form.city.value
        }
    };

    fetch('/api/stores', {
        method: 'POST',
        body: JSON.stringify(store)
    })
        .then(function (res) { return res.json(); })
        .then(function (data) { alert(JSON.stringify(data)); });

    console.dir(store);
}

