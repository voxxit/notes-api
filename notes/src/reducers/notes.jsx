interface Note {
  id: integer,
  title: string,
  body: string
};

const initialState: Note[] = [];

export function notesReducer(state = initialState, action): Note[] {
  console.log("notesReducer type:", action.type);

  switch (action.type) {
    case "GET_NOTES_OK": 
      return action.json.notes;
    case "ADD_NEW_NOTE":
      return state.concat([action.data]);
    default:
      return state;
  }
}