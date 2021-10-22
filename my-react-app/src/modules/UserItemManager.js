const remoteURL = "http://localhost:8088/userItems"

export const getUserItemById = (itemId) => {
    return fetch(`${remoteURL}/${itemId}`)
    .then(res => res.json())
}

export const getAllUserItems = () => {
	return fetch(`${remoteURL}`)
		.then(res => res.json())
}

export const deleteUserItem= (id) => {
	return fetch(`${remoteURL}/${id}`, {
		method: "DELETE"
	}).then(result => result.json())
}

export const addUserItem = (newUserItem) => {
	return fetch(`${remoteURL}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(newUserItem)
	}).then(response => response.json())
}

export const update = (editedUserItem) => {
	return fetch(`${remoteURL}/${editedUserItem.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(editedUserItem)
	}).then(data => data.json());
}