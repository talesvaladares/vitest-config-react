import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { it, describe, vi} from 'vitest';

import { Button } from './Button';

describe('Button' , () => {
  
  it('Should be able render a button' , () => {
     render(<Button>testes</Button>);

    //  screen.logTestingPlaygroundURL();

    //expect(screen.getByTestId('button')).toBeInTheDocument();
    
      // screen.getByRole('button', {
      //   name: /teste/i
      // })

      expect(screen.getByRole('button', {name : /testes/i})).toBeInTheDocument();

  });

  it('should be able a fire event', () => {

    screen.logTestingPlaygroundURL();

    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>click</Button>);

    fireEvent.click(screen.getByRole('button', {name : /click/i}));

    expect(handleClick).toHaveBeenCalledTimes(1);

  })

  it('should be able a style default', () => {

    render(<Button>click</Button>);

    expect(screen.getByRole('button', {name: /click/i})).toHaveStyle({
      'backgroundColor': 'red',
      width: '200px'
    })

  })
});