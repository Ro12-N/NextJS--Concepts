import { createUser } from '@/actions'
import React from 'react'
import { useFormState } from 'react-dom'

function Form() {
    const [state,formAction]=useFormState(createUser,{ });
  return (
    <div>
        <form action={formAction}>
            <input name="email" placeholder="john@example.com" />
            <button type="submit">Submit</button>
            {state.error && <p>{state.error}</p>}
        </form>
    </div>
  )
}

export default Form