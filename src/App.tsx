import {AccountFrom} from "./AccountForm"
import AddressFrom from "./AddressForm"
import {useMultistepform} from "./useMultistepForm"
import {UserForm} from "./UserForm"

function App() {
  const {steps, currentStepIndex, step, isFirstStep, back, next, isLastStep} =
    // useMultistepform([<div>one</div>, <div>two</div>])
    useMultistepform([<UserForm />, <AccountFrom />, <AddressFrom />])
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
        <button type='button' onClick={next}>
          {!isLastStep ? "next" : "the END"}
        </button>
      </form>
    </div>
  )
}

export default App
