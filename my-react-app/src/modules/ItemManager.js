const remoteURL = "http://localhost:8088/items"

export const getItemById = (id) => {
    return fetch(`${remoteURL}/${id}`)
    .then(res => res.json())
}

export const getAllItems = () => {
	return fetch(`${remoteURL}?_sort=name`)
		.then(res => res.json())
}

export const deleteItem= (id) => {
	return fetch(`${remoteURL}/${id}`, {
		method: "DELETE"
	}).then(result => result.json())
}

export const addItem = (newItem) => {
	return fetch(`${remoteURL}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(newItem)
	}).then(response => response.json())
}

export const update = (editedItem) => {
	return fetch(`${remoteURL}/${editedItem.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(editedItem)
	}).then(data => data.json());
}