import Joyride from 'react-joyride';
import React from 'react';
export class Tour extends React.Component {
  state = {
    steps: [
      {
        target: '.my-first-step',
        content: 'This is my awesome feature!',
      },
      {
        target: '.my-other-step',
        content: 'This another awesome feature!',
      },
      
    ]
  };

  render () {
    const { steps } = this.state;

    return (
      <div className="app">
        <Joyride
          steps={steps}
          scrollToFirstStep
          continuous
        />
        <div className='bg-primary h-screen'>
            <h1 className='my-first-step'>First step</h1>
        </div>
        <div className=' h-screen'>
            <h2 className='my-other-step'>Other step</h2>
        </div>
      </div>
    );
  }
}