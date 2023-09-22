'use client' // Error components must be Client Components

import { useEffect } from 'react'

type ErrorProps = {
  error: Error
  reset: () => void
}

export default function ProductsError({
  error,
  reset,
}: ErrorProps) {

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}