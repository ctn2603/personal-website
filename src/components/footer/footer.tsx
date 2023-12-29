import { contacts } from "../../constants/contacts";

interface FooterProps {}

const Footer = (props: FooterProps) => {
    return (
        <div className="item flex h-32 items-center justify-around gap-10 bg-black font-rubik">
            <div>
                <p className=" text-white">Copyright © Chi Tam Nguyen 2023</p>
            </div>
            <div>
                {
                    <ul className="flex list-none gap-5">
                        {contacts.map((contact) => {
                            return (
                                <li key={contact.id}>
                                    <div className="cursor-pointer rounded-full bg-white p-2 hover:bg-gray-200">
                                        <a href={contact.link} target="_blank">
                                            <img
                                                src={contact.icon}
                                                alt="platform"
                                                className="h-8 w-8"
                                            />
                                        </a>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                }
            </div>
        </div>
    );
};

export default Footer;
