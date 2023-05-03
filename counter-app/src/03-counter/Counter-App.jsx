import { useState } from 'react'
import PropTypes from 'prop-types'

/* si la función no ocupa nada del componente, como el value, debería estar por fuera
así no le asigna un espacio en memoria cuando vuelva a renderizar el componente */
const handleAddExample = (event) => {
    console.log(event)
}

/* si necesito hacer un cambio en el estado, la función debe estar dentro del componente para decirle a
React que hubo un cambio y que necesito que redibuje esos cambios y se hace con un hook 
Cuando cambia el estado el componente se vuelve a ejecutar */
export const CounterApp = ({ value }) => {

    let [ counter, setCounter ] = useState(value)

    const handleAdd = () => {
        // setCounter(counter + 1);
        setCounter((c) => c + 1);
    }
    const handleRemove = () => { counter <= 0 ? counter = 0 : setCounter(counter - 1) };
    const handleReset = () => setCounter(value);

  return (
    <>
    <h1>CounterApp</h1>
    <h2> { counter } </h2>

{/* si solo es un argumento, se le pasa la referencia de la función */}
    {/* <button onClick={ handleAddExample }> +1 </button> */}
    <button onClick={ handleAdd }> + </button>
    <button onClick={ handleRemove }> - </button>
    <button onClick={ handleReset }> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
  }
