import React from "react"
import FormWrapper from "./FormWrapper"

type AccountData = {
  email: string
  password: string
}

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void
}

export function AccountForm({email, password, updateFields}: AccountFormProps) {
  return (
    <FormWrapper title='Account'>
      <label>Email</label>
      <input value={email} type='email' autoFocus required onChange={(e) => updateFields({email: e.target.value})} />
      <label>Password</label>
      <input value={password} type='password' required onChange={(e) => updateFields({password: e.target.value})} />
    </FormWrapper>
  )
}
