export interface Language {
    name: string;
    level: number;
    maxLevel: number;
  }
  
  export const languages: Language[] = [
    {
      name: 'French',
      level: 10,
      maxLevel: 10
    },
    {
      name: 'English',
      level: 8,
      maxLevel: 10
    }
  ];