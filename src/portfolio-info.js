class Portfolio {
  constructor({
    firstName,
    lastName,
    jobTitle,
    github,
    linkedin,
    cv,
    email,
    aboutMe,
    skills,
    projectsIntro,
    projects,
  }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.github = github;
    this.linkedin = linkedin;
    this.cv = cv;
    this.email = email;
    this.aboutMe = aboutMe;
    this.skills = skills;
    this.projectsIntro = projectsIntro;
    this.projects = projects;
  }

  addNewProject(title, url, description) {
    const project = {
      title,
      url,
      description,
      // skillsApplied: [...skills],
    };

    this.projects.push(project);
  }
}

const portfolioJudithSanchez = new Portfolio({
  firstName: 'Judith',
  lastName: 'Sánchez',
  jobTitle: 'Full Stack Developer',
  github: 'https://github.com/judithsanchez',
  linkedin: 'https://www.linkedin.com/in/judithvsanchezc/',
  cv: 'notengoporahora',
  email: 'judithv.sanchezc@gmail.com',
  aboutMe:
    "As a tech enthusiast, I'm passionate about creating solutions through code. I have a diverse background that includes studying Physiotherapy and working as an online Spanish tutor. From that job, my pet project was born: Bocaditos de Español. I'd love for you to check it out!",
  skills: [
    'JavaScript',
    'HTML',
    'CSS',
    'React',
    'Vue',
    'Angular',
    'Node.js',
    'Express.js',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Git',
    'GitHub',
    'Webpack',
    'Babel',
    'RESTful APIs',
    'GraphQL',
    'AWS',
    'Firebase',
    'Docker',
    'Kubernetes',
    'Linux',
    'Nginx',
    'Apache',
    'Jest',
    'Mocha',
    'Chai',
    'Agile Development',
    'Scrum',
    'UI/UX Design',
  ],
  projectsIntro:
    "Do you want to see my projects? You're already checking out one with this portfolio! But there's more to explore - keep scrolling down to discover what else I've been working on.",
  projects: [
    {
      title: 'Bocaditos de Español',
      url: 'github.com/judithsanchez/bocaditosespanol',
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
      url: 'github.com/judithsanchez/hackerrank-problem-solving',
      description:
        'A collection of my solutions for Hackerrank problem-solving challenges, aimed at improving coding and problem-solving skills.',
      skillsApplied: ['JavaScript'],
    },
  ],
});

export default portfolioJudithSanchez;

console.log(portfolioJudithSanchez);
