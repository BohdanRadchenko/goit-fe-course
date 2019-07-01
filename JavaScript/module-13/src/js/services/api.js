const URL = 'http://localhost:3000/notes';

export const getNotes = () => {
    return fetch(URL).then(response => {
        if (response.ok) return response.json();

        throw new Error('Error while fetching: ' + response.statusText);
    })
}

export const saveNote = note => {
    const options = {
        method: 'POST',
        body: JSON.stringify(note),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    }

    return fetch(URL, options).then(response => {
        if (response.ok) return response.json();

        throw new Error('Error while fetching SaveNote: ' + response.statusText);
    })

}

export const deleteNote = id => {
    const options = {
        method: 'DELETE',
    }

    return fetch(`${URL}/${id}`, options).then(response => {
        if (response.ok) return response.json();

        throw new Error('Error while fetching deleteNote: ' + response.statusText);
    })

}