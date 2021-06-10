import React, {useState} from 'react'
import Border from './Components/Border';
import Form from './Components/Form';
import './index.css'

export default function App() {

  const itilializa = "50% 50% 50% 50%";
  
  const [border, setBorder] = useState(itilializa);

  
  function atualizaBorder (borderAtt){
    setBorder(borderAtt);
  }

  return (
    <div className="container">
      <h3 className="formattitle">Generation Border-Radius CSS</h3>
      <div className="row">
        <div className="col-md-6"><Border border={border} /></div> 
        <div className="col-md-4"><Form  onBorder={atualizaBorder}/> </div>

      </div>
    </div>
  )
}
