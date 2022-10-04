import { TextRenderer } from '../components/textRenderer/TextRenderer';
import { Avatar } from '../components/intro/IntroToMe';
import { Navbar } from '../components/navbar/Navbar';
import { LanguagesILove } from '../components/languagesILove/LanguagesILove';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="parallax">
      <Avatar />
      <br />
      <TextRenderer
        text="Hi, I am Andres Ausecha, Systems and software engineer from Colombia National University. I am also
        Fullstack web developer, highly passionate about technology, languages, development patterns, and user functionality."
      />
      <LanguagesILove />
      </div>
    </div>
  );
}
