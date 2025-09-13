function Projects() {
  const hasProjects = true
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
