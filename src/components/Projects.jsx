function Projects() {
  const hasProjects = false  // change to true later

  return (
    <section>
      <h2>Projects</h2>
      {hasProjects ? (
        <p>Here are my projects...</p>
      ) : (
        <p>No projects yet. Coming soon!</p>
      )}
    </section>
  )
}
export default Projects
