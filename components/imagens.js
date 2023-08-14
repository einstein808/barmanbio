import ImagemRotativa from "./ImagemRotativa";

const PaginaR = () => {
    const imagens = [
      '/yamaha-xj6-nabs-2013-255259-1-md.jpg',
      '/chevrolet-spin-activ-1-8-8v-econo-flex-5p-aut-2019-255368-1-md.jpg',
      "/ford-ecosport-se-1-5-12v-flex-5p-aut-2018-254829-2-md.jpg",
      "/jeep-renegade-sport-1-8-4x2-flex-16v-aut-2016-255257-2-lg.jpg",
      "/renault-kwid-zen-1-0-flex-12v-5p-mec-2022-255516-2-md.jpg"
      // ... adicione mais URLs de imagens conforme necessário
    ];
  
    return (
      <div>
        <ImagemRotativa imagens={imagens} />
      </div>
    );
  };
  
  export default PaginaR;