export interface Certification {
    name: string;
    issuer: string;
    date: string;
    url?: string;
  }
  
  export const certifications: Certification[] = [
    {
      name: 'Google Project Management',
      issuer: 'Google Career Certificates',
      date: '2024',
      url: 'https://www.coursera.org/account/accomplishments/specialization/6PENOMVT1MLT'
    }
  ];