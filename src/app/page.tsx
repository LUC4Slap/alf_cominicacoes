import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';

import WhatsAppButton from '@/components/whatsappButton/WhatsAppButton';
import CarouselIMages from '@/components/carousel/CarouselIMages';
import HeaderComponent from '@/components/header/HeaderComponent';
// import Map from '@/components/map/Map';
import TrabalhosGrafica from '@/components/trabalhos/TrabalhosComponent';
import Footer from '@/components/footer/FooterComponent';

export default function Home() {
  return (
    <>
      <HeaderComponent />
      <div className="container-fluid">
        <div className="btn-contato">
          <WhatsAppButton />
        </div>

        <section className="bg-primary mt-3 p-3 rounded-3">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p style={{ fontSize: '20px' }} className="text-white">
              Amelhor Impressão
            </p>
            <h1 className="text-white">ALF Comunicações</h1>
          </div>
        </section>

        <section className="mt-2" id="home">
          <div className="bg-dark">
            <CarouselIMages />
          </div>
        </section>

        <section id="trabalhos" className="mt-3">
          <TrabalhosGrafica />
        </section>

        {/* <section className="mt-4 w-100" id="infos">
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <h4>Onde estamos!</h4>
          </div>
          <Map latitude={-20.531431} longitude={-54.6139699} />
        </section> */}
      </div>
      <Footer />
    </>
  );
}
