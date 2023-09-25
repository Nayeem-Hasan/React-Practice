
import Hero from './component/Hero';

const App = () => {

  const Itemobj={
    name:'Mehedi Hasan',
    age:33,
    city:'Dhaka'
  }
  return (

    <>
     <div>
      <Hero time={new Date().getTime()} title="Learn React" item={Itemobj}/>
     </div>
    </>

  )

}

export default App
