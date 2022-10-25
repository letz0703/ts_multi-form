import React from "react"
import FormWrapper from "./FormWrapper"

type AccountFormProps = {
  email: string
  password: string
}

export function AccountForm({email, password}: AccountFormProps) {
  return (
    <FormWrapper title='Account'>
      <label>Email</label>
      <input type='email' autoFocus required />
      <label>Password</label>
      <input type='password' required />
    </FormWrapper>
  )
}
