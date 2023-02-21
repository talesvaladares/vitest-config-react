import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { it, describe} from 'vitest';
import { App } from './App';

describe("App", () => {

  it ("Shoul be able render", () => {
    render(<App/>);

    //screen.logTestingPlaygroundURL()

    expect(screen.queryByText('Olá mundo')).toBeInTheDocument();    

  });

});