import React from 'react'

export default function Border(props) {
    const { border } = props;

 
    return (
        <div className="flex-content">
            <div className="cicle" style={{borderRadius: `${border}`,  background: "blue"}} >
                <div className="container-span">
                    <span className="futuante-left">left</span>
                    <span className="futuante-top">top</span>
                    <span className="futuante-right">right</span>
                    <span className="futuante-button">button</span>
                </div>
            </div>
        </div>
    ) 

}