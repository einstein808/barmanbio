import WebLinks from '../components/WebLinks';
import Seo from '../components/Seo';
import seoData from '../next-seo.config';


export default function Home() {
  const page = {
    title: seoData.openGraph.title,
    excerpt: 'home',
    slug: '/',
    coverImage: 'https://mercador.blob.core.windows.net/imagens/banner/42/d12b325b-0d34-48be-9cff-f968250a350f.png'
  };
  return (
    <>
      <Seo page={page} />
      <WebLinks />
    </>
  )
}

