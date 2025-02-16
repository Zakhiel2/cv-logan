export interface Skill {
    name: string;
    icon: string;
    description: string;
  }
  
  export const softSkills: Skill[] = [
    { 
      name: 'Adaptability',
      icon: '🔄',
      description: 'Quick to adapt to new situations and technologies'
    },
    { 
      name: 'Leadership',
      icon: '👑',
      description: 'Guiding teams towards successful project completion'
    },
    { 
      name: 'Problem Solving',
      icon: '🧩',
      description: 'Analytical approach to complex challenges'
    },
    { 
      name: 'Communication',
      icon: '💬',
      description: 'Clear and effective team collaboration'
    },
    { 
      name: 'Organization',
      icon: '📋',
      description: 'Structured approach to tasks and projects'
    },
    { 
      name: 'Reliability',
      icon: '🎯',
      description: 'Consistent delivery of high-quality work'
    }
  ];