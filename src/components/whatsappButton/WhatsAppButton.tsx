import { NextPage } from 'next';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: NextPage = ({}) => {
  return (
    <a
      href="https://wa.me/5567999974001"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-success position-fixed d-flex align-items-center justify-content-center"
      style={{
        bottom: '20px',
        right: '20px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        zIndex: 1050,
      }}>
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
