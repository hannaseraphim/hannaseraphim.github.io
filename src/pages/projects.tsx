import { Github } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import petshopImage from "../images/petshop.jpg";
import shippingImage from "../images/shipping.jpg";

function Projects() {
  const ProjectList = [
    {
      title: "Petshop API",
      description:
        "An simple API REST made for managing a petshop 🐶. Manage all registered pets, services, customers and bookings, also has an admin and employees auth system to implement on the front end. ",
      techs: ["Express", "Typescript", "MySQL"],
      imageUrl: petshopImage,
      github: "https://github.com/hannaseraphim/petshop-api-ts",
    },
    {
      title: "Shipping API (under development)",
      description:
        "An simple API REST made for managing a shipping company. The main goal is to have a unique tracking code generator, a tracking system based on coordinates and also an advanced database.",
      techs: ["Express", "Typescript", "MongoDB"],
      imageUrl: shippingImage,
      github: "https://github.com/hannaseraphim/shipping-api",
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-wrap flex-col items-center justify-center gap-5 w-full h-full mb-15 scroll-mt-20"
    >
      <h1 className="text-emerald-500 text-2xl font-bold uppercase">
        Projects
      </h1>
      <div className=" flex flex-wrap gap-5 p-5 justify-center">
        {ProjectList.map((project) => (
          <Card
            className="p-5 w-130 h-120 bg-neutral-900 border-neutral-700 flex flex-col justify-between"
            key={project.title}
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-emerald-500 font-bold text-xl">
                {project.title}
              </h1>
              <p className="text-neutral-500 text-sm">{project.description}</p>
              <div className="flex gap-1">
                {project.techs.map((tech) => (
                  <Badge className="bg-emerald-700" key={tech}>
                    {tech}
                  </Badge>
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
              <a href={project.github} target="_blank">
                <Button
                  variant="outline"
                  className="w-30 cursor-pointer hover:bg-transparent hover:text-white"
                >
                  <Github />
                  Github
                </Button>
              </a>
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
