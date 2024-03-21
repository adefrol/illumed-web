"use client"
import { cn } from "@/lib/utils"
import { MotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { Jost, Varela_Round } from "next/font/google"
import { FC, useRef } from "react"
import { motion } from "framer-motion"

const jost = Varela_Round({ subsets: ["latin"], weight: "400" })





export const Logo: FC = () => {

  const { scrollYProgress } = useScroll({
    smooth: 0.5,
  })

  const translateY = useTransform(scrollYProgress, [0, 1], ["20rem", "0rem"])
  const translateX = useTransform(scrollYProgress, [0, 1], ["15rem", "0rem"])
  const fontSize = useTransform(scrollYProgress, [0, 1], ["8rem", "1.5rem"])

  return (
    <div className="relative h-full w-[20%] ">
      <motion.div className="flex items-center absolute h-full" style={{ translateX, translateY, fontSize: fontSize }}>

        <p className={cn("", jost.className)}>
          illumed<span className="text-violet-400">Web</span>
        </p>
      </motion.div>
    </div>
  )
}
