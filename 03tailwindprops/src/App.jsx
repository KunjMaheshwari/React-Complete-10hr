import './App.css';
import Card from './components/Card';

function App() {

  let myObj = {
    name: "Kunj Maheshwari",
    age: 21,
    state: "Madhya Pradesh"
  }

  let newArr = [1,2,3,4,5];

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username = "Kunj Maheshwari" post = "Software Developer" imageAdd = "https://avatars.githubusercontent.com/u/93459418?v=4" myObj = {newArr}/>
      <Card imageAdd='https://avatars.githubusercontent.com/u/93459418?v=4'/>
      <Card username ="Prakhar Sharma" post="Software Developer"/>
    </>
  )
}

export default App
