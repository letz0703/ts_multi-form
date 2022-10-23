import {useMultistepform} from "./useMultistepForm"

function App() {
  const {steps, currentStepIndex, step, isFirstStep, back, next, isLastStep} = useMultistepform([<div>one</div>, <div>two</div>])
  return (
    <div
      style={{
        //
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial"
      }}
    >
      <form>
        <div style={{position: "absolute", top: ".5rem", right: ".5rem"}}>
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        {!isFirstStep && (
          <button type='button' onClick={back}>
            Back
          </button>
        )}
        {!isLastStep ? (
          <button type='button' onClick={next}>
            next
          </button>
        ) : (
          <span style={{color: "red", marginLeft: "1rem"}}>마지막 페이지 입니다</span>
        )}
      </form>
    </div>
  )
}

export default App
