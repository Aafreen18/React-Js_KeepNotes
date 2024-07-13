import React from "react";
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const SavedNotes = (props) => {
    const deleteNote = ()=> {
        props.deleteItem(props.id);
    }

    return(
        <>
            
            <div className="savedNotes">
                <h3>{props.title}</h3>
                <p>{props.msg}</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
                    <Button 
                        onClick={deleteNote}
                        className="deleteBtn"
                        style={{
                        backgroundColor:'white',
                        border:'1px solid rgb(243, 158, 67)',
                        color:'rgb(243, 158, 67)',
                        borderRadius: '50%'
                        }} > 
                        <DeleteOutlineIcon /> 
                    </Button>
                </div>
            </div>
            
        </>
    );
}

export default SavedNotes;