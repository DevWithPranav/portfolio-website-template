import Cards from "./Cards";

const Projects = () => {
  return (
    <section className="w-full bg-hero">
      <div className="mx-7 py-10 space-y-6 sm:mx-16 sm:px-4 xl:p-16">
        <h1 className="text-3xl text-center font-extrabold text-[#ff855f]">Projects</h1>
        <div className="md:flex md:justify-center md:gap-x-10 xl:pt-14">
        <Cards></Cards>
        <Cards></Cards>
        </div>
      </div>
    </section>
  );
};

export default Projects;
