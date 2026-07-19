export default function Navigation() {
  const navItems = ['Início', 'Sobre', 'Notícias', 'Eventos', 'Contato'];

  return (
    <nav className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:opacity-80 transition">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
