import { ReactNode } from "react"
import { Navigate} from "react-router-dom"


export default function ProtectedRoutesSession({children}:{children:ReactNode}) {
    if (!localStorage.getItem('session_id')) {
        return children
    }else{
        return <Navigate to={'/'}/>
    }
 
}

