import { TextRenderer } from '../components/textRenderer/TextRenderer';
import { Head } from '../components/intro/IntroToMe';
import { Navbar } from '../components/navbar/Navbar';
import { LanguagesILove } from '../components/languagesILove/LanguagesILove';
import { Experience } from '../components/Experience/Experience';

export default function Home() {
  return (
    <div style={{ width: '100%' }}>
      <Navbar />
      <div className="parallax">
        <Head />
        <TextRenderer
          text="Hi, I am Andres Ausecha, Software engineer and technology passionate"
        />
        <LanguagesILove />
        <Experience />
      </div>
    </div>
  );
}
