import React from "react";

export default function Home() {
  return (
    <>
      {/* ----HOME---- */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm John Doe 👋</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          A passionate web developer who loves building modern web applications with React,
          Node.js, and everything in between.
        </p>
      </section>

      {/* ----EXPERIENCE---- */}
      <section id="experience" className="min-h-screen p-8 pt-20">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-xl font-bold">Frontend Developer @ TechCorp</h3>
            <p className="text-gray-600">Jan 2023 – Present</p>
            <p className="text-gray-700">
              Building responsive dashboards and user interfaces using React and TailwindCSS.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-bold">Intern @ StartupX</h3>
            <p className="text-gray-600">Jun 2022 – Dec 2022</p>
            <p className="text-gray-700">
              Worked on backend APIs with Node.js and MongoDB, improving query performance by 30%.
            </p>
          </li>
        </ul>
      </section>

      {/* ----PROJECTS---- */}
      <section id="projects" className="min-h-screen p-8 pt-20">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-xl shadow-md">
            <h3 className="text-xl font-bold">Portfolio Website</h3>
            <p className="text-gray-700">
              A personal portfolio built with Next.js, Tailwind, and Framer Motion for smooth animations.
            </p>
          </div>
          <div className="p-4 border rounded-xl shadow-md">
            <h3 className="text-xl font-bold">Task Manager App</h3>
            <p className="text-gray-700">
              A full-stack app with authentication, real-time updates, and drag-and-drop task boards.
            </p>
          </div>
          <div className="p-4 border rounded-xl shadow-md">
            <h3 className="text-xl font-bold">Weather Dashboard</h3>
            <p className="text-gray-700">
              Displays real-time weather data using OpenWeather API, styled with Tailwind.
            </p>
          </div>
        </div>
      </section>

      {/* ----CONTACT---- */}
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p className="text-gray-700 mb-4">Interested in working together? Reach out via email!</p>
        <a
          href="mailto:john.doe@example.com"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Say Hello 👋
        </a>
      </section>
    </>
  );
}

