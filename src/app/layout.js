import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import "../../public/css/bootstrap.min.css"
import "../../public/css/fontawesome.css"
import "../../public/css/templatemo-digimedia-v1.css"
import "../../public/css/animated.css"
// import "../../public/css/owl.css"

import Script from 'next/script'

import Header from '@/components/client/header'
import Footer from '@/components/server/footer'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
  

        <Header></Header>
        { children }
        <Footer></Footer>

        <Script src='/js/jquery.min.js'></Script>
        <Script src='/js/jquery.slim.js'></Script>
        <Script src='/js/animation.js'></Script>
        <Script src='/js/custom.js'></Script>
        <Script src='/js/imagesLoaded.js'></Script>
        <Script src='/js/isotope.js'></Script>
        <Script src='/js/tabs.js'></Script>
        <Script src='/js/owl-carousel.js'></Script>
 
      
      </body>
    </html>
  )
}
