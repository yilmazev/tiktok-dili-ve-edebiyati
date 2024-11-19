"use client"

import Button from "@/components/Button"
import { questions } from "@/services/data/questions.json"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [ selectedOptions, setSelectedOptions ] = useState<Record<number, number>>({})

  const handleOptionClick = (questionIndex: number, optionIndex: number) => {
    setSelectedOptions((prev) => ({ ...prev, [questionIndex]: optionIndex }))

    const currentQuestion = document.getElementById(`question-${questionIndex}`)
    if (currentQuestion) {
      const nextQuestion = currentQuestion.nextElementSibling
      if (nextQuestion) {
        nextQuestion.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <div className="flex size-full justify-center">
      <div className="w-full max-w-[480px] px-3">
        {questions.map((item, questionIndex) => (
          <div id={`question-${questionIndex}`} key={questionIndex} className="flex h-[calc(100vh)] flex-col overflow-hidden py-5 first:h-[calc(100%-10px)]">
            <div className="flex h-full flex-1 flex-col overflow-hidden rounded-2xl bg-[#ffffff14]">
              <div className="relative size-full flex-1">
                <Image
                  src={item.source}
                  alt={item.title}
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <p className="p-4 font-medium text-white">{item.title}</p>
            </div>
            <div className="flex flex-col gap-2 pt-4">
              {item.options.map((option, optionIndex) => {
                const isSelected = selectedOptions[questionIndex] === optionIndex

                return (
                  <Button
                    key={optionIndex}
                    buttonType="secondary"
                    size="small"
                    onClick={() => handleOptionClick(questionIndex, optionIndex)}
                    className={`${isSelected ? "!bg-[#fe2c55] !text-white" : ""}`}
                  >
                    {option}
                  </Button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}