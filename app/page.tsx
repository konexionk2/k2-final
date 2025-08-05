export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-white text-center p-6">
      <h1 className="text-4xl font-bold text-purple-800 mb-4">
        Bienvenido a Konexión K2
      </h1>
      <p className="text-lg text-gray-700 mb-6 max-w-xl">
        Tu plataforma de salud, impacto y riqueza. Únete a nuestra red, accede a productos naturales, gana recompensas y transforma tu vida.
      </p>
      <a
        href="#"
        className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded-lg transition"
      >
        Iniciar sesión
      </a>
      <p className="mt-10 text-sm text-gray-500">
        Plataforma en construcción. ¡Pronto grandes novedades!
      </p>
    </main>
  );
}
