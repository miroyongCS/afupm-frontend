export default function FeaturedSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Destaque</h2>
        <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Junte-se à Nossa Comunidade</h3>
          <p className="text-lg mb-8">Seja parte da maior associação de futebol da universidade</p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Participar Agora
          </button>
        </div>
      </div>
    </section>
  );
}
