import About from "./pages/about";
import Comission from "./pages/comission";
import Schedule from "./pages/schedule";
import Speakers from "./pages/speakers";

import { ButtonScroll } from "./components/buttonScroll";
import Faq from "./pages/faq";

export default function LandingPage() {
  return (
    <>
      <About />
      <Speakers />
      <Schedule />
      <Comission />
      <Faq />
      <ButtonScroll />
    </>
  );
}
