
import './App.css'
import Companies from './component/Companies'

function App() {


  return (
    <>
    <Companies Numbers={10423} Year="1978" Services="Oil-Gas" price={1000}
              Name1="Fahad" Languages1="JS - TS - C#" Experience1={2} Company="Aramco"
              Name2="Walled" Languages2="JS - C++" Experience2={4} 
              Name3="Sarah" Languages3="JS" Experience3={3} 
    />
    <Companies Numbers={202} Year="2019" Services="Bootcamps" price={0}
              Name1="Abdullah" Languages1="JS - TS - Python" Experience1={1} Company="Tuwaiq Academy"
              Name2="Maan" Languages2="JS - Java" Experience2={2} 
              Name3="Tarik" Languages3="JS - C++" Experience3={1} 
    />
    <Companies Numbers={3029} Year="2018" Services="Cloud-Serveces" price={10}
              Name1="Rayan" Languages1="JS - C++" Experience1={2} Company="AWS Cloud"
              Name2="Saad" Languages2="JS - python - C++" Experience2={5} 
              Name3="Nabeel" Languages3="JS - Java - C#" Experience3={2} 
    />
      {/* <Companies 
        Company={{Name="aaaaaa" Services={{}}}} 
      /> */}

    </>
  )
}

export default App
