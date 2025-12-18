import type { WorkingExperience } from '@/types/working-experience'

export function useWorkingExperience() {
  const items = ref<WorkingExperience[]>([
    {
      companyName: 'PT Saka Agung Abadi',
      companyLogoUrl: 'https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJrY5jSYBkgjYblZQyIN5sG3famCq9uExd2OAc',
      companyWebsite: 'https://www.sakaagungabadi.com',
      position: 'Web Application Developer',
      startDate: 'September 1, 2019',
      endDate: 'February 28, 2022',
      responsibilities: [
        'Developed and maintained web applications using PHP, JQuery, and Bootstrap for internal users.',
        'Collaborated with cross-functional teams to define, design, and ship new features.',
        'Optimized applications for maximum speed and scalability.',
        'Participated in code reviews and provided constructive feedback to team members.'
      ],
      stack: ['PHP', 'JQuery', 'Bootstrap', 'MySQL'],
      scope: ['Web Application Development', 'Maintenance', 'Fullstack Development']
    },
    {
      companyName: 'Bali Culinary Pastry School',
      companyLogoUrl: 'https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJUQTcGx2ZSb6zEnh1cyeK9wJdMQti8Axr2kPp',
      companyWebsite: 'https://www.baliculinarypastryschool.com',
      position: 'Fullstack Web Developer',
      startDate: 'September 1, 2021',
      endDate: 'February 28, 2022',
      responsibilities: [
        'Developed a custom School management system  using Nuxt.js and Laravel to facilitate school operations.',
        'Collaborated with stakeholders to gather requirements and translate them into technical specifications.',
        'Implemented responsive design principles to ensure the application was accessible on various devices.',
        'Maintained and updated the system based on user feedback and changing requirements.'
      ],
      stack: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'JavaScript', 'Express.js', 'MongoDB', 'GraphQL'],
      scope: ['Frontend Development', 'Responsive Design', 'Performance Optimization', 'Fullstack Development']
    },
    {
      companyName: 's.p Digital Agency',
      companyLogoUrl: 'https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJjLXhYYGIPCzE80c54o9grF7KbaxORHyUhWwQ',
      companyWebsite: 'https://www.linkedin.com/company/spdigitalagency/posts/?feedView=all',
      position: 'Frontend Web Developer',
      startDate: 'March 1, 2022',
      endDate: 'February 1, 2025',
      responsibilities: [
        'Developed and maintained responsive websites and web applications using Nuxt.js, Vue.js, and Tailwind CSS.',
        'Collaborated with designers and backend developers to create seamless user experiences.',
        'Optimized web applications for maximum speed and scalability.',
        'Implemented best practices for code quality, including code reviews and testing.'
      ],
      stack: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
      scope: ['Frontend Development', 'Responsive Design', 'Performance Optimization']
    },
    {
      companyName: 'Luxbali Travel Agency',
      companyLogoUrl: 'https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJy5GU1JL1xkgZovwB4l7aCimnF36JfLWUKzXE',
      companyWebsite: 'https://www.luxbali.net',
      position: 'Freelance Web Developer',
      startDate: 'February 1, 2025',
      endDate: null,
      responsibilities: [
        'Designing and developing a custom travel agency website using Nuxt.js and Tailwind CSS and Laravel.',
        'Implementing responsive design to ensure optimal user experience across devices.',
        'Integrating booking and payment systems to facilitate online reservations.',
        'Collaborating with the client to gather requirements and provide regular updates on project progress.'
      ],
      stack: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Laravel', 'PostgreSQL', 'Linux', 'Ubuntu Server'],
      scope: ['Web Design', 'Frontend Development', 'Freelance Project', 'Fullstack Development']
    },
    {
      companyName: 'PT Jangkar Technology Indonesia',
      companyWebsite: 'https://jangkar.io',
      companyLogoUrl: 'https://dsil7wenhp.ufs.sh/f/kPPdywK0FxLJ0w0C6h5O0TzVPbZi1U4epwqgAIlNW5dXG6DS',
      position: 'Fullstack Engineer',
      startDate: 'February 10, 2025',
      endDate: 'December 19, 2025',
      responsibilities: [
        'Developed and maintained web applications using Next.js for the frontend and Laravel for the backend.',
        'Collaborated with cross-functional teams to define, design, and ship new features.',
        'Optimized applications for maximum speed and scalability.',
        'Participated in code reviews and provided constructive feedback to team members.'
      ],
      stack: ['Next.js', 'React.js', 'Vue.js', 'Tailwind CSS', 'JavaScript', 'Laravel', 'Golang', 'MySQL', 'PostgreSQL', 'Docker'],
      scope: ['Web Application Development', 'Maintenance', 'Fullstack Development', 'Team Collaboration']
    }
  ])
  return { items }
}
