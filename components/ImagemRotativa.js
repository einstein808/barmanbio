import { useEffect, useState } from 'react';

const ImagemRotativa = ({ imagens }) => {
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Gera um índice aleatório diferente do índice atual
      setIndiceAtual(prevIndice => {
        let novoIndice;
        do {
          novoIndice = Math.floor(Math.random() * imagens.length);
        } while (novoIndice === prevIndice); // Garante que o índice seja diferente
        return novoIndice;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [imagens.length]);

  return (
    <div>
      <img src={imagens[indiceAtual]} alt={`Imagem ${indiceAtual}`} />
    </div>
  );
};

export default ImagemRotativa;
