export interface Project {
  id: number
  title: string
  role: string
  description: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Ecommerce Website',
    role: 'Full Stack Developer',
    description: 'Responsive ecommerce website'
  },
  {
    id: 2,
    title: 'Voting System',
    role: 'Full Stack Developer',
    description: 'Secure voting application'
  },
  {
    id: 3,
    title: 'Expense Tracking System',
    role: 'Backend Developer',
    description: 'REST API for expense tracking'
  }
]