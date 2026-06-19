import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'format-pc',
    title: 'Formatação de computadores',
    description: 'Instalação completa do sistema operacional (Windows/Linux), drivers atualizados, pacotes essenciais e otimização para melhor desempenho.',
    icon: 'MonitorDot',
  },
  {
    id: 'laptop-maintenance',
    title: 'Manutenção de notebooks',
    description: 'Reparo de carcaças, dobradiças, troca de telas, teclados, baterias, conectores de carga (Jack) e reparo de placa-mãe.',
    icon: 'Laptop',
  },
  {
    id: 'pc-gaming-build',
    title: 'Montagem de PC gamer',
    description: 'Montagem personalizada de computadores gamer ou profissionais com excelente cable management, testes de estresse e performance.',
    icon: 'Cpu',
  },
  {
    id: 'printer-install',
    title: 'Instalação de impressoras',
    description: 'Configuração completa de impressoras locais ou em rede, instalação de drivers oficiais e testes de qualidade de impressão.',
    icon: 'Printer',
  },
  {
    id: 'network-config',
    title: 'Configuração de redes',
    description: 'Instalação e configuração de roteadores, repetidores de sinal, cabeamento estruturado e otimização do sinal Wi-Fi em sua residência ou empresa.',
    icon: 'Wifi',
  },
  {
    id: 'software-install',
    title: 'Instalação de programas',
    description: 'Instalação segura de softwares como Pacote Office, antivírus, navegadores, ferramentas de edição de imagem/vídeo e utilitários.',
    icon: 'AppWindow',
  },
  {
    id: 'internal-cleaning',
    title: 'Limpeza interna',
    description: 'Limpeza completa com remoção de poeira dos componentes, desobstrução de coolers e substituição da pasta térmica por composto de alta performance.',
    icon: 'Sparkles',
  },
  {
    id: 'file-backup',
    title: 'Backup de arquivos',
    description: 'Cópia de segurança de seus arquivos importantes de forma segura antes de manutenções ou migrações de disco, salvando em HDs externos ou na nuvem.',
    icon: 'Save',
  },
  {
    id: 'part-upgrade',
    title: 'Upgrade de peças',
    description: 'Substituição de HDs antigos por SSDs de alta velocidade, expansão de memória RAM e instalação de novas placas de vídeo e processadores.',
    icon: 'ChevronsUp',
  },
  {
    id: 'tech-support',
    title: 'Suporte técnico',
    description: 'Suporte remoto ou presencial para solução de problemas diversos, remoção de vírus/malwares e consultoria em TI.',
    icon: 'Wrench',
  },
];
