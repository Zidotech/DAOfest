import { Card, Footer, Hero, MegaPhone, Navbar } from "./components";
import { About, Organizer, Schedule, Speaker, Sponsors } from "./pages";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <MegaPhone />
      <About />
      <Card />
      <Speaker />
      <Organizer />
      <Schedule />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
