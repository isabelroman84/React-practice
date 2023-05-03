import PropTypes from 'prop-types'; // definir el tipo de las props

const newMessage = {
  name: 'Miguel',
  age:18
}

const saludar = () => `Hola ${newMessage.name}`

// en caso de requerir pasar un objeto, recurrimos a JSON
export const FirstApp = ( { title, subtitle, name } ) => {
  return (
    <>
    {/* <code> {JSON.stringify(newMessage)} </code> */} 
    <h1> {saludar()} </h1>
    <h1> {title} </h1>
    {/* <h1> {props.title} </h1> */}
    <h2> {subtitle} </h2>
    <h3> {name} </h3>
    <p>Bienvenidos a la App</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired // isRequiered lo hace obligatorio, si es opcional no marca error
}

/* con las defaultProps puedo añadir props con las que eventualmente podría trabajar y entran primero
que las propTypes */
FirstApp.defaultProps = {
  name: 'James',
  subtitle: 'No hay subtítulo',
  title: 'No hay título',
}