import React from "react";
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

const Header = () => {
    return(
        <>
            <div className='nav-bar align-content-center'>
                <div className='d-flex justify-content-start align-items-center ms-5'>
                    <p className='text-white'> <TextSnippetIcon/> </p>
                    <h1 className='text-white'>Keep Note</h1>
                </div>
            </div>
        </>
    )
}

export default Header;