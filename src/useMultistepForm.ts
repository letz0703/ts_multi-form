import {ReactElement, useState, useEffect} from "react"

export const useMultistepform = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i
      return i + 1
    })
  }
  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i
      return i - 1
    })
  }

  const goto = (index: number) => {
    setCurrentStepIndex(index)
  }

  return {
    //
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    goto,
    next,
    back
  }
}
