import RegisterPage from "./Pages/register"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <>
      <Navbar judul="React router"/>   
        <div className="flex flex-col justify-center items-center p-4 ">
            {/* <LoginPage /> */}
            <RegisterPage />
        </div>
    </>
  )
}

export default App
