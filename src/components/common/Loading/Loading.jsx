import { ClipLoader } from "react-spinners";

const Loading = ({loading}) => {
  return (
      <div className="flex justify-center items-center h-screen w-full ">
       <ClipLoader color="#01CEC9" loading={loading} size={50} />
      </div>
  )
}

export default Loading