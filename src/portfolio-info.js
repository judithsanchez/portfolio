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

  addNewProject(title, repository, description, skills) {
    const project = {
      title,
      repository,
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
    'React.js',
    'RESTful APIs',
    'Scrum',
    'UI/UX Design',
    'Vue',
    'Webpack',
  ],
  projects: [
    {
      title: 'Bocaditos de Español',
      repository: 'github.com/judithsanchez/bocaditosespanol',
      livePreview: '',
      liveVersion: 'bocaditosespanol.com',
      description:
        'Free <span class="highlight1">educational platform</span> for Spanish teachers and students of all ages, <span class="highlight2">based on learning with native content and fun games</span>. Give it a try!',
      skillsApplied: [
        'JavaScript',
        'CSS',
        'HTML',
        'React.js',
        'Figma',
        'Adobe Illustrator',
      ],
    },
    {
      title: 'Forever Active (Feature Extension - Bootcamp)',
      repository: 'github.com/judithsanchez/forever-active',
      livePreview: '',
      liveVersion: '',
      description:
        'Forever Active is a <span class= "highlight1" >full stack fitness web app</span>. Recently, I had the opportunity to contribute to the project by <span class="highlight2">implementing authentication and authorization</span>.',
      skillsApplied: ['React.js', 'Express', 'MySQL', 'Node.js', 'Bootstrap'],
    },
    {
      title: 'Matching Game (MVP - Bootcamp)',
      repository: 'github.com/judithsanchez/mvp-bootcamp',
      livePreview: '',
      liveVersion: '',
      description:
        'This version contains the basic logic of a memory matching game using React. But what\'s cool is that <span class="highlight1">it serves as a practice tool for Spanish/English</span>. Each pair shares the same image, <span class="highlight2">but one card has the text in Spanish and the other in English</span>.',
      skillsApplied: ['React', 'MySQL', 'Express', 'API'],
    },
    {
      title: 'To-Do List',
      repository: 'github.com/judithsanchez/to-do-list',
      livePreview: '',
      liveVersion: '',
      description:
        'Made a to-do list app with <span class="highlight1">full-stack magic</span>, but had to sprinkle some mandatory <span class="highlight2">React on top.</span> Check it out!',

      skillsApplied: ['React.js', 'MySQL', 'Express', 'API'],
    },
    {
      title: 'SheSharp Hackaton 2023',
      repository: 'github.com/judithsanchez/shesharp-hackathon-2023',
      livePreview: '',
      liveVersion: 'judithsanchez.github.io/shesharp-hackathon-2023',
      description:
        'Choose Your Hunt is a <span class="highlight1">job search engine tailored to help newcomers to tech find remote jobs</span>. Even on days when you\'re not up for the arduous task of finding job postings, we\'ve got you covered. <span class="highlight2">Just tell us how you\'re feeling today, and we\'ll give you actionable advice for your next step</span>.',
      skillsApplied: ['React.js', 'MySQL', 'Express', 'API'],
    },
    {
      title: 'My Portfolio',
      repository: 'github.com/judithsanchez/portfolio',
      livePreview: '',
      liveVersion: 'judithsanchez.com/',
      description:
        '<span class="highlight1">My own portfolio.</span> I thought that if I was going to showcase my work, <span class="highlight2">I\'d better build it myself.</span>',
      skillsApplied: ['Vue.js', 'HTML', 'CSS', 'Figma'],
    },
    {
      title: 'Michi Memoria',
      repository: 'github.com/judithsanchez/matching-game',
      livePreview: '',
      liveVersion: 'judithsanchez.github.io/matching-game',
      description:
        'If you\'re up for a delightful time with <span class="highlight1">the internet royalty (cats, of course)</span> indulge in this charming rendition of <span class="highlight2">the beloved memory game</span>.',
      skillsApplied: ['Javascript', 'HTML', 'CSS', 'Figma'],
    },
    {
      title: 'Hackerrank Problem Solving Challenges',
      repository: 'github.com/judithsanchez/hackerrank-problem-solving',
      livePreview: '',
      liveVersion: '',
      description:
        'This repository contains <span class="highlight1">my solutions</span> to various problems proposed in <span class="highlight2">Hackerrank</span>.',

      skillsApplied: ['Javascript'],
    },

    {
      title: 'Hangman',
      repository: 'github.com/judithsanchez/hangman-game-v2',
      livePreview:
        'loom.com/share/d0d8d515ee0540e893be2f1d5930a310?sid=e1b3ae7a-85d2-4934-8096-c665463425ff',
      liveVersion: 'judithsanchez.github.io/hangman-game-v2',
      description:
        '<span class="highlight1">My version</span> of the popular <span class="highlight2">hangman game</span> for kids features sentences from famous movies.',
      skillsApplied: [
        'JavaScript',
        'HTML',
        'CSS',
        'Figma',
        'Adobe Illustrator',
      ],
    },
    {
      title: 'Text with Translations',
      repository: 'github.com/judithsanchez/text-with-translations',
      livePreview: '',
      liveVersion: '',
      description:
        'A feature that <span class="highlight1">shows relevant translations</span> <span class="highlight2">when you click on a word</span> in a text.',
      skillsApplied: ['JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Lyrics',
      repository: 'github.com/judithsanchez/lyrics-translations',
      livePreview: '',
      liveVersion: '',
      description:
        '<span class="highlight1">Learn Spanish through songs</span> with this feature that allows students to <span class="highlight2">practice their listening skills by completing the lyrics</span>. Additionally, they can access translations if needed.',
      skillsApplied: ['JavaScript', 'HTML', 'CSS'],
    },
  ],
});

export default portfolioJudithSanchez;
