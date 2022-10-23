import FormWrapper from "./FormWrapper"

export default function AddressFrom() {
  return (
    <FormWrapper title='Address'>
      <label>Street</label>
      <input type='text' autoFocus required />
      <label>City</label>
      <input type='text' required />
      <label>State</label>
      <input type='text' required />
      <label>Zip</label>
      <input type='text' required />
    </FormWrapper>
  )
}
