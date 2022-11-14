import { render, screen } from '@testing-library/react'

import App from './App';
import React from 'react';

//import userEvent from '@testing-library/user-event';

describe('Simple working test',  () => {
  it('the title is visible',  () => {
    render(<App />)
    expect(screen.getByText(/learn/i)).toBeInTheDocument()
  })

})