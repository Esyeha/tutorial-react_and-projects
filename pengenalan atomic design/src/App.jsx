import Button from "./components/Button/Button"

function App() {
  return (
    <>
      <div className="flex justify-center items-center bg-indigo-600 p-4">
        <h1 className="text-2xl font-extrabold text-neutral-50">Pengenalan atomic design</h1>
      </div>
      <div className="flex gap-2 p-2">
        <Button variant="bg-blue-500">click me</Button>
        <Button variant="bg-orange-500">check out</Button>
        <Button></Button>
      </div>
      
    </>
  )
}

export default App
