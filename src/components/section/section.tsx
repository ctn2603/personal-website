interface SectionProps {
    id: string;
    children: React.ReactNode;
}

const Section = (props: SectionProps) => {
    return (
        <section
            id={props.id}
            className={`bg-${props.id} flex min-h-screen w-full flex-col items-center justify-start bg-cover bg-center bg-no-repeat py-20 font-rubik`}
        >
            {props.children}
        </section>
    );
};

export default Section;
