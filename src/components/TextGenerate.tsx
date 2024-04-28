"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";


const words = `A music academy's website serves as a comprehensive resource for aspiring musicians.  Explore course offerings for a variety of instruments, all taught by esteemed instructors with proven musical expertise. Many academies showcase student achievements through performance videos, and some even provide virtual tours that allow you to experience their facilities from the comfort of your home.
`;

function TextGenerate() {
  return (
    <TextGenerateEffect className="mx-16 my-24" words={words} />
  )
}

export default TextGenerate