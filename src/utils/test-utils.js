import { cleanup, render } from '@testing-library/react'

import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

const customRender = (ui, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  })

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render }