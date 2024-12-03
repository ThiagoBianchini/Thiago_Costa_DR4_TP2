import React, { useState } from 'react';

function Ex2() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState([]);

  const adicionarItem = () => {
    if (item) {
      setLista([...lista, item]);
      setItem(''); 
    }
  };

  const removerItem = (index) => {
    const novaLista = lista.filter((_, i) => i !== index);
    setLista(novaLista);
  };

  return (
    <div>
      <h1>Lista de Compras</h1>
      
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Digite um item"
      />
      
      <button onClick={adicionarItem}>Adicionar</button>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removerItem(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ex2;
