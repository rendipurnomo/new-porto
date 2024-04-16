import Cursor from '@/components/ui/cursor';
import { Home, Portofolio, About, Contact } from './pages';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <main>
      <Cursor />
      <Home />
      <About />
      <Portofolio />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}

export default App;
