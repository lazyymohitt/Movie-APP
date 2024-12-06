import loader from "/loader01.gif"

const Loader = () => {
  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
      <img src={loader} className="scale-50" alt="" />
    </div>
  )
}

export default Loader
