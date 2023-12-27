import { domains } from "../../constants/domains";
import Domain from "../../components/domain/domain";

interface SkillProps {}

const Skills = (props: SkillProps) => {
    return (
        <section
            id="skills"
            className="bg-skills flex min-h-screen w-full flex-col items-center justify-center bg-red-300 bg-cover bg-center bg-no-repeat p-[80px] font-rubik"
        >
            <div className="flex h-[100px] items-center text-5xl text-white">
                Skills
            </div>

            {domains.map((domain) => {
                return (
                    <Domain
                        key={domain.domainId}
                        domainName={domain.domainName}
                        techs={domain.techs}
                        className="my-3"
                    />
                );
            })}
        </section>
    );
};

export default Skills;
