import { Github } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

function Projects() {
  const ProjectList = [
    {
      title: "Teste",
      description:
        "Teste descriçãoTeste descriçãoTeste descriçãoTeste descriçãoTeste descriçãoTeste descriçãoTeste descriçãoTeste descriçãoTeste descriçãoTeste descriçãoTeste descriçãoTeste descrição",
      techs: ["ReactJS", "NodeJS", "Express"],
      imageUrl:
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
      github: "https://www.github.com/hannaseraphim",
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-wrap flex-col items-center justify-center gap-5 w-full h-full mb-15"
    >
      <h1 className="text-emerald-500 text-2xl font-bold uppercase">
        Projects
      </h1>
      <div className=" flex flex-wrap gap-5 p-5 justify-center">
        {ProjectList.map((project) => (
          <Card className="p-5 w-130 h-120 bg-neutral-900 border-neutral-700 flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-emerald-500 font-bold text-xl">
                {project.title}
              </h1>
              <p className="text-neutral-500 text-sm">{project.description}</p>
              <div className="flex gap-1">
                {project.techs.map((tech) => (
                  <Badge className="bg-emerald-700">{tech}</Badge>
                ))}
              </div>
            </div>
            <div className="">
              <img
                src={project.imageUrl}
                className="aspect-video w-full object-cover rounded-md h-57"
                draggable={false}
              />
            </div>
            {project.github ? (
              <Button
                variant="outline"
                className="w-30 cursor-pointer hover:bg-transparent hover:text-white"
              >
                <Github />
                Github
              </Button>
            ) : (
              ""
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;
