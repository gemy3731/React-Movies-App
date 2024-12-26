import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../Redux/tokenSlice";
import { useState } from "react";


export default function CreateToken() {
    const [isAuth, setIsAuth] = useState(false)
    const {token} = useSelector((store:any)=>store.tokenReducer)
    const dispatch = useDispatch()
    const createRequestToken = async ()=>{
        const res = await fetch(
            `https://api.themoviedb.org/3/authentication/token/new`,
            {
              headers: {
                accept: "application/json",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2ExNDAyY2EwYjRmZWEwMmU2MzMyODY3NmYxNmRkNyIsIm5iZiI6MTczMjM3OTc5OC4wMjIsInN1YiI6IjY3NDIwNDk2N2I4MjVlNjg1YjRlNWVmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sa5TY__-QVyFct-xdXvl0cIxfAPQGwmIqjaB_T9l29E",
              },
              cache: "force-cache",
            }
          );
          const finalRes = await res.json();
          if (finalRes.success) {
            dispatch(setToken(finalRes.request_token))
            localStorage.setItem('token',finalRes.request_token)
            setIsAuth(true)
            open(`https://www.themoviedb.org/authenticate/${finalRes.request_token}?redirect_to=http://localhost:5173/session`)
          }
          
    }
    const createSession = async (request_token:string)=>{
        console.log(request_token);
        
        const res = await fetch(
            'https://api.themoviedb.org/3/authentication/session/new',
            {
                method: 'POST',
                headers: {
                  accept: 'application/json',
                  'content-type': 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2ExNDAyY2EwYjRmZWEwMmU2MzMyODY3NmYxNmRkNyIsIm5iZiI6MTczMjY1ODEyNS4yNzAxNDMsInN1YiI6IjY3NDIwNDk2N2I4MjVlNjg1YjRlNWVmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U2NeKqF8qmhVMcci3rG5NKwmQ0jykTrLLpnwR9ieRlw'
                },
                body: JSON.stringify({request_token: 'fdd44d132a4d849704ff94e2206d6cfc83a3e8ae'})
              }
          );
          const finalRes = await res.json();
          console.log(finalRes);
          
    }
    const askForPermission = (request_token:string)=>{
        open(`https://www.themoviedb.org/authenticate/${request_token}?redirect_to=http://localhost:5173/session`)
    }
  return (
    <div className="max-w-[1440px] mx-auto mt-72 md:mt-0 bg-white p-10  rounded-[20px] shadow-lg">
        <h2 className="font-bold text-[32px] mb-5 text-[#ff5300] ">Create Session</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        {!isAuth&&<button onClick={createRequestToken} className="bg-[#ff5300] hover:bg-[#ff5500e2] w-fit px-20 py-3 rounded-md text-[22px] font-bold  my-10">Create</button>}
        {isAuth&&(<>
        <button onClick={()=>{askForPermission(localStorage.getItem('token')||'')}} className="bg-[#ff5300] hover:bg-[#ff5500e2] w-fit px-20 py-3 rounded-md text-[22px] font-bold  my-10">Ask For Permission</button>
        <button onClick={()=>{createSession(localStorage.getItem('token')||'')}} className="bg-[#ff5300] hover:bg-[#ff5500e2] w-fit px-20 py-3 rounded-md text-[22px] font-bold  my-10">Register</button>
        </>)}
        </div>
    </div>
  )
}
