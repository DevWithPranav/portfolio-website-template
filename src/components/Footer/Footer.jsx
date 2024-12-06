import instagram from "../../assets/instagram.svg"
import x from "../../assets/x.svg"
import youtube from "../../assets/youtube.svg"


const Footer = () => {
  return (
    <footer className="w-full bg-nav-bar flex flex-col py-7 xl:px-16">
      <div className="text-white mx-7 space-y-3 sm:mx-16 sm:px-4">
        <h1 className="text-2xl font-bold tracking-wide">Contact</h1>
        <p className="text-sm font-light tracking-tight text-[#c4c4c4] sm:text-[19px]">
          Seasoned Full Stack Software Engineer with over 8 years of hands-on
          experience in designing and implementing robust, scalable, and
          innovative web solutions. Adept at leveraging a comprehensive skill
          set encompassing front-end and back-end technologies{" "}
        </p>
        <h3 className="text-sm tracking-tight text-[#c4c4c4] font-medium sm:text-[17px]">Email: exampl@gmail.com</h3>
      </div>
      <div className="flex pt-4 mx-7 gap-x-4 sm:mx-16 sm:px-4">
        <img src={instagram}></img>
        <img src={x}></img>
        <img src={youtube}></img>
      </div>
    </footer>
  );
};

export default Footer;
