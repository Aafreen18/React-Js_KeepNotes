import React, { useState } from 'react';
import CreateNotes from './CreateNotes';
import Header from './Header';
import SavedNotes from './SavedNotes';
import './App.css';

const App = () => {
  const[addItems, setItems] = useState([]);

  const addNotes = (notes) => {
    setItems((preVal) => {
      return [ ...preVal, notes]
    });
  }

  const deleteNote = (id) => {
    setItems((preVal) => {
      return preVal.filter((currData, index)=> {
        return index !== id;
      })
    });
  }

  return(
    <>
      <Header />
      <CreateNotes passNotes = {addNotes}/>
      
      <div className="writtenNotes" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap:'10px',marginBottom:'15px' }}>
        {
          addItems.map((curEle,idx) => {
            return <SavedNotes 
            title={curEle.title}
            msg={curEle.msg} 
            deleteItem = {deleteNote}
            id={idx}/>
          })
        }
      </div>
      
      
    </>
  );
}

export default App;