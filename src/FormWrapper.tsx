// _wrapper and ReactNode 2022.10.24/월
import {ReactNode} from "react"

type FormWrapperProps = {
  title: string
  children: ReactNode
}
export default function FormWrapper({title, children}: FormWrapperProps) {
  // FormWrapperProps as the Type https://youtu.be/uDCBSnWkuH0?t=921
  return (
    <div>
      <h2 style={{textAlign: "center", margin: "0", marginBottom: "2rem"}}>{title}</h2>
      <div style={{display: "grid", gap: "1rem .5rem", justifyContent: "flex-start", gridTemplateColumns: "auto minmax(auto, 400px)"}}>{children}</div>
    </div>
  )
}
