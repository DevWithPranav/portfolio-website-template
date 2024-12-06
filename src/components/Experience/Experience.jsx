import Exp from "./Exp"


const Experience = () => {
  return (
    <section className="w-full bg-hero xl:px-16">
        <div className="mx-7 py-5 sm:mx-16 sm:px-4 xl:p-16">
        <h1 className="text-blue-800 text-3xl font-bold text-center pb-10 pt-2">Experiences</h1>
            <div className="space-y-4 sm:space-y-6 xl:pt-16">
                <Exp></Exp>
                <Exp></Exp>
            </div>
        </div>
    </section>
  )
}

export default Experience