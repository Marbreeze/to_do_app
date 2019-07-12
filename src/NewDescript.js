import React from 'react';

const NewDescript = (props) =>{
    return(
        <div>
            <div className = "ui message" onClick={props.click}>
                <div class ="header">{props.data}</div>
                <ul className = "list">
                    <li>{props.name}</li>
                    <li>{props.description}</li>
                </ul>
                </div>
        </div>
    );
}

export default NewDescript;