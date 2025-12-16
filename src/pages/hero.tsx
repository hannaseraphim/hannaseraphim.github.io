import { Github } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { Button } from "../components/ui/button";

function Hero() {
  return (
    <section
      id="hero"
      className="w-full h-80 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-emerald-300">Hello, I'm</h1>
        <h1 className="text-white text-4xl font-bold">Hanna Seraphim</h1>
      </div>

      <div className="p-3">
        <p className="text-neutral-300">
          A web designer, UI/UX designer and API developer.
        </p>
        <div className="flex items-center justify-center p-5 gap-2">
          <a href="https://github.com/hannaseraphim" target="_blank">
            <Button className="bg-emerald-600 cursor-pointer hover:bg-emerald-900">
              <Github />
            </Button>
          </a>
          <a href="mailto:hannaseraphim@gmail.com" target="_blank">
            <Button className="bg-emerald-600 cursor-pointer hover:bg-emerald-900">
              <MdEmail></MdEmail>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
