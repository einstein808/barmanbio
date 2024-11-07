import ImagemRotativa from "./ImagemRotativa";

const PaginaR = () => {
  const imagens = [
    { src: '/drink moscow mule.png', alt: 'Drink Moscow Mule preparado pelo barman de juiz de fora Gabryel Amaro' },
    { src: '/Drink Apple Martini.png', alt: 'Drink Apple Martini preparado pelo barman de juiz de fora Gabryel Amaro' },
    { src: '/Drink Lagoa Azul.png', alt: 'Drink Lagoa Azul preparado pelo barman de juiz de fora Gabryel Amaro' },
    { src: '/drink morango mule.jpg', alt: 'Drink Morango Mule preparado pelo barman de juiz de fora Gabryel Amaro' },
    { src: '/drink sex on the beach.png', alt: 'Drink Sex on the Beach preparado pelo barman de juiz de fora Gabryel Amaro' },
    { src: '/drink pina colada.png', alt: 'Drink Pina Colada preparado pelo barman de juiz de fora Gabryel Amaro' },
    { src: '/barman de juiz de fora Gabryel Amaro.png', alt: 'Barman Gabryel Amaro preparando um drinks em Juiz de fora' },
    { src: '/drink do patinho na banheira.jpg', alt: 'Drink do patinho na banheira preparado pelo barman de juiz de fora Gabryel Amaro' },
    { src: '/drink pina colada espuma gengibre.jpg', alt: 'Drink Pina Colada com espuma de gengibre preparado pelo barman de juiz de fora Gabryel Amaro' },
    { src: '/caipifruta de morango.jpg', alt: 'Caipifruta de Morango preparado pelo barman de juiz de fora Gabryel Amaro' },
    { src: '/cocktail sem alcool.jpg', alt: 'Cocktail sem alcool de Maracuja preparado pelo barman de juzi de fora Gabryel Amaro' },
    { src: '/barman juiz de fora Gabryel Amaro.jpg', alt: 'Foto do Barman de Juiz de Fora Preparando um drink' },
  ];

  return (
    <div>
      <ImagemRotativa imagens={imagens} />
    </div>
  );
};

export default PaginaR;
