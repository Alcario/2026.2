function App() {
  const cursos = [
    {
      id: 1,
      nombre: "HTML y CSS",
      profesor: "Juancito",
      duracion: "2 semestres",
      disponibilidad: true
    },
    {
      id: 2,
      nombre: "JavaScript",
      profesor: "Lola",
      duracion: "3 semestres",
      disponibilidad: true
    },
    {
      id: 3,
      nombre: "React",
      profesor: "Luciana",
      duracion: "3 semestres",
      disponibilidad: false
    },
  ]

  return(
    <div>
      <h1>Catálogo de cursos</h1>
      <p>Aprendé programación con ISSD</p>

      <h2>Nuestros cursos</h2>

      {cursos.map((curso) => (
        <div key={curso.id}>
          <h3>Curso: {curso.nombre}</h3>
          <p>Profesor: {curso.profesor}</p>
          <p>Duración: {curso.duracion}</p>
          {curso.disponibilidad ? (
            <p>Inscripciones abiertas</p>
            ) : (
              <p>Inscripciones cerradas</p>
            )}
          <hr />
        </div>
      ))}
    </div>
  )  
}

export default App
