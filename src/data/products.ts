import type { Product, BuildPart } from '../types';

export const products: Product[] = [
  {
    id: 'prod-teclado-rgb',
    name: 'Teclado Mecânico RGB Switch Blue',
    category: 'Teclados',
    rating: 4.8,
    price: 199.90,
    oldPrice: 269.90,
    discount: 26,
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=600&auto=format&fit=crop',
    inStock: true,
    description: 'Teclado mecânico de alto desempenho com switches anti-ghosting táteis e iluminação RGB customizável com vários modos de luz.',
    isPromotion: true
  },
  {
    id: 'prod-mouse-gamer',
    name: 'Mouse Gamer 7200 DPI Ergonômico',
    category: 'Mouses',
    rating: 4.7,
    price: 89.90,
    oldPrice: 129.90,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=600&auto=format&fit=crop',
    inStock: true,
    description: 'Design ergonômico confortável com 7 botões programáveis, sensor óptico de até 7200 DPI e iluminação RGB discreta.',
    isPromotion: true
  },
  {
    id: 'prod-impressora',
    name: 'Impressora Multifuncional Tanque de Tinta',
    category: 'Impressoras',
    rating: 4.5,
    price: 699.90,
    oldPrice: 899.90,
    discount: 22,
    image: 'https://www.creativecopias.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/8/9/8962_ampliada.jpg',
    inStock: true,
    description: 'Economia incrível com tanque de tinta de alta capacidade, conexão Wi-Fi Direct e excelente qualidade de impressão e digitalização.',
    isFeatured: true
  },
  {
    id: 'prod-ssd-480',
    name: 'SSD 480GB SATA III 2.5"',
    category: 'SSD e HD',
    rating: 4.6,
    price: 189.90,
    oldPrice: 249.90,
    discount: 24,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=600&auto=format&fit=crop',
    inStock: true,
    description: 'Acelere as inicializações do sistema e carregamento de programas com velocidades de leitura de até 540MB/s.'
  },
  {
    id: 'prod-ram-8',
    name: 'Memória RAM 8GB DDR4 3200MHz',
    category: 'Memórias RAM',
    rating: 4.9,
    price: 139.90,
    oldPrice: 189.90,
    discount: 26,
    image: 'https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?q=80&w=600&auto=format&fit=crop',
    inStock: true,
    description: 'Mais velocidade e desempenho para seu PC com dissipador térmico em alumínio anodizado de perfil baixo.'
  },
  {
    id: 'prod-fonte-500',
    name: 'Fonte 500W 80 Plus Bronze',
    category: 'Fontes',
    rating: 4.4,
    price: 219.90,
    oldPrice: 289.90,
    discount: 24,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=600&auto=format&fit=crop',
    inStock: true,
    description: 'Alimentação estável e segura para a sua configuração com ventoinha silenciosa de 120mm e PFC Ativo.'
  },
  {
    id: 'prod-monitor-24',
    name: 'Monitor LED 24" Full HD 75Hz',
    category: 'Monitores',
    rating: 4.6,
    price: 599.90,
    oldPrice: 799.90,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600&auto=format&fit=crop',
    inStock: true,
    description: 'Imagens nítidas e cores vibrantes com painel IPS de bordas finas, tempo de resposta de 5ms e tecnologias Flicker-Free.'
  },
  {
    id: 'prod-headset',
    name: 'Headset Gamer 7.1 Som Surround',
    category: 'Headsets',
    rating: 4.7,
    price: 159.90,
    oldPrice: 219.90,
    discount: 27,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=600&auto=format&fit=crop',
    inStock: true,
    description: 'Alto-falantes de 50mm para áudio posicional de alta fidelidade, almofadas macias de couro sintético e microfone flexível.',
    isPromotion: true
  },
  {
    id: 'prod-gpu-rtx3060',
    name: 'Placa de Vídeo RTX 3060 12GB',
    category: 'Placas de vídeo',
    rating: 4.9,
    price: 1799.90,
    oldPrice: 2299.90,
    discount: 21,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=600&auto=format&fit=crop',
    inStock: true,
    description: 'Jogue os lançamentos com ray tracing em tempo real e inteligência artificial do DLSS. 12GB de memória GDDR6.',
    isFeatured: true
  },
  {
    id: 'prod-roteador-wifi',
    name: 'Roteador Wi-Fi 6 EasyMesh AC1200',
    category: 'Redes',
    rating: 4.5,
    price: 249.90,
    oldPrice: 329.90,
    discount: 24,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_652589-MLA95687391502_102025-F.webp',
    inStock: true,
    description: 'Velocidade e estabilidade para conectar dezenas de aparelhos simultaneamente com tecnologia Wi-Fi 6 de última geração.'
  },
  // Additional Products to enrich categories
  {
    id: 'prod-ryzen5',
    name: 'Processador AMD Ryzen 5 5600 3.5GHz',
    category: 'Processadores',
    rating: 4.8,
    price: 799.90,
    oldPrice: 999.90,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=600&auto=format&fit=crop', // generic tech representation
    inStock: true,
    description: 'Processador de 6 núcleos e 12 threads ideal para jogos pesados e multitarefa.'
  },
  {
    id: 'prod-rtx4070-promo',
    name: 'Placa de Vídeo RTX 4070 12GB GDDR6X',
    category: 'Placas de vídeo',
    rating: 4.9,
    price: 3899.90,
    oldPrice: 4799.90,
    discount: 18,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=600&auto=format&fit=crop',
    inStock: true,
    description: 'Desenvolvido com a arquitetura ultraeficiente NVIDIA Ada Lovelace. Oferta especial do dia.',
    isPromotion: true,
    isFeatured: true // Designated as "Oferta do Dia"
  },
  {
    id: 'prod-cabo-hdmi',
    name: 'Cabo HDMI 2.1 Ultra High Speed 2m',
    category: 'Cabos e adaptadores',
    rating: 4.6,
    price: 39.90,
    oldPrice: 59.90,
    discount: 33,
    image: 'https://images.unsplash.com/photo-1557063673-0493e05d49ef?q=80&w=600&auto=format&fit=crop',
    inStock: true,
    description: 'Suporte a resoluções de até 8K @ 60Hz ou 4K @ 120Hz com canal ethernet e eARC.'
  },
  {
    id: 'prod-gabinete-gamer',
    name: 'Gabinete Gamer Mid Tower Lateral Vidro',
    category: 'Acessórios',
    rating: 4.7,
    price: 269.90,
    oldPrice: 349.90,
    discount: 22,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=600&auto=format&fit=crop',
    inStock: false,
    description: 'Painel frontal em mesh para melhor fluxo de ar, lateral em vidro temperado de 4mm e suporte para até 6 coolers.'
  }
];

