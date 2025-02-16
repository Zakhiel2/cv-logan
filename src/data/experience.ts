export interface Description {
    text: string;
    items?: string[];
  }
  
  export interface Experience {
    company: string;
    position: string;
    period: string;
    workMode: string;
    logo: string;
    website: string;
    linkedin: string;
    description: Description[];
    skills: string[];
    technologies: {
      name: string;
      icon: string;
      url: string;
    }[];
  }
  
  export const experiences: Experience[] = [{
    company: 'Watsoft',
    position: 'IT Support & Infrastructure Manager',
    period: '2024 - Present',
    workMode: 'Hybrid',
    logo: './images/company/watsoft.png',
    website: 'https://www.watsoft.com/',
    linkedin: 'https://www.linkedin.com/company/watsoft',
    description: [
      {text: 'Team and Project Management:', items: [
        'Leading a technical support, infrastructure, and pre-sales team, with responsibilities including KPI design and monitoring, process optimization, resource planning, and ensuring customer satisfaction.',
        'Managing the company\'s internal network, participating in infrastructure projects, maintaining and renewing IT assets, securing data, and planning proactive and corrective interventions.'
      ]},
      {text: 'Technical Support and Client Services:', items: [
        'Providing comprehensive pre-sales and post-sales technical support, focusing on incident resolution, collaboration with international software vendors, and delivering technical demonstrations of cataloged products.',
        'Overseeing internal and external training programs, conducting needs analysis, organizing Qualiopi-certified training sessions, and managing consulting services.'
      ]},
      {text: 'Communication and Representation:', items: [
        'Acting as the company\'s representative through hosting webinars, creating content for social media, and attending professional events to build brand presence and foster industry connections.'
      ]}
    ],
    skills: ['Leadership', 'Technical Expertise', 'Process Improvement', 'Project Coordination', 'Strategic Planning'],
    technologies: [
      {name: 'React', icon: 'https://reactjs.org/favicon.ico', url: 'https://reactjs.org'},
      {name: 'TypeScript', icon: 'https://www.typescriptlang.org/favicon-32x32.png', url: 'https://www.typescriptlang.org'},
      {name: 'Azure', icon: 'https://azure.microsoft.com/favicon.ico', url: 'https://azure.microsoft.com'},
      {name: 'Node.js', icon: 'https://nodejs.org/static/images/favicons/favicon.ico', url: 'https://nodejs.org'}
    ]
  }, {
    company: 'IPM France',
    position: 'Software & Hardware Support',
    period: '2021 - 2024',
    workMode: 'Hybrid',
    logo: './images/company/ipmfrance.png',
    website: 'https://www.ipmfrance.com/',
    linkedin: 'https://www.linkedin.com/company/ipm-france',
    description: [
      {text: 'Technical & Client Support:', items: [
        'Provided projects-based support for key accounts.',
        'Managed the fleet of kiosks and payment terminals.',
        'Trained clients remotely or on-site (technical or end-users).',
        'Handled customer and provider disputes, defined resolution plans.',
        'Assisted after-sales services.'
      ]},
      {text: 'Operations & Process Improvement:', items: [
        'Organized partner interventions logistically.',
        'Wrote and updated maintenance procedures.',
        'Improved GLPI ticketing system tool according to needs.',
        'Substituted quality management ISO 9001 standard.'
      ]}
    ],
    skills: ['Communication', 'Problem-solving', 'Conflict resolution', 'Adaptability', 'Teamwork'],
    technologies: [
      {name: 'Java', icon: 'https://dev.java/favicon.ico', url: 'https://dev.java/'},
      {name: 'AWS', icon: 'https://aws.amazon.com/favicon.ico', url: 'https://aws.amazon.com'},
      {name: 'Spring Boot', icon: 'https://spring.io/favicon.ico', url: 'https://spring.io'},
      {name: 'Docker', icon: 'https://www.docker.com/favicon.ico', url: 'https://www.docker.com'}
    ]
  }, {
    company: 'ProGmag',
    position: 'L2+ Software Support',
    period: '2019 - 2021',
    workMode: 'Hybrid',
    logo: './images/company/progmag.png',
    website: 'https://www.progmag.com',
    linkedin: 'https://www.linkedin.com/company/progmag',
    description: [
      {text: 'Key Responsibilities:', items: [
        'Resolved and capitalized on technical issues to ensure smooth operations and continuous improvement.',
        'Installed and updated software and hardware, ensuring compatibility and optimal performance.',
        'Trained clients remotely or on-site, catering to both technical and end-users\' needs.',
        'Handled complex and urgent requests, such as blocked stores, with efficiency and professionalism.',
        'Managed non-contractual services, including database cleaning and script execution.',
        'Maintained, created, and enhanced internal tools to support business processes.'
      ]},
      {text: 'Leadership Responsibilities (In the absence of the manager):', items: [
        'Led the support team of 15 people across two sites, ensuring seamless coordination and productivity.',
        'Oversaw KPIs, customer satisfaction, and process compliance to uphold service standards.'
      ]}
    ],
    skills: ['Technical Troubleshooting', 'Customer Relations', 'Issues Resolution', 'Process Optimization', 'Empathy'],
    technologies: [
      {name: 'Swift', icon: 'https://swift.org/favicon.ico', url: 'https://swift.org'},
      {name: 'SwiftUI', icon: 'https://developer.apple.com/favicon.ico', url: 'https://developer.apple.com/xcode/swiftui/'},
      {name: 'Xcode', icon: 'https://developer.apple.com/favicon.ico', url: 'https://developer.apple.com/xcode/'},
      {name: 'Core Data', icon: 'https://developer.apple.com/favicon.ico', url: 'https://developer.apple.com/documentation/coredata/'}
    ]
  }];