import Lottie from "lottie-react";
import Arrow2Sec from "../../components/arrow2sec/arrow2sec";
import Computer from "./../../assets/animations/computer.json";

interface HomeProps {}

const Home = (props: HomeProps) => {
    return (
        <div className="flex w-full flex-row flex-wrap sm:flex-row md:w-3/4">
            <div className="flex w-full flex-col items-start justify-center px-10 text-white md:w-1/2">
                <p className="font-poppins text-lg text-[#EAA79C]">
                    Hello, I'm
                </p>
                <p className="my-5 font-poppins text-2xl font-bold md:text-3xl xl:text-5xl">
                    Chi Tam Nguyen
                </p>
                <p className="font-poppins text-gray-400">
                    I'm a Computer Science major at University of California -
                    Berkeley, and I'm passionate about building software, full
                    stack and mobile applications.
                </p>
                <Arrow2Sec className="mt-10 hidden w-full items-end justify-center md:flex" />

                {/* <div className="mt-10 flex w-full cursor-pointer items-end justify-center">
                        <HashLink smooth to={"#about"}>
                            <motion.img
                                variants={{
                                    start: {
                                        opacity: 1,
                                        y: 0,
                                    },
                                    end: {
                                        opacity: 0,
                                        y: 30,
                                    },
                                }}
                                initial="start"
                                animate="end"
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                }}
                                src={Arrow}
                                alt="More"
                                className="h-[70px] text-red-500"
                            />
                        </HashLink>
                    </div> */}

                {/* <p className="font-rubik sm:text-sm md:text-xl xl:text-xl">
                        Welcome to my digital hub. I'm Chi Tam Nguyen, a
                        Computer Science major at University of
                        California-Berkeley ...
                    </p> */}
            </div>
            <div className="mt-10 flex w-full items-center justify-center sm:mt-0 md:w-1/2">
                <Lottie animationData={Computer} />
            </div>
            <Arrow2Sec className="flex w-full items-end justify-center md:hidden" />
        </div>
    );
};

export default Home;