export const pcParts: Record<string, BuildPart[]> = {
  Processador: [
    { id: 'part-cpu-i3', name: 'Intel Core i3 12100F (4 Cores, 4.3GHz)', price: 499.90 },
    { id: 'part-cpu-r5', name: 'AMD Ryzen 5 5600 (6 Cores, 4.4GHz)', price: 799.90 },
    { id: 'part-cpu-i5', name: 'Intel Core i5 12400F (6 Cores, 4.4GHz)', price: 689.90 },
    { id: 'part-cpu-i7', name: 'Intel Core i7 13700K (16 Cores, 5.4GHz)', price: 2299.90 },
  ],
  'Placa-mãe': [
    { id: 'part-mb-h610', name: 'Placa-Mãe ASUS H610M-K DDR4', price: 479.90 },
    { id: 'part-mb-b550', name: 'Placa-Mãe Gigabyte B550M Aorus Elite', price: 749.90 },
    { id: 'part-mb-b660', name: 'Placa-Mãe ASUS Prime B660M-A DDR4', price: 699.90 },
    { id: 'part-mb-z790', name: 'Placa-Mãe ASUS ROG Strix Z790-F Gaming Wi-Fi', price: 2499.90 },
  ],
  'Memória RAM': [
    { id: 'part-ram-8g', name: '8GB Kingston Fury Beast 3200MHz DDR4', price: 139.90 },
    { id: 'part-ram-16g', name: '16GB (2x8GB) Corsair Vengeance Pro 3200MHz DDR4', price: 349.90 },
    { id: 'part-ram-32g', name: '32GB (2x16GB) G.Skill Trident Z5 6000MHz DDR5', price: 949.90 },
  ],
  SSD: [
    { id: 'part-ssd-240', name: 'SSD 240GB Kingston A400 SATA III', price: 129.90 },
    { id: 'part-ssd-500', name: 'SSD 500GB Kingston NV2 NVMe M.2', price: 229.90 },
    { id: 'part-ssd-1tb', name: 'SSD 1TB Crucial P3 Plus NVMe M.2 (5000MB/s)', price: 449.90 },
    { id: 'part-ssd-2tb', name: 'SSD 2TB Kingston KC3000 NVMe M.2 (7000MB/s)', price: 999.90 },
  ],
  Fonte: [
    { id: 'part-psu-500', name: 'Fonte 500W Mancer Thunder 80 Plus Bronze', price: 219.90 },
    { id: 'part-psu-650', name: 'Fonte 650W MSI Mag A650BN 80 Plus Bronze', price: 299.90 },
    { id: 'part-psu-750', name: 'Fonte 750W Corsair CX750M Semi-Modular 80 Plus Bronze', price: 549.90 },
    { id: 'part-psu-850', name: 'Fonte 850W XPG Core Reactor Modular 80 Plus Gold', price: 799.90 },
  ],
  Gabinete: [
    { id: 'part-cab-basic', name: 'Gabinete Básico Mid Tower com Fans', price: 159.90 },
    { id: 'part-cab-gamer', name: 'Gabinete Gamer Pichau Apus RGB Vidro Temperado', price: 249.90 },
    { id: 'part-cab-premium', name: 'Gabinete LIAN LI O11 Dynamic EVO Glass', price: 1199.90 },
  ],
  'Placa de vídeo': [
    { id: 'part-gpu-none', name: 'Sem Placa de Vídeo (Vídeo Integrado)', price: 0.00 },
    { id: 'part-gpu-rtx3050', name: 'NVIDIA GeForce RTX 3050 8GB GDDR6', price: 1199.90 },
    { id: 'part-gpu-rtx3060', name: 'NVIDIA GeForce RTX 3060 12GB GDDR6', price: 1799.90 },
    { id: 'part-gpu-rtx4060', name: 'NVIDIA GeForce RTX 4060 Ti 8GB GDDR6', price: 2399.90 },
    { id: 'part-gpu-rtx4070', name: 'NVIDIA GeForce RTX 4070 Super 12GB GDDR6X', price: 4599.90 },
  ],
  Monitor: [
    { id: 'part-mon-none', name: 'Sem Monitor', price: 0.00 },
    { id: 'part-mon-20', name: 'Monitor LED 20" HDMI 60Hz Office', price: 399.90 },
    { id: 'part-mon-24', name: 'Monitor LED 24" LG 75Hz Full HD IPS', price: 599.90 },
    { id: 'part-mon-27', name: 'Monitor Gamer 27" AOC Hero 144Hz IPS 1ms', price: 999.90 },
    { id: 'part-mon-34', name: 'Monitor Ultrawide Gamer 34" Gigabyte 144Hz Curvo', price: 2799.90 },
  ]
};

export const testimonials = [
  {
    id: 'test-1',
    name: 'Carlos Oliveira',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    comment: 'Comprei meu PC Gamer na Reinaldo Informática. Atendimento excelente, montagem limpa e suporte impecável! Recomendo a todos.',
    role: 'Gamer'
  },
  {
    id: 'test-2',
    name: 'Juliana Costa',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    comment: 'Precisei de formatação rápida e backup no meu notebook de trabalho. Serviço excelente, pegaram e entregaram no mesmo dia!',
    role: 'Arquiteta'
  },
  {
    id: 'test-3',
    name: 'Renato Silva',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    comment: 'Preços super competitivos. Comprei teclados, mouses e impressora para a minha imobiliária. O suporte para configurar a rede foi perfeito.',
    role: 'Empresário'
  },
  {
    id: 'test-4',
    name: 'Mariana Souza',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
    rating: 4,
    comment: 'Muito satisfeita com a minha nova placa de vídeo. Recebi todas as instruções de qual fonte seria compatível antes de comprar.',
    role: 'Designer Gráfica'
  }
];
