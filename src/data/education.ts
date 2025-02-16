export interface Education {
    diploma: string;
    degree: string;
    period: string;
    url?: string;
  }
  
  export const education: Education[] = [
    {
      diploma: 'BTEC Higher Nationals',
      degree: 'Software Solutions and Applications',
      period: '2017',
      url: 'https://algoud-laffemas.ent.auvergnerhonealpes.fr/'
    },
    {
      diploma: 'BTEC Nationals',
      degree: 'Management Information Systems',
      period: '2014',
      url: 'https://www.lyceesacrecoeur.fr/'
    }
  ];