import React from "react";


const GameCard = ({item, id, handleClick}) => {
    const itemClass = item.stat ? " active " + item.stat : " ";
    return(
        <div id={id} 
            className={"card"+ itemClass}
            onClick={() => handleClick(id)}> 
                <p >{item.image}</p>
        </div>
    )
}

export default GameCard;
