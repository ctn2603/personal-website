import PersonalPhoto from "../../assets/images/personal_photo.png";
import Arrow2Sec from "../../components/arrow2sec/arrow2sec";

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <div className="flex w-full flex-row flex-wrap sm:flex-row md:w-3/4">
      <div className="flex w-full flex-col items-start justify-center pr-10 text-white lg:w-2/3">
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
        <Arrow2Sec className="mt-10 hidden w-full items-end justify-center lg:flex" />
      </div>
      <div className="mt-10 flex w-full items-center justify-center sm:mt-0 lg:w-1/3">
        <img src={PersonalPhoto} alt="logo" />
      </div>
    </div>
  );
};

export default Home;
