import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Joyride from 'react-joyride';

export default function Home() {
    const [{run, steps}, setSteps] = useState({
        run: false,
        steps:[
            {
                content: (
                    <div><h1 className={"text-bold uppercase"}>Hello!</h1>Welcome this is a small showcase!
                    </div>
                ),
                target: '#step-0',
                placement: 'top',
                title: "Welcome!",
                spotlightPadding:20,
                disableOverlayClose: true,
                hideCloseButton: true,
                disableBeacon: true,
                spotlightClicks: true,
                locale: {open:"Start the Intro-Tour!"}
            },
            {
                content: "Click here to see my Portfolio!",
                target: '#step-1',
                placement: 'bottom',
                hideCloseButton: true,

            },
            {
                content: "Click here to see play a nice memory game!",
                target: '#step-2',
                placement: 'top',
                hideCloseButton: true,

            },
            {
                content: "Finally you can restart this small intro tour.",
                target: '#step-3',
                placement: 'bottom',
                hideCloseButton: true,

            },
        ]
    })

    const handleIntroButtonClick = () => {
        setSteps({ run: true, steps }); 
    }
    useEffect(() => {
        const introSeen = localStorage.getItem("introSeen");
        if (!introSeen) {
            handleIntroButtonClick();
            localStorage.setItem("introSeen", "true");
        }
    }, []);
    return (
        <div id="game-bg" className='flex justify-center items-center w-full min-h-screen z-0'>
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
            <div id="step-0" className="max-w-xs my-5 flex flex-col rounded-md shadow-sm text-center z-10">
                <div className="flex justify-center">
                    <img src="./logo.png" alt="S3R43o3 Logo" className="w-40"/>
                </div>

                <Link
                    id="step-1"
                    to={"/portfolio/portfolio"}
                    className="menubtn py-3 my-2 px-20 relative"
                >
                    Portfolio
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="fa-solid fa-eye pl-3"></i>

                </Link>

                <Link
                    id="step-2"
                    to={"/portfolio/game"}
                    className="menubtn py-3 my-2 px-20 relative"
                >
                    Game
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="pl-3 fa-solid fa-gamepad"></i>
                </Link>

                <div id="step-3" 
                    className="menubtn py-3 my-2 px-20 relative"
                    onClick={handleIntroButtonClick}
                    >
                    Tour
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <i className="pl-3 fa-solid fa-circle-question"></i>

                </div>

            </div>
        </div>
    );
}
