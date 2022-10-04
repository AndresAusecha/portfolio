import { TextRenderer } from '../components/textRenderer/TextRenderer';
import { Head } from '../components/intro/IntroToMe';
import { Navbar } from '../components/navbar/Navbar';
import { LanguagesILove } from '../components/languagesILove/LanguagesILove';
import { Experience } from '../components/Experience/Experience';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="parallax">
        <Head />
        <TextRenderer
          text="Hi, I am Andres Ausecha, Systems and software engineer from Colombia National University. I am also
          Fullstack web developer, highly passionate about technology, languages, development patterns, and user functionality."
        />
        <LanguagesILove />
        <Experience />
      </div>
    </div>
  );
}
