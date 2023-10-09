import React from "react";


const GameCard = ({item, id, handleClick}) => {
    const itemClass = item.stat ? " active " + item.stat : " ";
    return(
        <div id={id} 
            className={"card"+ itemClass +" sm:w-15 sm:h-15"}
            onClick={() => handleClick(id)}> 
                <p >{item.image}</p>
        </div>
    )
}

export default GameCard;
