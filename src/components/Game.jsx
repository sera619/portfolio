import React from "react";
import Cards from './game/Cards';

export default function Game() {
    return(
        <section id="game-bg" className="w-full min-h-screen justify-center align-center text-center z-0">
            <div className='flex mx-auto justify-center align-center w-full z-0 bg-transparent'>
                <div className="max-w-xs my-5 flex flex-row rounded-md shadow-sm text-center">
                    <div className="block  text-center">
                        <img src="./logo.png" alt="S3R43o3 Logo" className="max-w-[8rem]"/>
                    </div>                
                </div>
            </div>

            <div className="flex mt-1 justify-center align-center ">
                <div className="card-wrapper">
                    <Cards />
                </div>
            </div>
        </section>
    )
}