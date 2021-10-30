import { TextRenderer } from '../components/textRenderer/TextRenderer';
import { Avatar } from '../components/intro/IntroToMe';
import { Navbar } from '../components/navbar/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="parallax">
      <Avatar />
      <br />
      <TextRenderer
        text="Hi, I am Andres Ausecha, systems and software engineer from Colombia National University. I am also
        Fullstack web developer, highly passionate about technology, languages, development patterns, and user functionality."
      />
      <div style={{ height: "3rem" }} />
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white', padding: '1rem' }}>
          <img width="100px" height="100px" src="/images/java.png" alt="" />
          <img width="100px" height="100px"  src="/images/javascript.png" alt="" />
          <img width="100px" height="100px" src="/images/node.png" alt="" />
          <img width="100px" height="100px"  src="/images/ts.jpg" alt="" />
        </div>
        <div style={{ height: "3rem" }} />
      </div>
    </div>
  );
}
