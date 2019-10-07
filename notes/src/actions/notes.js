export const GET_NOTES_REQ = 'GET_NOTES_REQ';
export const GET_NOTES_OK = 'GET_NOTES_OK';
export const ADD_NEW_NOTE_REQ = 'ADD_NEW_NOTE_REQ';
export const ADD_NEW_NOTE_OK = 'ADD_NEW_NOTE_OK';

export function addNewNoteSuccess(json) {
  return {
    type: ADD_NEW_NOTE_OK,
    json
  };
}

export function addNewNote(data) {
  return dispatch => {
    dispatch({ type: "ADD_NEW_NOTE", data });
  
    return fetch('http://localhost:3001/api/v1/notes', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(this.addNewNoteSuccess(json)))
    .catch(error => console.log(error))
  };
};

export function getNotes() {
  return dispatch => {
    dispatch({ type: GET_NOTES_REQ });
    
    return fetch(`http://localhost:3001/api/v1/notes.json`)
      .then(response => response.json())
      .then(json => dispatch(getNotesSuccess(json)))
      .catch(error => console.log(error));
  };
};

export function getNotesSuccess(json) {
  return {
    type: GET_NOTES_OK,
    json
  };
};
