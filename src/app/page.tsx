import About from "./pages/about";
import Comission from "./pages/comission";
import Schedule from "./pages/schedule";
import Speakers from "./pages/speakers";

import { ButtonScroll } from "./components/buttonScroll";

export default function LandingPage() {
  return (
    <>
      <About />
      <Speakers />
      <Schedule />
      <Comission />
      <ButtonScroll />
    </>
  );
}
