import React, { useState } from 'react'

export default function Form(props) {
        const [captRadiusLeft, setCapRadiusLeft] = useState("50");
        const [captRadiusRight, setCapRadiusRight] = useState("50");
        const [captRadiusButton, setCapRadiusButton] = useState("50");
        const [captRadiusTop, setCapRadiusTop] = useState("50");
        const [completRedius, setCompletRadius] = useState([]);

    function onChange(event){
        const { name, value } = event.target;

        switch(name){
            case "radius-left":
                setCapRadiusLeft(value)
                break; 
            case "radius-right":
                setCapRadiusRight(value);
                break;
            case "radius-top":
                setCapRadiusTop(value);
                break;
            case "radius-button":
                setCapRadiusButton(value);
                break;            
            default:
                console.log("não encontrado");
        }

        //const result = [`${captRadiusLeft}%`,  `${captRadiusTop}%`, `${captRadiusButton}%`, `${captRadiusRight}%`];

        setCompletRadius(`${captRadiusLeft}% ${captRadiusTop}% ${captRadiusButton}% ${captRadiusRight}%` );

        props.onBorder(completRedius);

    }

    function copyRadius () {
        /* Get the text field */
        document.getElementById("myInput").select();

        document.execCommand('copy');

        /* Alert the copied text */
        alert("border-radius: "+ document.getElementById("myInput").value);

    }

    return (
        <form className="container-form">
            <div>
                <div className="form-group ml-2 mr-2 formFormat">
                    <label  className="form-label">Left</label>
                    <input type="range" className="form-range form-control" id="radius-left" name="radius-left" onChange={onChange}></input>
                    <span className="form-text">{captRadiusLeft} %</span>  
                    <hr /> 
                </div>

                <div className="form-group ml-2 mr-2 formFormat">
                <label className="form-label">Right</label>
                <input type="range" className="form-range form-control" id="radius-right" name="radius-right" onChange={onChange} ></input>
                <span className="form-text">{captRadiusRight} %</span>  
                <hr /> 
                </div>
            </div>
            <div>
                <div className="form-group ml-2 mr-2 formFormat">
                    <label className="form-label">Top</label>
                    <input type="range" className="form-range form-control" id="radius-top" name="radius-top" onChange={onChange} ></input>
                    <span className="form-text">{captRadiusTop} %</span> 
                    <hr />  
                </div>

                <div className="form-group ml-2 mr-2 formFormat">
                    <label className="form-label">Button</label>
                    <input type="range" className="form-range form-control" id="radius-button" name="radius-button" onChange={onChange} ></input>
                    <span className="form-text">{captRadiusButton} %</span> 
                    <hr />  
                </div>

                <div className="input-group rodape">
                    <input className="form-control" type="text" placeholder="Border-radius" id="myInput" value={`border-radius: ${completRedius}`} />
                    <div className="input-group-append">
                        <button type="button" className="btn btn-primary" onClick={copyRadius}>Copy Border-radius CSS</button>
                    </div>
                </div>
            </div>
            
        </form>
    )
}
