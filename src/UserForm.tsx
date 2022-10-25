import FormWrapper from "./FormWrapper"

type UserFormProps = {
  firstName: string
  lastName: string
  age: string
}

export function UserForm({firstName, lastName, age}: UserFormProps) {
  return (
    <FormWrapper title='User Detail'>
      <label>First Name</label>
      <input autoFocus required type='text' />
      <label>Last Name</label>
      <input required type='text' />
      <label>Age</label>
      <input required min={1} type='number' />
    </FormWrapper>
  )
}
