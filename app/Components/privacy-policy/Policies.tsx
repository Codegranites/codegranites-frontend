import { PRIVACY_POLICY } from '@/libs/constants'
import Link from 'next/link'
import React from 'react'

function Policies() {
  return (
      <section>
          <ul>
              {PRIVACY_POLICY.map((item) => (
                  <li key={item.id}>{ item.header}</li>
              ))}
          </ul>

          <ul>
              {PRIVACY_POLICY.map((item) => (
                  <li key={item.id}>
                      <span>{item.header}</span>
                      <span>{item.details}</span>
                  </li>
              ))}
          </ul>
          <p>By using our services, you agree to the terms outlined in our Privacy Policy. For more details on how we handle your data, please review our full Privacy Policy.</p>
          <p>If you have any questions or concerns, please contact us at <Link href={`mailto:contact@codergranites.com`}>contact@codegranites.com</Link> .</p>
    </section>
  )
}

export default Policies