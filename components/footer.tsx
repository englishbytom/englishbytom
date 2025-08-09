import * as React from "react"
import Image from "next/image"
import YoutubeIcon from './YouTube.svg'
import InstagramIcon from './Instagram.svg'
import FacebookIcon from './Facebook.svg'

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center ">
      <footer className="flex flex-col sm:flex-row responsive-container py-4 justify-between border-t-1">
        <h6>English by Tom</h6>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row">
            <a href="https://www.youtube.com/@EnglishbyTomYT" rel="noopener noreferrer" target="_blank">
              <Image
                src={YoutubeIcon}
                height="32"
                width="32"
                quality={100}
                unoptimized={true}
                alt="English by Tom Youtube channel"
              />
            </a>
            {/* <a href="">
            <Image
              src={InstagramIcon}
              height="32"
              width="32"
              quality={100}
              unoptimized={true}
              alt="English by Tom Youtube channel"
            />
          </a> */}
            <a href="https://www.facebook.com/englishbytom" rel="noopener noreferrer" target="_blank">
              <Image
                src={FacebookIcon}
                height="32"
                width="32"
                quality={100}
                unoptimized={true}
                alt="English by Tom Facebook Page"
              />
            </a>
          </div>
          <small className="text-xs">© Copyright 2025 EnglishbyTom.com</small>
        </div>
      </footer>
    </div>
  )
}