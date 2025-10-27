import { Link } from 'react-router-dom'

export default function Home() {
  const projects = [
    { name: 'Calculator', path: '/calculator', description: 'A simple calculator.' },
    // add more projects here later
  ]

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">My Projects</h1>

      <ul className="space-y-3">
        {projects.map((p) => (
          <li key={p.path}>
            <Link
              to={p.path}
              className="font-semibold underline text-blue-600 hover:text-blue-800"
            >
              {p.name}
            </Link>
            <span className="text-gray-700"> – {p.description}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
