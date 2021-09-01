import React from 'react';
import '../Containers/App'

const SearchBox=({searchChange})=>{
    return(
        <div className='pa2'>
            <input 
                type='search' 
                placeholder='search robots' 
                className='pa3 ba bg--green bg-lightest-blue'
                onChange={searchChange}    
                />
        </div>
    );
}

export default SearchBox;