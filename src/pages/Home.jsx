import { Link } from 'react-router-dom'

export default function Home() {
  const projects = [
    { name: 'Calculator', path: '/calculator', description: 'A simple calculator.' },
    // add more here later
  ]

  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map(p => (
          <li key={p.path}>
            <Link to={p.path}>{p.name}</Link> – {p.description}
          </li>
        ))}
      </ul>
    </div>
  )
}
