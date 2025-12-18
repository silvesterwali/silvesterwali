export function useHero() {
  const title = ref('Silvester Wali')
  const subtitle = ref('Web Developer')
  const description = ref('Passionate about crafting efficient and scalable and custom web applications. Experienced in working with diverse technologies to deliver high-quality solutions.')
  return { title, subtitle, description }
}

export function useAbout() {
  const bio = ref('Self-taught developer with 6+ years building scalable web applications. I specialize in frontend development with Vue & Nuxt, and backend solutions with Laravel. I\'m passionate about writing clean, maintainable code and creating responsive, user-focused interfaces.')
  return { bio }
}

export function useContact() {
  const email = ref('silvesterlhwali123@gmail.com')
  const phone = ref('+6281236698015')
  const linkedin = ref('https://www.linkedin.com/in/silvester-wali-a54414177')
  const github = ref('https://github.com/silvesterwali')

  return { email, phone, linkedin, github }
}

export function useSkills() {
  const skills = ref<string[]>([
    'JavaScript',
    'TypeScript',
    'Vue.js',
    'Nuxt.js',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'PHP',
    'Laravel',
    'MySQL',
    'MongoDB',
    'Git'
  ])
  return { skills }
}

interface ServiceOffer {
  title: string
  description: string
}

export function useOffers() {
  const items = ref<ServiceOffer[]>([
    {
      title: 'Frontend Development',
      description: 'Building responsive and user-friendly web interfaces using Vue.js and Nuxt.js.'
    },
    {
      title: 'Backend Development',
      description: 'Creating robust backend solutions with PHP and Laravel to power web applications.'
    },
    {
      title: 'Full-Stack Development',
      description: 'Delivering end-to-end web applications by combining frontend and backend expertise.'
    },
    {
      title: 'Freelance Web Development',
      description: 'Offering custom web development services tailored to client needs on a freelance basis.'
    }
  ])
  return { items }
}
