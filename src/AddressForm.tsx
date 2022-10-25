import FormWrapper from "./FormWrapper"

type AddressFormProps = {
  street: string
  city: string
  state: string
  zip: string
}

export default function AddressForm({street, city, state, zip}: AddressFormProps) {
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
