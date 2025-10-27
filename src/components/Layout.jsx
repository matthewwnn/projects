import React from "react";
import { Link, NavLink } from "react-router-dom";

const SITE = {
  name: "Matthew Nader",
  github: "https://github.com/matthewwnn",
  linkedin: "https://www.linkedin.com/in/matthewwnader/",
};

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            {/* optional logo in /public/logo.png */}
            {/* <img src="/logo.png" alt={SITE.name} className="h-8 w-8 rounded" /> */}
            <span className="font-semibold text-xl tracking-tight">{SITE.name}</span>
          </Link>
          <nav className="ml-auto flex items-center gap-1">
            <a
              href="https://matthewn.me"
              className="text-gray-700 hover:text-blue-600 px-3 py-2"
            >
              Home
            </a>
            <a
              href="https://matthewn.me/research"
              className="text-gray-700 hover:text-blue-600 px-3 py-2"
            >
              Research
            </a>
            <a
              href="https://matthewn.me/resume"
              className="text-gray-700 hover:text-blue-600 px-3 py-2"
            >
              Resume
            </a>
            <a
              href="https://matthewn.me/projects"
              className="text-gray-700 hover:text-blue-600 px-3 py-2"
            >
              Projects
            </a>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
      <footer className="border-t mt-16">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} {SITE.name}</p>
          <div className="flex items-center gap-3">
            <a href={SITE.github} className="hover:underline" target="_blank" rel="noreferrer">GitHub</a>
            <a href={SITE.linkedin} className="hover:underline" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Nav({ to, label }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `px-3 py-2 rounded-xl text-sm inline-flex items-center transition ${
          isActive ? "bg-gray-900 text-white" : "hover:bg-gray-100"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
