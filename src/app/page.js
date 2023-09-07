import HomeComponent from "@/components/home/HomeComponent"

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
  url: `https://rohitweb.me`,
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
    url: `https://rohitweb.me`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Empower Your Business with Custom Web Solutions`,
    description: `Certified Full Stack Web Developer with 2+ years of experience. Expert in Ruby on Rails, React, and JavaScript. Demonstrated proficiency in dynamic web applications. Ready to master new technologies for your projects.`,
    images: ['/assets/rohit-bhatt.jpg'],
    creator: '@Rohit__Bhatt_',
    url: `https://rohitweb.me`,
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col pt-20 box-border">
      <HomeComponent />
    </main>
  )
}
