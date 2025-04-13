export interface Certification {
  title: string;
  issuer: string;
  date: string;
  logo: string;
  pdfUrl: string;
}

export const certifications: Certification[] = [
  {
    title: "MOOC",
    issuer: "Cisco",
    date: "2024",
    logo: "https://cdn.edflex.com/media/cache/conceptor_200x100/conceptor/logo/0443a358139b302689f5aaf160d9d24052463e5d.png",
    pdfUrl: "/certifications/cisco-mooc.pdf"
  },
  {
    title: "Pix",
    issuer: "Pix",
    date: "2024",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Pix_logo.svg",
    pdfUrl: "/certifications/pix-certification.pdf"
  },
  
];