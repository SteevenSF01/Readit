import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function LoginModal({setTestComponents}) {
    const router = useRouter()
    const theme  = useSelector((state) => state.theme.darkMode)
  return (
      <div className={` p-8 rounded-lg shadow-lg z-50 w-[70%] md:w-[50%] lg:h-[30%] flex flex-col gap-y-5 ${theme? 'bg-[#323232] text-white ':'bg-white text-[#161616]'}`}>
        <h2 className="text-xl font-bold mb-4">Login Required</h2>
        <p className="mb-4">
          You need to be logged in to add to favorites.
        </p>
        <div className="flex justify-between">
          <button
          onClick={()=>setTestComponents(false)}
            className="bg-[#E00404] text-white font-bold py-1 px-6 rounded"
          >
            close
          </button>
          <button
          onClick={()=>{router.push("/login")}}
            className="bg-[#E00404] text-white font-bold py-1 px-6 rounded"
          >
            sign in
          </button>
        </div>
      </div>
  );
}
