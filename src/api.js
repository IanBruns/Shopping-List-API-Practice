const baseURL = 'https://thinkful-list-api.herokuapp.com/IanBruns'

function getItems() {
    // return Promise.resolve('A Successful Response!');
    return fetch(`${baseURL}/items`)
}

function createItem(name) {
    let newItem = JSON.stringify({
        name: name
    });

    return fetch(`${baseURL}/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: newItem
    })
}

function updateItem(id, updateData) {

    let updatedItem = JSON.stringify(updateData);

    return fetch(`${baseURL}/items/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: updatedItem
    })
}

function deleteItem(id) {
    return fetch(`${baseURL}/items/${id}`, {
        method: 'DELETE',
    })
}

export default {
    getItems, createItem, updateItem,
    deleteItem
};