import Slide from "./../../components/slide/slide";

interface ProjectsProps {}

const Projects = (props: ProjectsProps) => {
  return (
    <section
      id="projects"
      className=" flex h-[800px] w-full items-center justify-center bg-purple-500"
    >
      <Slide>
        <h1>Section One</h1>
      </Slide>
      <Slide delay={0.3}>
        <p>Hey! I am the first section</p>
        <a href="#section2">Scroll to 2</a>
      </Slide>
    </section>
  );
};

export default Projects;
