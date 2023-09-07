import NavigationBar from '@/components/Navigation/NavigationBar'
import './globals.css'
import { Roboto } from 'next/font/google'


const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gradient-to-br from-neutral-800 to-neutral-900`}>
        <NavigationBar />
        {children}
        </body>
    </html>
  )
}
