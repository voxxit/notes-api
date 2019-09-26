import React from 'react';
import NotesContainer from './NotesContainer';



class Home extends React.Component {
  render() {
    return (
      <div>
         <div className="App">
          <div className="App-header">
            <h1>Note Board</h1>
          </div>
         <NotesContainer />
       </div>
      </div>
    )
  }
}

export default Home