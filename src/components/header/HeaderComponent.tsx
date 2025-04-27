import { NextPage } from 'next'
import Image from 'next/image';
import logo from '../../../public/assets/image.png';


const HeaderComponent: NextPage = ({}) => {
  return (
    <nav className="navbar bg-primary">
      <div className="container">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <div className="logo">
            <a className="navbar-brand" href="#">
              <Image
                src={logo}
                alt="ALF Comunicações"
                width={100}
                height={60}
              />
            </a>
          </div>
          <div className="navbar-nav d-flex flex-row gap-3">
            <a
              className="nav-link active text-white"
              aria-current="page"
              href="#contatos">
              Home
            </a>
            <a className="nav-link text-white" href="#">
              Sobre
            </a>
            <a className="nav-link text-white" href="#">
              Pricing
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderComponent
