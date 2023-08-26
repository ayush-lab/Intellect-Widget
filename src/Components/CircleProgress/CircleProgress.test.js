import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CircleProgress from './CircleProgress'; 

describe('CircleProgress Component', () => {
  it('renders the circular progress element', () => {
    const { getByTestId } = render(<CircleProgress />);
    const circularProgress = getByTestId('circularProgress');
    expect(circularProgress).toBeInTheDocument();
  });

  it('updates progress when input value changes', () => {
    const setProgressMock = jest.fn();
    const { getByTestId } = render(<CircleProgress setProgress={setProgressMock} />);
    const input = getByTestId('sliderInput'); 
    
    fireEvent.change(input, { target: { value: '5' } });

    expect(setProgressMock).toHaveBeenCalledWith('5');
  });

  it('shows an alert when input value is not a number', () => {
    const setProgressMock = jest.fn();
    const { getByTestId } = render(<CircleProgress setProgress={setProgressMock} />);
    const input = getByTestId('sliderInput'); 

    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    fireEvent.change(input, { target: { value: 'NaN' } });

    expect(alertMock).toHaveBeenCalledWith('please enter a number');
    expect(setProgressMock).not.toHaveBeenCalled();
  });

  it('shows an alert for invalid input value', () => {
    const setProgressMock = jest.fn();
    const { getByTestId } = render(<CircleProgress setProgress={setProgressMock} />);
    const input = getByTestId('sliderInput'); 

    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    fireEvent.change(input, { target: { value: '15' } });

    expect(alertMock).toHaveBeenCalledWith('Invalid input, Enter between 0 and 10. Your value = 15');
    expect(setProgressMock).not.toHaveBeenCalled();
  });

});
