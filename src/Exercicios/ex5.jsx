import React, { useState } from 'react';

function Ex5() {

  const Contador = () => {
    const [numero, setNumero] = useState(0); 

    function diminuir () {
      if (numero > 0 ) {
        setNumero(numero - 1)
      }
    }

    return (
      <div>
        <h1>Contador: {numero}</h1>
        <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
        <button onClick={diminuir}>Diminuir</button>
      </div>
    )
  }

  return (
    <div>
      <Contador/>
    </div>
  )
}

export default Ex5;
