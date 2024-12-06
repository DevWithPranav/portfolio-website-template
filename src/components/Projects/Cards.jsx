import thumnaill from "../../assets/project-thumbnail-1.png"

const Cards = () => {
  return (
    <div className="bg-[#2a2a2a] rounded-[18px] shadow sm:rounded-[30px]">
        <div>
            <img src={thumnaill} className="sm:w-full"></img>
        </div>
        <div className="px-4 py-2 sm:mx-5 sm:py-4">
            <h2 className="font-extrabold text-[10px] text-[#c4c4c4]  leading-[19px]">CLICK HERE TO VISIT</h2>
            <h1 className="text-white text-[15px] font-extrabold leading-tight">HTML TUTORIAL</h1>
        </div>
    </div>
  )
}

export default Cards