<script setup>
const work = [
  {
    company: "Booking.com",
    role: "Software Engineer I",
    dates: "November 2024–present",
    text: "I champion practical AI adoption within my team and help colleagues across engineering, UX writing and design use it in their work. Alongside that, I develop travel recommendations and rewards across Java backend systems and React/TypeScript interfaces, and help organise a team effort to simplify our codebase.",
    focus: "Practical AI workflows · Java backend · React / TypeScript",
  },
  {
    company: "Toptal",
    role: "Full Stack Engineer",
    dates: "September 2023–October 2024",
    text: "My first paid engineering role took me from intern to junior developer. I took part in a programme evaluating AI coding tools while building internal tools for marketing colleagues across interfaces, APIs and data.",
    focus: "AI coding tools · Next.js / TypeScript · PostgreSQL / BigQuery",
  },
];
const approach = [
  [
    "Understand what is happening.",
    "I trace the data and behaviour, ask questions, and try to reproduce the problem before deciding what to change.",
  ],
  [
    "Keep changes manageable.",
    "I look for a useful next step, check the scenarios it affects, and pay attention to behaviour that still needs to work.",
  ],
  [
    "Make the work easier to follow.",
    "Clear explanations, examples and walkthroughs help other people understand a change and build on it.",
  ],
  [
    "Use AI with care and curiosity.",
    "I use it to explore unfamiliar code and develop workflows for investigation, testing and maintenance. Reviewing the output and checking the behaviour remain part of the job.",
  ],
];
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header shell">
    <a class="wordmark" href="#home" aria-label="Judith Sánchez home"
      >judith<span aria-hidden="true">.</span></a
    >
    <nav aria-label="Main navigation">
      <a href="#work">Work</a><a href="#story">My story</a
      ><a href="#projects">Projects</a><a href="#contact">Say hola ↗</a>
    </nav>
  </header>
  <main id="main">
    <section id="home" class="hero shell" aria-labelledby="intro-title">
      <div class="hero-copy">
        <p class="eyebrow">Practical AI · Backend · Full-stack</p>
        <h1 id="intro-title">Hola, I’m <span>Judith.</span></h1>
        <p class="hero-lead">
          Software engineer at Booking.com. I started by making games for my
          Spanish students.
        </p>
        <p>
          These days I work with Java on the backend, drawing on my full-stack
          experience. I also help colleagues explore practical ways to use AI in
          their engineering work.
        </p>
        <p>
          I still love the part that got me into coding: having an idea, making
          it work, and improving it with the people using it.
        </p>
        <div class="actions">
          <a class="button" href="#work"
            >Explore my work <span aria-hidden="true">↓</span></a
          ><a class="text-link" href="/judith-sanchez-cv.pdf"
            >Read my CV <span class="link-note">PDF</span></a
          >
        </div>
      </div>
      <aside class="hero-note" aria-label="What connects my work">
        <span class="note-caption">The part I keep coming back to</span>
        <p class="note-phrase">
          An idea.<br />A little code.<br />People trying it.
        </p>
        <svg
          class="loop-drawing"
          viewBox="0 0 270 100"
          role="img"
          aria-label="Make something, try it, learn, and repeat"
        >
          <path
            d="M22 49 C22 5 115 8 127 45 S245 100 247 47 S138 -2 128 48 S22 90 22 49"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
          />
          <path
            d="m234 45 13 5 6-13"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
          />
          <circle cx="22" cy="49" r="5" fill="currentColor" />
        </svg>
        <p class="note-foot">
          Try it. Learn something.<br />Make it a little better.
        </p>
      </aside>
      <p class="location">
        Based in Amsterdam <span aria-hidden="true">·</span> A background in
        teaching, a career in software
      </p>
    </section>
    <section id="work" class="work-section" aria-labelledby="work-title">
      <div class="shell section-grid">
        <div class="section-intro">
          <p class="eyebrow">01 / Work</p>
          <h2 id="work-title">What I work on.</h2>
          <p>
            Building software and helping people make use of the tools around
            them.
          </p>
        </div>
        <div class="work-list">
          <article v-for="job in work" :key="job.company" class="job">
            <p class="dates">{{ job.dates }}</p>
            <h3>{{ job.company }}</h3>
            <p class="role">{{ job.role }}</p>
            <p>{{ job.text }}</p>
            <p class="focus">{{ job.focus }}</p>
          </article>
          <details class="workflow">
            <summary>
              Helping colleagues put AI to work
            </summary>
            <div class="details-body">
              <p>
                A useful tool still needs to fit the work people are doing.
                I help colleagues find practical uses for AI, build shared
                engineering workflows and co-lead learning sessions around
                real tasks. This also brings me into conversations with UX
                writing and design.
              </p>
              <p>
                The teaching part feels familiar: listen to where someone is
                getting stuck, work through it together, and give them something
                they can use on their own. Shared examples and documentation
                help other colleagues build on what we learn.
              </p>
              <ol class="workflow-steps">
                <li>Start with a real task</li>
                <li>Try an approach together</li>
                <li>Review the result and its limits</li>
                <li>Share what others can reuse</li>
              </ol>
              <p class="small">
                These workflows build on my teammates’ work too. AI can help
                with investigation, testing and maintenance; understanding the
                system and checking the result remain part of the job.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
    <section
      id="story"
      class="story-section shell section-grid"
      aria-labelledby="story-title"
    >
      <div class="section-intro">
        <p class="eyebrow">02 / My story</p>
        <h2 id="story-title">
          It started with <br />“can you make <br />another game?”
        </h2>
        <p class="aside-note">Tough stakeholders.<br />A lot of fun.</p>
      </div>
      <div class="story-copy">
        <p class="large-copy">
          My Spanish students had a lot to do with me becoming a developer.
        </p>
        <p>
          I was teaching online, often to children who were still learning to
          read. In 2019 I started building little browser games to use in our
          lessons. They kept asking for changes to their favourites, and I kept
          finding new things I needed to learn. It was a very practical
          introduction to software: someone had an idea, I tried to make it
          work, and we found out together what needed changing.
        </p>
        <p>
          A full-stack bootcamp introduced me to React and building projects
          with a team. Then came an internship at Toptal, a junior developer
          role, and later Java backend engineering at Booking.com.
        </p>
        <p>
          Teaching still shows up in my work. I enjoy explaining something I
          have figured out, helping a colleague get unstuck, and turning an
          experiment into something another person can use. AI tools have become
          part of that too: I try them, question the results, and work out how
          they can help with a real task.
        </p>
        <p>
          These days, my personal building happens on apps I host on my
          Raspberry Pi. My public projects are earlier work, and I no longer
          maintain them.
        </p>
      </div>
    </section>
    <section
      id="projects"
      class="projects-section shell"
      aria-labelledby="projects-title"
    >
      <div class="section-heading">
        <div>
          <p class="eyebrow">03 / Earlier projects</p>
          <h2 id="projects-title">Things I learned by making.</h2>
        </div>
        <p>
          Two past projects from that journey.<br />Shared as source, no longer
          maintained.
        </p>
      </div>
      <div class="project-grid">
        <article class="project bocaditos">
          <div class="project-art" aria-hidden="true">
            <span class="word-play">hola<span>!</span></span
            ><span class="art-caption">Language → play → learning</span>
          </div>
          <div class="project-copy">
            <p class="eyebrow">Teaching &amp; browser games</p>
            <h3>Bocaditos de Español</h3>
            <p>
              Classroom games were my starting point in software: I built
              activities with HTML, CSS and JavaScript, tried them with students
              and improved them from their feedback. A later Next.js application
              explores learning through songs, translations and listening
              practice.
            </p>
            <details>
              <summary>How the project evolved</summary>
              <div class="details-body">
                <p>
                  The first games ran locally while I shared my screen during
                  Spanish lessons. The children’s requests shaped what I built
                  next.
                </p>
                <p>
                  The repository linked here is the later Next.js application,
                  with song selection, translations and listening practice. It
                  is a different stage of the project, not an archive of every
                  classroom game.
                </p>
                <p>
                  The hosted Songs page currently fails, and the repository has
                  unresolved setup and validation issues. I keep it here as part
                  of my learning history.
                </p>
              </div>
            </details>
            <a
              class="text-link"
              href="https://github.com/judithsanchez/bocaditosespanol"
              >Bocaditos source ↗</a
            >
          </div>
        </article>
        <article class="project scoutly">
          <div class="project-art" aria-hidden="true">
            <div class="scout-diagram">
              <span>Openings</span><span class="diagram-arrow">↓</span
              ><span>Profile + AI</span><span class="diagram-arrow">↓</span
              ><span>Matches to review</span>
            </div>
          </div>
          <div class="project-copy">
            <p class="eyebrow">AI &amp; job discovery</p>
            <h3>Scoutly</h3>
            <p>
              I built a Next.js app to explore how AI could help with job
              discovery. It gathered openings from company career pages,
              compared them with a candidate’s profile, and saved matches for
              review, with tracking for AI usage and estimated costs. I no
              longer use or maintain it.
            </p>
            <details>
              <summary>A closer look at the workflow</summary>
              <div class="details-body">
                <p>
                  The pipeline combined candidate-profile processing,
                  company-page scraping, an initial matching pass and more
                  detailed analysis before saving results. Usage tracking
                  recorded tokens and estimated costs.
                </p>
                <p>
                  The source documents that workflow; it does not establish the
                  accuracy of a match or the app’s current reliability. This is
                  an earlier experiment, not a service I currently run.
                </p>
              </div>
            </details>
            <a class="text-link" href="https://github.com/judithsanchez/scoutly"
              >Scoutly source ↗</a
            >
          </div>
        </article>
      </div>
      <p class="archive-note">
        More of my earlier experiments and learning projects live on
        <a href="https://github.com/judithsanchez?tab=repositories">GitHub</a>.
      </p>
    </section>
    <section
      class="approach-section shell section-grid"
      aria-labelledby="approach-title"
    >
      <div class="section-intro">
        <p class="eyebrow">04 / How I work</p>
        <h2 id="approach-title">
          Curious about the problem. <br />Careful with the change.
        </h2>
      </div>
      <ol class="approach-list">
        <li v-for="(item, i) in approach" :key="item[0]">
          <span class="step-number" aria-hidden="true">0{{ i + 1 }}</span>
          <div>
            <h3>{{ item[0] }}</h3>
            <p>{{ item[1] }}</p>
          </div>
        </li>
      </ol>
    </section>
    <section
      id="contact"
      class="contact-section"
      aria-labelledby="contact-title"
    >
      <div class="shell contact-inner">
        <p class="eyebrow">Let’s talk</p>
        <h2 id="contact-title">Say <em>hola.</em></h2>
        <p>
          If you’d like to talk about software, learning, or a project you’re
          working on, say hola.
        </p>
        <a class="email-link" href="mailto:judithv.sanchezc@gmail.com"
          >judithv.sanchezc@gmail.com ↗</a
        >
        <div class="contact-links">
          <a href="https://www.linkedin.com/in/judithvsanchezc/">LinkedIn</a
          ><a href="https://github.com/judithsanchez">GitHub</a
          ><a href="/judith-sanchez-cv.pdf">Read my CV</a>
        </div>
      </div>
    </section>
  </main>
  <footer class="site-footer shell">
    <p>Judith Sánchez <span aria-hidden="true">·</span> Amsterdam</p>
    <a href="https://github.com/judithsanchez/portfolio"
      >Built with Vue. Source on GitHub ↗</a
    ><a href="#home">Back to top ↑</a>
  </footer>
</template>
