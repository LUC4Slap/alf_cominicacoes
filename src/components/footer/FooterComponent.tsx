import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h5>Endereço</h5>
            <ul className="list-unstyled">
              <li>
                <p>Rua Carajás, 76 - Bairro Jardim Leblon</p>
              </li>
              <li>
                <Link
                  href="https://www.google.com/maps/place/R.+Caraj%C3%A1s,+76+-+Jardim+Leblon,+Campo+Grande+-+MS,+79092-070/@-20.4965275,-54.6536486,17z/data=!3m1!4b1!4m6!3m5!1s0x9486e5d4fdbe3c3f:0xbc6661b8a3cd35ad!8m2!3d-20.4965275!4d-54.6510737!16s%2Fg%2F11wb1t46rd?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white">
                  Ver no Google Maps
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <p>&copy; 2025 ALF Comunicações - Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
