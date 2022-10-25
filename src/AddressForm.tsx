import FormWrapper from "./FormWrapper"

type AddressForm = {
  street: string
  city: string
  state: string
  zip: string
}

type AddressFormProps = AddressForm & {
  updateFields: (fields: Partial<AddressForm>) => void
}

export default function AddressForm({street, city, state, zip, updateFields}: AddressFormProps) {
  return (
    <FormWrapper title='Address'>
      <label>Street</label>
      <input value={street} type='text' autoFocus required onChange={(e) => updateFields({street: e.target.value})} />
      <label>City</label>
      <input value={city} type='text' required onChange={(e) => updateFields({city: e.target.value})} />
      <label>State</label>
      <input value={state} type='text' required onChange={(e) => updateFields({state: e.target.value})} />
      <label>Zip</label>
      <input value={zip} type='text' required onChange={(e) => updateFields({zip: e.target.value})} />
    </FormWrapper>
  )
}
