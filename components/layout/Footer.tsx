export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">AFUPM</div>

          <p>
            Associação das Famílias para a Unificação e Paz Mundial.
          </p>
        </div>

        <div>
          <h3>Navegação</h3>

          <a href="/sobre">Sobre</a>
          <a href="/anuncios">Anúncios</a>
          <a href="/eventos">Eventos</a>
          <a href="/sedes">Sedes</a>
        </div>

        <div>
          <h3>Contato</h3>

          <p>
            Rua Cardeal Arcoverde, 928
            <br />
            Pinheiros, São Paulo - Brasil
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} AFUPM. Todos os direitos reservados.
      </div>
    </footer>
  );
}