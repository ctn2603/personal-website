import Slide from "./../../components/slide/slide";

interface TimelineProps {}

const Timeline = (props: TimelineProps) => {
  return (
    <section
      id="timeline"
      className=" flex h-[800px] w-full items-center justify-center bg-orange-500"
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

export default Timeline;
