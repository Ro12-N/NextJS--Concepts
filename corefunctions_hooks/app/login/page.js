"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

function LoginPage() {
    const router = useRouter();

  return (
    <div>LoginPage
        <div>
         <button onClick={() => router.replace('/products')}>Go to Products</button> 
         <button onClick={() => router.back()}>Back</button>
         {/* // replace method will replace the current entry in the history stack, so the user won't be able to go back to the login page using the back button. 
         // and push method will add a new entry to the history stack, allowing the user to go back to the login page using the back button.
         // and back method will navigate to the previous page in the history stack, which in this case would be the login page.
         // and forward method will navigate to the next page in the history stack, if there is one.
         // and refresh method will reload the current page.
        */
        }
         </div>

    </div>
  )
}

export default LoginPage