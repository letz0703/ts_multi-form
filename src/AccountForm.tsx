import React from "react"
import FormWrapper from "./FormWrapper"

export function AccountFrom() {
  return (
    <FormWrapper title='Account'>
      <label>Email</label>
      <input type='email' autoFocus required />
      <label>Password</label>
      <input type='password' required />
    </FormWrapper>
  )
}
