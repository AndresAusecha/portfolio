import { Aboutme } from '../components/about/Aboutme';
import { Avatar } from '../components/intro/IntroToMe';

export default function Home() {
  return (
    <div>
      <div className="parallax">
      <section>
      <Avatar />
      </section>
      <br />
      <section>
      <Aboutme />
      </section>
      <br />
      <section>
      <Aboutme />
      </section>
      <br />
      <section>
      <Aboutme />
      </section>
      <br />
      <section>
      <Avatar />
      </section>
      </div>
    </div>
  );
}
