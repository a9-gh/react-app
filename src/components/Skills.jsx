function Skills() {
  const skills = ["JavaScript", "React", "HTML", "CSS"]

  return (
    <section>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}
export default Skills
