import React from 'react';

const Cell = (props) => {
    const {value, onClick, className} = props;
    return (
        <div className={`game-cell ${className}`} onClick={props.onClick}>
            {props.value}
        </div>
    );
};

export default Cell;