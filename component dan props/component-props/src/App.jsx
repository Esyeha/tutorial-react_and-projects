import './App.css'
import Button from './component/button'

function App() {
  return (
    <>
    <div className='flex justify-center items-center bg-pink-600 p-2'>
      <h1 className='text-white font-extrabold '>COMPONENTS + PROPS</h1>
    </div>
    <div className='p-2 flex gap-2'>
      <Button variant="bg-slate-700">click</Button>
      <Button variant="bg-blue-700">download</Button>
      <Button variant="bg-orange-600">check out</Button>
      <Button />
    </div>
    </>
  )
}

export default App
