"use server"

import Banner from "@/components/server/banner"
import About from "@/components/server/about"
import Services from "@/components/client/services"
import Quote from "@/components/server/quote"
import Blog from "@/components/server/blog"
import ContactUs from "@/components/server/contactUs"
import Preloader from "@/components/client/preloader"
import Portfolio from "@/components/client/portfolio"



export default async function Home() {

  return (
    <div>
        <Preloader></Preloader>
        <Banner></Banner>
        <About></About>
        <Services></Services>
        <Quote></Quote>
        <Portfolio></Portfolio>
        {/* <Blog></Blog>
        <ContactUs></ContactUs>  */}
  </div>
  )
}



