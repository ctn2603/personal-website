import Slide from "./../../components/slide/slide";

interface ContactProps {}

const Contact = (props: ContactProps) => {
  return (
    <section
      id="contact"
      className=" flex h-[800px] w-full items-center justify-center bg-green-500"
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

export default Contact;
