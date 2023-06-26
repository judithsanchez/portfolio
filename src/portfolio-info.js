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
  cv: 'https://drive.google.com/file/d/1G8blt4w3Weo9UtlSbEizqyG7qSC4Ot4s/view?usp=sharing',
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
      livePreview:
        'loom.com/share/4bec32fd2b7f4d59a1d5dd370d7a480f?sid=9db58f7f-63ce-40fa-837c-393b9edf639e',
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
      livePreview:
        'loom.com/share/50303fc50d1540669966cde0b13a1c86?sid=fc511f2f-7639-4f58-996f-7316c8a48579',
      liveVersion: '',
      description:
        'Forever Active is a <span class= "highlight1" >full stack fitness web app</span>. Recently, I had the opportunity to contribute to the project by <span class="highlight2">implementing authentication and authorization</span>.',
      skillsApplied: ['React.js', 'Express', 'MySQL', 'Node.js', 'Bootstrap'],
    },
    {
      title: 'Matching Game (MVP - Bootcamp)',
      repository: 'github.com/judithsanchez/mvp-bootcamp',
      livePreview:
        'loom.com/share/331aa111458e43a2a1e891f628ebb35b?sid=7aaa2b8c-ab45-4851-8cf0-ced4d2aed7ff',
      liveVersion: '',
      description:
        'This version contains the basic logic of a memory matching game using React. But what\'s cool is that <span class="highlight1">it serves as a practice tool for Spanish/English</span>. Each pair shares the same image, <span class="highlight2">but one card has the text in Spanish and the other in English</span>.',
      skillsApplied: ['React', 'MySQL', 'Express', 'API'],
    },

    {
      title: 'My Portfolio',
      repository: 'github.com/judithsanchez/portfolio',
      livePreview:
        'loom.com/share/dc7d52faab444bb4ade49f1399bf2aa0?sid=0922a7db-0724-4027-bf5c-cadceefbc1a9',
      liveVersion: 'judithsanchez.com/',
      description:
        '<span class="highlight1">My own portfolio.</span> I thought that if I was going to showcase my work, <span class="highlight2">I\'d better build it myself.</span>',
      skillsApplied: ['Vue.js', 'HTML', 'CSS', 'Figma'],
    },
    {
      title: 'Michi Memoria',
      repository: 'github.com/judithsanchez/matching-game',
      livePreview:
        'loom.com/share/ac321a1230ea4f0b830c889f89704945?sid=c4834e01-2e5f-427c-a3bd-b201678629be',
      liveVersion: 'judithsanchez.github.io/matching-game',
      description:
        'If you\'re up for a delightful time with <span class="highlight1">the internet royalty (cats, of course)</span> indulge in this charming rendition of <span class="highlight2">the beloved memory game</span>.',
      skillsApplied: ['Javascript', 'HTML', 'CSS', 'Figma'],
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
      livePreview:
        'loom.com/share/26e64786137a47938df998b1a95b8788?sid=bb602f24-9f5d-40ec-8b25-c3e10e406a88',
      liveVersion: 'judithsanchez.github.io/text-with-translations/',
      description:
        'A feature that <span class="highlight1">shows relevant translations</span> <span class="highlight2">when you click on a word</span> in a text.',
      skillsApplied: ['JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Lyrics',
      repository: 'github.com/judithsanchez/lyrics-translations',
      livePreview:
        'loom.com/share/b3ee9dc3a994408b9186921284c0bac1?sid=e44dc495-04ec-4e90-8808-962ff452ea55',
      liveVersion: 'github.com/judithsanchez/lyrics-translations',
      description:
        '<span class="highlight1">Learn Spanish through songs</span> with this feature that allows students to <span class="highlight2">practice their listening skills by completing the lyrics</span>. Additionally, they can access translations if needed.',
      skillsApplied: ['JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Hackerrank Problem Solving Challenges',
      repository: 'github.com/judithsanchez/hackerrank-problem-solving',
      livePreview:
        'loom.com/share/4d38159350b841df80f15d427e02803e?sid=6c92d0b6-da2c-4688-912a-1df8a659638f',
      liveVersion: '',
      description:
        'This repository contains <span class="highlight1">my solutions</span> to various problems proposed in <span class="highlight2">Hackerrank</span>.',

      skillsApplied: ['Javascript'],
    },
    {
      title: 'Rock, Paper, Scissors',
      repository: 'github.com/judithsanchez/rock-paper-scissors',
      livePreview:
        'loom.com/share/6a2cb3d162f949a99d2fd98f463ba3fd?sid=8d4bfa0c-0fca-4287-a6e8-b896af615e85',
      liveVersion: '',
      description:
        '<span class="highlight1">Rock, Paper, Scissors</span> Game Implementation.',
      skillsApplied: ['JavaScript'],
    },
    {
      title: 'SheSharp Hackaton 2023',
      repository: 'github.com/judithsanchez/shesharp-hackathon-2023',
      livePreview:
        'loom.com/share/7e78b57101ad4b17adce1ece127655e1?sid=26b866f6-deb3-4d07-9742-bdb7c97d6ad7',
      liveVersion: 'judithsanchez.github.io/shesharp-hackathon-2023',
      description:
        'Choose Your Hunt is a <span class="highlight1">job search engine tailored to help newcomers to tech find remote jobs</span>. Even on days when you\'re not up for the arduous task of finding job postings, we\'ve got you covered. <span class="highlight2">Just tell us how you\'re feeling today, and we\'ll give you actionable advice for your next step</span>.',
      skillsApplied: ['React.js', 'MySQL', 'Express', 'API'],
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
  ],
});

export default portfolioJudithSanchez;
