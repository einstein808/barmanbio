import ImagemRotativa from "./ImagemRotativa";

const PaginaR = () => {
  const imagens = [
    { src: '/1.png', alt: 'Drink Moscow Mule preparado pelo barman de juiz de fora Gabryel Amaro' },
    { src: '/2.png', alt: 'Drink Apple Martini preparado pelo barman de juiz de fora Gabryel Amaro' },
    { src: '/3.png', alt: 'Drink Lagoa Azul preparado pelo barman de juiz de fora Gabryel Amaro' },
    { src: '/4.jpg', alt: 'Drink Morango Mule preparado pelo barman de juiz de fora Gabryel Amaro' },
    { src: '/5.png', alt: 'Descrição da imagem 5' },
    { src: '/6.png', alt: 'Descrição da imagem 6' },
    { src: '/7.png', alt: 'Descrição da imagem 7' },
    { src: '/8.jpg', alt: 'Descrição da imagem 8' },
    { src: '/9.jpg', alt: 'Descrição da imagem 9' },
    { src: '/10.jpg', alt: 'Descrição da imagem 10' },
    { src: '/11.jpg', alt: 'Descrição da imagem 11' },
  ];

  return (
    <div>
      <ImagemRotativa imagens={imagens} />
    </div>
  );
};

export default PaginaR;
