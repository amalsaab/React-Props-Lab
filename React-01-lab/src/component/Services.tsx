

const Services = (props: any) => {
  return (
    <div className='Service-content'>
        <p>Worker Number: {props.Numbers}</p>
        <p>Year of founded: {props.Year}</p>
        <p>Services: {props.Services}</p>
        <p>Work price: {props.price}$</p>
    </div>
  )
}

export default Services