export interface Skill {
    name: string;
    percentage: number;
    icon: string;
  }
  
  export const hardSkills: Skill[] = [
    { name: 'IT Maintenance', percentage: 100, icon: '🖥️' },
    { name: 'Project Management', percentage: 90, icon: '📊' },
    { name: 'Hardware', percentage: 80, icon: '⚙️' },
    { name: 'Network & Security', percentage: 70, icon: '🔒' }
  ];