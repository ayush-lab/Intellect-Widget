import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import Slider from './Slider';

describe('Slider Component', () => {
  it('updates progress value when slider input changes', () => {
    const { container } = render(<Slider />);
    const sliderInput = container.querySelector('input[type="range"]');

    fireEvent.change(sliderInput, { target: { value: '5' } });

    expect(sliderInput.value).toBe('5');
  });

});
