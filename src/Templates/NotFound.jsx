import error from "/404ERROR.webp";
const NotFound = () => {
  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
      <img src={error} className="scale-120" alt="" />
    </div>
  )
}

export default NotFound