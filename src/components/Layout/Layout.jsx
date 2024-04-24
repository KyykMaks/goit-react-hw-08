import { Suspense } from "react"
import { AppBar } from "../AppBar/AppBar"
import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useAuth } from "../hooks/useAuth"

const Layout = () => {
    const {selLoadError} = useAuth();
    
return (
    <div>
        {selLoadError ? (
        <b>Refreshing user...</b>
      ) : (
        <>
        <AppBar/>
        <Suspense fallback={null}>
            <Outlet/>
        </Suspense>
        <Toaster position="top-right" reverseOrder={false}/>
        </>
      )}
    </div>
)
}

export default Layout;