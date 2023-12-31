import { domains } from "../../constants/domains";
import Domain from "../../components/domain/domain";

interface SkillProps {}

const Skills = (props: SkillProps) => {
    return (
        <>
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
        </>
    );
};

export default Skills;
