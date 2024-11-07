import { useEffect, useState } from 'react';

const ImagemRotativa = ({ imagens }) => {
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndiceAtual(prevIndice => {
        let novoIndice;
        do {
          novoIndice = Math.floor(Math.random() * imagens.length);
        } while (novoIndice === prevIndice);
        return novoIndice;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [imagens.length]);

  return (
    <div>
      <img
        src={imagens[indiceAtual].src}
        alt={imagens[indiceAtual].alt}
      />
    </div>
  );
};

export default ImagemRotativa;
