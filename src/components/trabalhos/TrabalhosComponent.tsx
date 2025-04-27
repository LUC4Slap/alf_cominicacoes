'use client';

import Image from 'next/image';

interface Trabalho {
  id: number;
  titulo: string;
  descricao: string;
  imagemUrl: string;
}

const trabalhosFeitos: Trabalho[] = [
  {
    id: 1,
    titulo: 'Cartão de Visita',
    descricao: 'Design moderno para cartão de visita profissional.',
    imagemUrl: 'https://picsum.photos/400/300',
  },
  {
    id: 2,
    titulo: 'Banner Promocional',
    descricao: 'Banner grande para divulgação de eventos.',
    imagemUrl: 'https://picsum.photos/400/300',
  },
  {
    id: 3,
    titulo: 'Panfleto Informativo',
    descricao: 'Panfleto com informações de produtos e serviços.',
    imagemUrl: 'https://picsum.photos/400/300',
  },
  // Pode adicionar mais trabalhos
];

export default function TrabalhosGrafica() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Nossos Trabalhos</h2>
      <div className="row g-4">
        {trabalhosFeitos.map((trabalho) => (
          <div className="col-12 col-sm-6 col-lg-4" key={trabalho.id}>
            <div className="card h-100 shadow-sm">
              <Image
                src={trabalho.imagemUrl}
                className="card-img-top"
                alt={trabalho.titulo}
                width={400}
                height={300}
                style={{ objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{trabalho.titulo}</h5>
                <p className="card-text">{trabalho.descricao}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
