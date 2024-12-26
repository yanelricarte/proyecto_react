import "./Seccion.css";
import hogwarts from '../../assets/img/hogwarts.jpg'
import Boton from "../boton/Boton";
import ListaCasas from "../casas/ListaCasas";

const handlerClicBoton = () => {
  alert('Hiciste click en el botón')
}

function Seccion() {
  return (
    <section className="seccion">
      <h2> Información sobre Hogwarts</h2>
      <p>
        La escuela de magia y hechiceria de Hogwarts es un lugar mágico donde
        los jóvenes
      </p>
      <div className="contenedor-img">
      <img src={hogwarts} alt="" /></div>
      <Boton texto="Leer más"/>
      <Boton color="pink" texto="Comprar" onClick= {handlerClicBoton} />

    </section>
  );
}

export default Seccion;
