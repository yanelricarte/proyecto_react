function Casa(props){
  return(
    <section className="seccion">
      <h2> {props.nombre} </h2>
      <p> {props.valores} </p>
      <p> {props.animal} </p>
      <p> {props.color} </p>
      <p> {props.director} </p>
      <p> {props.ubicacion} </p>
      <div className="casa-imagen"> 
      <img src={props.imagen} alt={props.nombre} /> </div>
    </section>
  )
}

export default Casa;