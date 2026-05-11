// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { MovieType } from '../../types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieType[]>
) {
  res.status(200).json(movies)
}

const movies: MovieType[] = [
  {
    title: 'The Flash',
    image: "https://www.themoviedb.org/t/p/w220_and_h330_face/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg",
    image_wide: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/41yaWnIT8AjIHiULHtTbKNzZTjc.jpg",
    rating: 'TV-PG',
    duration: '43m',
    year: 2014
  },
  {
    title: 'Spider-Man: No Way Home',
    image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    image_wide: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/ocUp7DJBIc8VJgLEw1prcyK1dYv.jpg',
    rating: 'PG-13',
    duration: '2h 28m',
    year: 2021
  },
  {
    title: 'Eternals',
    image: "https://www.themoviedb.org/t/p/w220_and_h330_face/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg",
    image_wide: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg",
    rating: 'PG-13',
    duration: '2h 36m',
    year: 2021
  },
  {
    title: "Chip 'n' Dale Rescue Rangers",
    image: "https://www.themoviedb.org/t/p/w220_and_h330_face/7UGmn8TyWPPzkjhLUW58cOUHjPS.jpg",
    image_wide: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/qK7Ssnrfvrt65F66A1thvehfQg2.jpg",
    rating: "TV-Y",
    duration: "22 min",
    year: 1989
  },
  {
    title: "Shang-Chi and the Legend of the Ten Rings",
    image: "https://www.themoviedb.org/t/p/w220_and_h330_face/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
    image_wide: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/zxWAv1A34kdYslBi4ekMDtgIGUt.jpg",
    rating: "PG-13",
    duration: "132 min",
    year: 2021
  },
  {
    title: "Avengers: Endgame",
    image: "https://www.themoviedb.org/t/p/w220_and_h330_face/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    image_wide: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    rating: "PG-13",
    duration: "181 min",
    year: 2019
  },
  {
    title: "Black Panther",
    image: "https://www.themoviedb.org/t/p/w220_and_h330_face/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    image_wide: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/6ELJEzQJ3Y45HczvreC3dg0GV5R.jpg",
    rating: "PG-13",
    duration: "134 min",
    year: 2018
  },
  {
    title: "Spider-Man: Spider Verse Stop Motion",
    image: "https://www.themoviedb.org/t/p/w220_and_h330_face/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    image_wide: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/x2IqsMlpbOhS8zIUJfyl1yO4gHF.jpg",
    rating: "PG-13",
    duration: "1h 56m",
    year: 2021
  },
  {
    title: "Sonic the Hedgehog",
    image: "https://www.themoviedb.org/t/p/w220_and_h330_face/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
    image_wide: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg",
    rating: "PG",
    duration: "99 min",
    year: 2020
  },
  {
    title: "Captain Marvel",
    image: "https://www.themoviedb.org/t/p/w220_and_h330_face/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
    image_wide: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",
    rating: "PG-13",
    duration: "123 min",
    year: 2019
  },
  {
    title: "Space Jam: A New Legac",
    image: "https://www.themoviedb.org/t/p/w220_and_h330_face/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg",
    image_wide: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/8s4h9friP6Ci3adRGahHARVd76E.jpg",
    rating: "PG",
    duration: "125 min",
    year: 2021
  },
  {
    title: "Black Widow",
    image: "https://www.themoviedb.org/t/p/w220_and_h330_face/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
    image_wide: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg",
    rating: "PG-13",
    duration: "134 min",
    year: 2021
  }
]

