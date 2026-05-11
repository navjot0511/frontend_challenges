export type ChallengeType = {
  src: string,
  title: string,
  image: string,
  date: string
}

export type MovieType = {
  title: string,
  image: string,
  image_wide: string,
  rating: string,
  duration: string,
  year: number
}

export type JobType = {
  id: number,
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: string[],
  tools: string[]
}
