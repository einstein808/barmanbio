import WebLinks from '../components/WebLinks';
import Seo from '../components/Seo';
import seoData from '../next-seo.config';


export default function Home() {
  const page = {
    title: seoData.openGraph.title,
    excerpt: 'home',
    slug: '/',
    coverImage: 'https://i.imgur.com/o2iE1W7.jpeg'
  };
  return (
    <>
      <Seo page={page} />
      <WebLinks />
    </>
  )
}

