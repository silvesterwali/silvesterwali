export interface WorkingExperience {
  companyName: string
  companyLogoUrl: string
  companyWebsite: string
  position: string
  startDate: string // ISO format date string
  endDate: string | null // ISO format date string or null for current
  responsibilities: string[]
  stack?: string[]
  scope?: string[]
}
