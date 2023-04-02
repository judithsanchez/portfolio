class Portfolio {
  constructor({
    firstName,
    lastName,
    jobTitle,
    github,
    linkedin,
    cv,
    email,
    skills,
    projects,
  }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.github = github;
    this.linkedin = linkedin;
    this.cv = cv;
    this.email = email;
    this.skills = skills;
    this.projects = projects;
  }

  addNewProject(title, url, description, skills) {
    const project = {
      title,
      url,
      description,
      skillsApplied: [],
    };

    skills.forEach((skill) => {
      project.skillsApplied.push(skill);
    });

    this.projects.push(project);
  }
}

const portfolioJudithSanchez = new Portfolio({
  firstName: 'Judith',
  lastName: 'Sánchez',
  jobTitle: 'Full Stack Developer',
  github: 'https://github.com/judithsanchez',
  linkedin: 'https://www.linkedin.com/in/judithvsanchezc/',
  cv: 'https://drive.google.com/file/d/1jc-jhRBAPc5I2kpMImai3Ggey7yi1-5e/view?usp=share_link',
  email: 'judithv.sanchezc@gmail.com',
  skills: [
    'Agile Development',
    'Angular',
    'Apache',
    'AWS',
    'Babel',
    'CSS',
    'Docker',
    'Express.js',
    'Firebase',
    'Git',
    'GitHub',
    'GraphQL',
    'HTML',
    'Jest',
    'JavaScript',
    'Kubernetes',
    'Linux',
    'Mocha',
    'MongoDB',
    'MySQL',
    'Nginx',
    'Node.js',
    'PostgreSQL',
    'React',
    'RESTful APIs',
    'Scrum',
    'UI/UX Design',
    'Vue',
    'Webpack',
  ],
  projects: [
    {
      title: 'Bocaditos de Español',
      url: 'www.github.com/judithsanchez/bocaditosespanol',
      description:
        'Free educational platform for Spanish teachers and students of all ages, based on learning with native content and fun games. Give it a try!',
      skillsApplied: [
        'JavaScript',
        'CSS',
        'HTML',
        'Figma',
        'Adobe Illustrator',
      ],
    },
    {
      title: 'HackerRank Challenges',
      url: 'www.github.com/judithsanchez/hackerrank-problem-solving',
      description:
        'A collection of my solutions for Hackerrank problem-solving challenges, aimed at improving coding and problem-solving skills.',
      skillsApplied: ['JavaScript'],
    },

  ],
});

export default portfolioJudithSanchez;
