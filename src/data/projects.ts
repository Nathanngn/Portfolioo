export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  tasks: string[];
  procedureUrl: string;
  links?: {
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    title: "DHCP RELAY",
    description: "Configuration d'un relais DHCP pour la distribution d'adresses IP.",
    technologies: ["Linux", "DHCP"],
    image: "https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&q=80&w=1200",
    tasks: ["Configuration du relais DHCP"],
    procedureUrl: "/procedures/dhcp-relay.pdf"
  },
  {
    title: "CENTREON",
    description: "Mise en place d'un système de supervision.",
    technologies: ["Centreon", "Linux"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    tasks: ["Installation de Centreon"],
    procedureUrl: "/procedures/centreon.pdf"
  },
  {
    title: "EASYVISTA",
    description: "Gestion des tickets et des services IT.",
    technologies: ["EasyVista", "ITIL"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
    tasks: ["Configuration d'EasyVista"],
    procedureUrl: "/procedures/easyvista.pdf"
  },
  {
    title: "HAPROXY",
    description: "Configuration d'un équilibreur de charge.",
    technologies: ["HAProxy", "Linux"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
    tasks: ["Installation de HAProxy"],
    procedureUrl: "/procedures/haproxy.pdf"
  },
  {
    title: "TRUENAS",
    description: "Mise en place d'un système de stockage.",
    technologies: ["TrueNAS"],
    image: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?auto=format&fit=crop&q=80&w=1200",
    tasks: ["Configuration de TrueNAS"],
    procedureUrl: "/procedures/truenas.pdf"
  },
  {
    title: "WORDPRESS DOCKER",
    description: "Déploiement de WordPress avec Docker.",
    technologies: ["Docker", "WordPress"],
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1200",
    tasks: ["Configuration de Docker"],
    procedureUrl: "/procedures/wordpress-docker.pdf"
  },
  {
    title: "VAGRANT",
    description: "Création d'environnements de développement.",
    technologies: ["Vagrant", "VMware"],
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1200",
    tasks: ["Configuration de Vagrant"],
    procedureUrl: "/procedures/vagrant.pdf"
  },
  {
    title: "MON EPICERIE",
    description: "Application de gestion d'épicerie.",
    technologies: ["Gestion de Projet", "GANTT"],
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=1200",
    tasks: ["Développement de l'application"],
    procedureUrl: "/procedures/epicerie.pdf"
  },
  {
    title: "PROJET BERLINGO",
    description: "Gestion de flotte de véhicules.",
    technologies: [],
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1200",
    tasks: ["Installation du système"],
    procedureUrl: "/procedures/berlingo.pdf"
  },
  {
    title: "PORTFOLIO",
    description: "Portfolio personnel.",
    technologies: ["React"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    tasks: ["Création du portfolio"],
    procedureUrl: "/procedures/portfolio.pdf"
  },
  {
    title: "ZABBIX",
    description: "Mise en place d'une solution de monitoring réseau complète.",
    technologies: ["Zabbix", "Linux", "MySQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    tasks: [
      "Installation du serveur Zabbix",
      "Configuration des agents",
      "Mise en place des alertes",
      "Création de tableaux de bord personnalisés"
    ],
    procedureUrl: "/procedures/zabbix.pdf"
  },
  {
    title: "PROXMOX",
    description: "Déploiement d'une infrastructure de virtualisation haute disponibilité.",
    technologies: ["Proxmox", "KVM", "Linux"],
    image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80&w=1200",
    tasks: [
      "Installation du cluster Proxmox",
      "Configuration de la haute disponibilité",
      "Migration de machines virtuelles",
      "Optimisation des performances"
    ],
    procedureUrl: "/procedures/proxmox.pdf"
  }
];