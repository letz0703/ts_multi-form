import FormWrapper from "./FormWrapper"

export function UserForm() {
  return (
    <FormWrapper title='User Detail'>
      <label>First Name</label>
      <input autoFocus required type='text' />
      <label>Last Name</label>
      <input autoFocus required type='text' />
      <label>Age</label>
      <input required min={1} type='number' />
    </FormWrapper>
  )
}
