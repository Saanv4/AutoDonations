import Header from '../pages/components/header.js'
import Contact from './components/contact.js';
import Information from './components/information.js';
export default function Home() {
  return (
    <div>
      <Header/>
      <Information/>
      <Contact/>
    </div>
  );
}