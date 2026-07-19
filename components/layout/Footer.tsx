export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">AFUPM</h3>
            <p className="text-gray-400">Associação de Futebol da Universidade Portuguesa</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Sobre</a></li>
              <li><a href="#" className="hover:text-white">Eventos</a></li>
              <li><a href="#" className="hover:text-white">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <p className="text-gray-400">Conecte-se conosco</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} AFUPM. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
