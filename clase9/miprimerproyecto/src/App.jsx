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
      disponibilidad: true
    },
  ]

  return(
    <div>
      <h1>Catálogo de cursos</h1>
      <p>Aprendé programación con ISSD</p>

      <h2>Nuestros cursos</h2>

      <div>
        <h3>HTML y CSS</h3>
        <p>Profesor: Juancito</p>
        <p>Duración: 2 semestres</p>
        <p>Inscripciones abiertas</p>
      </div>

      <div>
        <h3>JavaScript</h3>
        <p>Profesor: Lola</p>
        <p>Duración: 3 semestres</p>
        <p>Inscripciones abiertas</p>
      </div>

      <div>
        <h3>React</h3>
        <p>Profesor: Luciana</p>
        <p>Duración: 3 semestres</p>
        <p>Inscripciones abiertas</p>
      </div>
      
    </div>
  )  
}

export default App
