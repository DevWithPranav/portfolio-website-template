import image from "../../assets/avatar.png";

const Home = () => {
  return (
    <section className="flex justify-center items-center w-full bg-hero">
      <div className="flex-col m-4 space-y-7 pt-6">
        <div className=" flex justify-center">
          <img src={image}></img>
        </div>
        <div className="text-center">
          <h1 className="text-[30px] font-extrabold font text-[#ff855f] sm:leading-[63.36px] sm:text-5xl">
            I do code and <br></br>make content about it!
          </h1>
        </div>
        <div className="text-[#c4c4c4] text-center font-light sm:font-semibold sm:mx-14 sm:px-4">
          <p className="mx-1 text-[15px] xl:mx-16 xl:text-[18px]">
            I am a seasoned full-stack software engineer with over 8 years
            of professional experience, specializing in backend development.{" "}
            My expertise lies in crafting robust and scalable SaaS-based
            architectures on the Amazon AWS platform.
          </p>
        </div>
        <div className="xl:mx-16 xl:px-16">
        <div className="flex gap-5 mx-6 sm:mx-16 sm:px-3 xl:px-16">
          <button className="bg-white p-2 rounded-[50px]  w-full border border-white">Get In Touch</button>
          <button className="border text-white p-2 rounded-[50px] w-full">Download CV</button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
