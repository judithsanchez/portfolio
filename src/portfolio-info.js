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
      url: 'github.com/judithsanchez/bocaditosespanol',
      description:
        'Free <span class="highlight1">educational platform</span> for Spanish teachers and students of all ages, <span class="highlight2">based on learning with native content and fun games</span>. Give it a try!',
      skillsApplied: [
        'JavaScript',
        'CSS',
        'HTML',
        'React',
        'Figma',
        'Adobe Illustrator',
      ],
    },
    {
      title: 'Hangman',
      url: 'github.com/judithsanchez/hangman-game-v2',
      description:
        '<span class="highlight1">My version</span> of the popular <span class="highlight2">hangman game</span> for kids features sentences from famous movies.',
      skillsApplied: ['JavaScript', 'HTML', 'CSS', 'Figma', 'Adobe Illustrator'],
    },
    {
      title: 'Text with Translations',
      url: 'github.com/judithsanchez/text-with-translations',
      description:
        'A feature that <span class="highlight1">shows relevant translations</span> <span class="highlight2">when you click on a word</span> in a text.',
      skillsApplied: ['JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Lyrics',
      url: 'github.com/judithsanchez/lyrics-translations',
      description:
        '<span class="highlight1">Learn Spanish through songs</span> with this feature that allows students to <span class="highlight2">practice their listening skills by completing the lyrics</span>. Additionally, they can access translations if needed.',
      skillsApplied: ['JavaScript', 'HTML', 'CSS'],
    },

  ],
});

export default portfolioJudithSanchez;
