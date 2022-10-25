import FormWrapper from "./FormWrapper"

type UserFormProps = {
  firstName: string
  lastName: string
  age: string
}

export function UserForm({firstName, lastName, age, updateFields}: UserFormProps) {
  updateFields({firstName: "wow", lastName: "mani"})
  return (
    <FormWrapper title='User Detail'>
      <label>First Name</label>
      <input autoFocus required type='text' value={firstName} />
      <label>Last Name</label>
      <input required type='text' value={lastName} />
      <label>Age</label>
      <input required min={1} type='number' value={age} />
    </FormWrapper>
  )
}
