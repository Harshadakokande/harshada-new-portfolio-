
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-indigo-50 to-white">
      <h1 className="text-5xl font-bold">Harshada Kokande</h1>
      <p className="mt-4 text-gray-600 max-w-xl">
        Final-year Computer Science (AI/ML) student who loves building meaningful,
        real-world tech solutions with clean design and strong logic.
      </p>
      <a href="#work">
        <button className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition">
          View My Work
        </button>
      </a>
    </section>
  );
};
export default Hero;
