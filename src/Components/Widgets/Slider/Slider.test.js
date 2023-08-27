import { render, fireEvent} from '@testing-library/react';
import Slider from './Slider';

describe('Slider Component', () => {
  it('updates progress value when slider input changes', () => {
    const { container } = render(<Slider />);
    const sliderInput = container.querySelector('input[type="range"]');

    fireEvent.change(sliderInput, { target: { value: '5' } });

    expect(sliderInput.value).toBe('5');
  });

  it('To confirm if the value of slider does not go beyond 10', () => {
    const { container } = render(<Slider />);
    const sliderInput = container.querySelector('input[type="range"]');

    fireEvent.change(sliderInput, { target: { value: '15' } });

    expect(sliderInput.value).toBe('10');
  });

});

