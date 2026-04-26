export function useHero() {
  const title = ref("Silvester Wali");
  const subtitle = ref("Full Stack Web Developer");
  const description = ref(
    "Full Stack Developer with 7+ years of experience building scalable web applications. Proficient in JavaScript, TypeScript, Vue.js, Nuxt.js, React, Next.js, PHP, and Laravel. Passionate about clean code, responsive design, and delivering high-quality solutions.",
  );
  return { title, subtitle, description };
}

export function useAbout() {
  const bio = ref(
    "Self-taught Full Stack Developer with 7+ years of hands-on experience building scalable, production-ready web applications. Specialized in modern JavaScript frameworks including Vue.js, Nuxt.js, React, and Next.js for frontend development, and PHP with Laravel for robust backend solutions. Strong expertise in RESTful API design, database management (MySQL, MongoDB, PostgreSQL), and responsive UI/UX implementation with Tailwind CSS. Proven track record of collaborating with cross-functional teams to deliver high-quality software on time.",
  );
  return { bio };
}

export function useContact() {
  const email = ref("silvesterlhwali123@gmail.com");
  const phone = ref("+6281236698015");
  const linkedin = ref("https://www.linkedin.com/in/silvester-wali-a54414177");
  const github = ref("https://github.com/silvesterwali");

  return { email, phone, linkedin, github };
}

export function useSkills() {
  const skills = ref<string[]>([
    "JavaScript (ES6+)",
    "TypeScript",
    "Vue.js",
    "Nuxt.js",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "PHP",
    "Laravel",
    "REST API",
    "GraphQL",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "Docker",
    "Linux",
    "Agile/Scrum",
  ]);
  return { skills };
}

interface ServiceOffer {
  title: string;
  description: string;
}

export function useOffers() {
  const items = ref<ServiceOffer[]>([
    {
      title: "Frontend Development",
      description: "Building responsive and user-friendly web interfaces using Vue.js and Nuxt.js.",
    },
    {
      title: "Backend Development",
      description:
        "Creating robust backend solutions with PHP and Laravel to power web applications.",
    },
    {
      title: "Full-Stack Development",
      description:
        "Delivering end-to-end web applications by combining frontend and backend expertise.",
    },
    {
      title: "Freelance Web Development",
      description:
        "Offering custom web development services tailored to client needs on a freelance basis.",
    },
  ]);
  return { items };
}
