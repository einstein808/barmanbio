import { useEffect, useState } from 'react';

const ImagemRotativa = ({ imagens }) => {
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndiceAtual(prevIndice => (prevIndice + 1) % imagens.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [imagens.length]);

  return (
    <div>
      <img src={imagens[indiceAtual]} alt={`Imagem ${indiceAtual}`} s/>
    </div>
  );
};

export default ImagemRotativa;
