import React from "react"
import { Roboto, Poppins, Jockey_One } from "next/font/google"
import local from "next/font/local"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100","300","400","500","700","900"],
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","300","400","500","700","900"],
})

const jockeyOne = Jockey_One({
  subsets: ["latin"],
  weight: ["400"],
})
//local font example, we can use it like any other font imported from next/font/google
const localFont = local({
    src : "../fonts/loveday.ttf"
})

//global styles are defined in layout.js, so we can use the font classes here without importing them again  (layout page un body<className={`${roboto.className} ${poppins.className} ${jockeyOne.className}`}>)
export default function ExampleFont() {
  return (
    <div className={roboto.className}>
      <h1 className={`text-4xl ${jockeyOne.className}`}>
        lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>

      <p className={` ${poppins.className} text-lg`}>
        lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p className={` ${localFont.className} text-lg`}>
        lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  )
}