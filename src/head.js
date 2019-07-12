import React from 'react';

const Titlehead = (props) => {
    const style = {
        height: '15%',
        backgroundColor: '#ccc',
        textAlign: 'center',
        border: '1px solid black'
    }
    return (
        <div className ='firsthead' style={style}>
            <p>{props.message}</p>
        </div>
    );
}
export default Titlehead;