import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { gameElements } from "../../constants"
import GameCard from "./GameCard";
import Joyride from 'react-joyride';

export default function Cards(){
    const [items, setItems] = useState(
        gameElements.sort(() => Math.random() - 0.5))
    const [prev, setPrev] = useState(-1);
    const [moves, setMoves] = useState(0);
    // const [winMessage, setWinMessage] = useState("");
    const [highscore, setHighscore] = useState(() => {
        const storedHighscore = localStorage.getItem('highscore');
        return storedHighscore ? parseInt(storedHighscore, 10) : 0;
    });

    const [{run, steps}, setSteps] = useState({
        run:false,
        steps:[
            {
                target: '#step-0',
                placement: 'top',
                title: "Welcome!",
                spotlightPadding:20,
                disableOverlayClose: true,
                hideCloseButton: true,
                disableBeacon: true,
                spotlightClicks: true,
                locale: {open:"Start the Intro-Tour!"},
                content: 'Welcome to the memory Game!\nJust click the blue buttons to start.'
            },
            {
                target:'#step-1',
                title: 'Gamestats',
                content: 'Here you can see your current move count and your highscore.',
            },
            {
                target: '#step-2',
                title: 'Restart Game',
                content: 'Click this button to restart the game anytime!',
            },
            {
                target: '#step-3',
                title: 'Reset Highscore',
                content: 'Click here to DELETE the saved highscore',
            },
            {
                target: '#step-4',
                title: 'Back',
                content: 'Finally if you dont want play anymore click here to go back to menu.'
            },
            {
                target: '#step-5',
                title: 'Help',
                content: 'Click here to show this tour again!\nHave fun to play!'
            }
        ]
    })
    
    useEffect(() => {
        localStorage.setItem('highscore', highscore.toString())
    }, [highscore]);

    const resetGame = () => {
      
        setMoves(0);
        setItems(gameElements.sort(() => Math.random() - 0.5));
        for(let i = 0; i < items.length; i++){
            items[i].stat = "show"
        }
        setTimeout(() => {
            let ele = document.querySelectorAll('.show')
            for(let i = 0; i < items.length; i++){
                items[i].stat = ""
            }
            for(let j = 0; j < ele.length; j++){
                ele[j].classList.remove('show');
                ele[j].classList.remove('active');
            }
        }, 1500)
    }

    function resetHighscore(){
        setHighscore(0)
        alert("Highscore successfully cleared!");
    }

    function isWin(){
        for(let i = 0; i < items.length; i++){
            if(items[i].stat !== "correct"){
                return false;
            }
        }
        if(highscore > moves || highscore === 0){
            setHighscore(moves);
        }
        return true;
    }

    function check(current){        
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
            if(isWin()){
                setTimeout(() => {
                    alert("Congratulation!\nYou win the game!");

                }, 1500)
            };
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            document.body.style.pointerEvents = "none";
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
                document.body.style.pointerEvents = "all";
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            setMoves(moves + 1);
            check(id)
        }
    }

    function handleHelpCLick(){
        setSteps({run: true, steps});
    }
    const gameIntroSeen = localStorage.getItem("gameIntroSeen");
    useEffect(() => {
        if(!gameIntroSeen){
            handleHelpCLick();
            localStorage.setItem("gameIntroSeen", "true");
        }
    }, [])


    return(
        <>
        <div className='flex m-auto justify-center align-center w-full z-20'>
        <div className="max-w-100 my-5 flex flex-row rounded-md shadow-sm text-center">
            <button id="step-2" onClick={resetGame} className={"border-1 px-5 py-2 mx-2 rounded duration-150 hover:border-[#00eeff] hover:text-[#00eeff] active:bg-[#00eeff] active:text-white"}>
            Restart</button>
            <button id="step-3" onClick={()=> resetHighscore()} className={"border-1 px-5 py-2 mx-2 rounded duration-150 hover:border-[#ff0000] hover:text-[#ff0000] active:bg-[#ff0000] active:text-white"}>Delete
            </button>
            <Link id="step-4" to={"/portfolio/"} className={"border-1 px-5 py-2 mx-2 rounded duration-150 hover:border-[#00eeff] hover:text-[#00eeff] active:bg-[#00eeff] active:text-white"}>Home</Link>
            <button id="step-5" onClick={handleHelpCLick} className={"border-1 px-5 py-2 mx-2 rounded duration-150 hover:border-[#00eeff] hover:text-[#00eeff] active:bg-[#00eeff] active:text-white"}>?</button>
        </div>
        </div>
            {/* <p className="text-[#00ff00] text-[23px] mb-0">{winMessage.toString()}</p> */}
            <p id="step-1" className="text-[#00ff00] mb-1 pb-1">Moves: <span classList={"text-primary"}>{moves}</span>&nbsp;&#9122;&nbsp;Record: {highscore}</p>
        
        <div id="step-0" className="card-container">
            { items.map((item, index) => (
                <GameCard key={index} item={item} id={index} handleClick={handleClick} />
            )) }

        </div>
        <Joyride
                steps={steps}
                scrollToFirstStep
                continuous={true} 
                showProgress
                showSkipButton
                run={run}
                styles={{
                    options:{
                        backgroundColor: '#3333335e',
                        textColor: '#3bc7eb',
                        primaryColor: '#3bc7eb',
                        arrowColor: '#3333335e',
                        overlayColor: 'rgba(0, 0, 0, 0.9)',
                        beaconSize: 54,
                    }
                }}
                />
        </>
    )
}