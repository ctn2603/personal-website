import Lottie from "lottie-react";
import Computer from "./../../assets/animations/computer.json";

interface HomeProps {}

const Home = (props: HomeProps) => {
    return (
        <section
            id="home"
            className=" min-h-screen w-full bg-landing bg-cover bg-center bg-no-repeat"
        >
            <div className="mx-auto flex h-[100vh] w-full flex-row flex-wrap  pt-[80px] sm:flex-row">
                <div className="flex w-full flex-col items-start justify-center  px-10 text-white sm:pl-40 md:w-1/2 md:pl-20">
                    <p className="font-poppins text-6xl sm:text-7xl md:text-8xl xl:text-9xl">
                        HELLO!
                    </p>
                    <p className="font-rubik sm:text-sm md:text-xl xl:text-xl">
                        Welcome to my digital hub. I'm Chi Tam Nguyen, a
                        Computer Science major at University of
                        California-Berkeley ...
                    </p>
                </div>
                <div className="flex w-full items-center justify-center  md:w-1/2">
                    <Lottie animationData={Computer} />
                </div>
            </div>
        </section>
    );
};

export default Home;
