import Slide from "./../../components/slide/slide";

interface ProjectsProps {}

const Projects = (props: ProjectsProps) => {
    return (
        <>
            <Slide>
                <h1>Section One</h1>
            </Slide>
            <Slide delay={0.3}>
                <p>Hey! I am the first section</p>
                <a href="#section2">Scroll to 2</a>
            </Slide>
        </>
    );
};

export default Projects;
