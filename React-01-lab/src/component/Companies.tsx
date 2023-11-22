
import Programers from './Programers'
import Services from './Services'


const Companies = (props:  {Numbers:number, Year:string, Services:string, price:number,
    Name1:string, Languages1:string, Experience1:number, Company:string,
    Name2:string, Languages2:string, Experience2:number,
    Name3:string, Languages3:string, Experience3:number }) => {
  return (
    <div className='Company'>
        <h1 >Company Name: {props.Company}</h1>
        <div className='Services'>
            <h2>Services:</h2>
            <div className='Service-container'>
                <Services Numbers={props.Numbers}  Year={props.Year} Services={props.Services} price={props.price} />
            </div>
        </div>
        <div className='Employers'>
            <h3>Employers:</h3>
            <div className='Programer-content'>
                <Programers Name={props.Name1} Languages={props.Languages1} Experience={props.Experience1} Company={props.Company} />
                <Programers Name={props.Name2} Languages={props.Languages2} Experience={props.Experience2} Company={props.Company} />
                <Programers Name={props.Name3} Languages={props.Languages3} Experience={props.Experience3} Company={props.Company} />
            </div>
        </div>
    </div>
  )
}

export default Companies