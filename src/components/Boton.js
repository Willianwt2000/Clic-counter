import React from "react"
import '../style/Boton.css'
function Boton({ texto, esBotonDeClic }) {
    return (
        <button className="boton">
            {texto}
        </button>
    )
}

export default Boton