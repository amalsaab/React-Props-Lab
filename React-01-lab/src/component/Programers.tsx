

const Programers = (props:{Name:string, Languages:string, Experience:number, Company:string}) => {
  return (
    <div className='Programer'>
        <div className= {props.Company === "Tuwaiq Academy"?"card COLOR":"card"}>
            <p>Name: {props.Name}</p>
            <p>Languages: {props.Languages}</p>
            <p>Number of experience: {props.Experience}</p>
            <p>Company: {props.Company}</p>
        </div>
    </div>
  )
}

export default Programers
