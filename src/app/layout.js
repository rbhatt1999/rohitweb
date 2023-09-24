import NavigationBar from '@/components/Navigation/NavigationBar'
import './globals.css'
import { Roboto, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';


const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: `Empower Your Business with Custom Web Solutions`,
  description: `Certified Full Stack Web Developer with 2+ years of experience. Expert in Ruby on Rails, React, and JavaScript. Demonstrated proficiency in dynamic web applications. Ready to master new technologies for your projects.`,
  images: [
    {
      url: '/assets/rohit-bhatt.jpg',
      width: 800,
      height: 500,
      alt: 'Rohit Bhatt',
    },
  ],
  url: `https://www.rohitweb.me`,
  type: 'website',
  keywords: ['Rohit Bhatt', 'Custom Web Solutions', 'Full Stack Web Developer', 'Ruby on Rails', 'React', 'JavaScript', 'Dynamic Web Applications', 'Web Development', 'Web Developer', 'Web Solutions', 'Web Solutions Provider', 'Web Solutions Provider in India', 'Web Solutions Provider in Utarakhand', 'Web Solutions Provider in Ahmedabad', 'Web Solutions Provider in Gujarat', 'Web Solutions Provider in India', 'Web Solutions Provider in USA', 'Web Solutions Provider in Canada', 'Web Solutions Provider in Australia', 'Web Solutions Provider in UK', 'Web Solutions Provider in UAE', 'Web Solutions Provider in Dubai', 'Web Solutions Provider in Singapore', 'Web Solutions Provider in Malaysia', 'Web Solutions Provider in New Zealand', 'Web Solutions Provider in South Africa', 'Web Solutions Provider in Europe', 'Web Solutions Provider in Asia', 'Web Solutions Provider in North America', 'Web Solutions Provider in South America', 'Web Solutions Provider in Central America', 'Web Solutions Provider in Africa', 'Web Solutions Provider in Delhi'], 
  openGraph: {
    title: `Empower Your Business with Custom Web Solutions`,
    description: `Certified Full Stack Web Developer with 2+ years of experience. Expert in Ruby on Rails, React, and JavaScript. Demonstrated proficiency in dynamic web applications. Ready to master new technologies for your projects.`,
    images: [
      {
        url: '/assets/rohit-bhatt.jpg',
        width: 500,
        height: 800,
        alt: 'Rohit Bhatt',
      },
    ],
    url: `https://www.rohitweb.me`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Empower Your Business with Custom Web Solutions`,
    description: `Certified Full Stack Web Developer with 2+ years of experience. Expert in Ruby on Rails, React, and JavaScript. Demonstrated proficiency in dynamic web applications. Ready to master new technologies for your projects.`,
    images: ['/assets/rohit-bhatt.jpg'],
    creator: '@Rohit__Bhatt_',
    url: `https://www.rohitweb.me`,
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className} animate-text bg-gradient-to-r from-neutral-900 via-zinc-800 to-stone-800`}>
        <Analytics />
        <NavigationBar />
        {children}
        </body>
    </html>
  )
}
