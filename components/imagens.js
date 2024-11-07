import ImagemRotativa from "./ImagemRotativa";

const PaginaR = () => {
    const imagens = [
      '/1.png',
      '/2.png',
      "/3.png",
      "/4.jpg",
      "/5.png",
      "/6.png",
      "/7.png",
      "/8.jpg",
      // ... adicione mais URLs de imagens conforme necessário
    ];
  
    return (
      <div>
        <ImagemRotativa imagens={imagens} />
      </div>
    );
  };
  
  export default PaginaR;