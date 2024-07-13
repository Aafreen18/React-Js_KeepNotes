import React, {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';


const CreateNotes = (props) =>{
  const [show, setShow] = useState(false);
  const [notes, setNotes] = useState({
      title: '',
      msg: ''
  })

  const inputEvent = (event) => {
    const {name, value} = event.target;

    setShow(true);
    setNotes((preVal) => {
      return{
        ...preVal,
        [name]: value
      };

    })
  }

  const addEvent = () => {
    props.passNotes(notes);
      setNotes({
        title: '',
        msg: ''
    })
  }

  const backToNormal = () =>{
    setShow(false);
  }

  return(
    <>
      <div className='container'>
          {show? 
            (
              <div className='d-flex flex-column writeDiv' onDoubleClick={backToNormal}> 
              <h3><input type='text' name='title' value={notes.title} placeholder='Title' onChange={inputEvent}></input></h3>
              <input type='text' name='msg' value={notes.msg} placeholder='Write a note...' onChange={inputEvent}></input>
              <Button onClick={addEvent} className='addBtn' style={{marginTop:'25%', marginLeft:'90%',backgroundColor:'white',border:'1px solid rgb(243, 158, 67)',color:'rgb(243, 158, 67)',borderRadius: '50%'}}> <AddIcon/> </Button>
              </div>
            ) : 
            (
              <div className='write'>
              <input className='text-black-50' placeholder='Write a note...' onClick={inputEvent}></input>
              </div>
            )
          }
      </div>
    </>
  );
}

export default CreateNotes;