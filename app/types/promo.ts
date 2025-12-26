export interface PromoCost {
  icon?: string
  label: string
  amount: string
  description?: string
}

export interface PromoAdvantage {
  title: string
  description: string
}

export interface PromoFeature {
  title: string
  description: string
  included: boolean
  icon?: string
}

export interface PromoPackage {
  id: string
  title: string
  description: string
  headline: string
  costs: PromoCost[]
  features: PromoFeature[]
  advantages: PromoAdvantage[]
  contact?: {
    name: string
    phone: string
  }
}
