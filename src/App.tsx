import {FormEvent} from "react"
import {AccountFrom} from "./AccountForm"
import AddressFrom from "./AddressForm"
import {useMultistepform} from "./useMultistepForm"
import {UserForm} from "./UserForm"

function App() {
  const {steps, currentStepIndex, step, isFirstStep, back, next, isLastStep} =
    // useMultistepform([<div>one</div>, <div>two</div>])
    useMultistepform([<UserForm />, <AccountFrom />, <AddressFrom />])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    next()
  }
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
      <form onSubmit={onSubmit}>
        <div style={{position: "absolute", top: ".5rem", right: ".5rem"}}>
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div style={{marginTop: "1rem", display: "flex", gap: ".5rem", justifyContent: "flex-end"}}>
          {!isFirstStep && (
            <button type='submit' onClick={back}>
              Back
            </button>
          )}
          <button type='submit'>{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  )
}

export default App
