interface Experience {
  title: string;
  description: string;
}

export const personalInfo = {
  name: 'Votre Nom',
  title: 'Étudiant en BTS SIO SISR',
  description: `Je suis actuellement en alternance, me spécialisant dans l'infrastructure et la sécurité des systèmes d'information. 
    Passionné par les nouvelles technologies, je développe mes compétences en administration système, réseaux et cybersécurité.`,
  experiences: [
    {
      title: 'Infrastructure & Réseaux',
      description: 'Conception et maintenance d\'infrastructures réseau, gestion de serveurs Windows/Linux, virtualisation.'
    },
    {
      title: 'Cybersécurité',
      description: 'Mise en place de solutions de sécurité, audit de systèmes, gestion des accès et des identités.'
    },
    {
      title: 'Administration Système',
      description: 'Configuration et maintenance de services IT, automatisation des tâches, support technique.'
    }
  ]
};