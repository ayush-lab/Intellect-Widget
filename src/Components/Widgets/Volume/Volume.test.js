import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Volume from './Volume';

describe('Volume Component', () => {
  it('renders volume bars with initial state', () => {
    const { container } = render(<Volume />);
    const volumeBars = container.querySelectorAll('.bar');

    expect(volumeBars.length).toBe(5);
    // checking the total number of bars. Asserting the total number of bars to be 5

    expect(volumeBars[0]).toHaveStyle('background: #819DA8');
    expect(volumeBars[1]).toHaveStyle('background: #819DA8');
    expect(volumeBars[2]).toHaveStyle('background: #819DA8');
    expect(volumeBars[3]).toHaveStyle('background: #819DA8');
    expect(volumeBars[4]).toHaveStyle('background: #819DA8');
    // Asserting the default color to be #819DA8

  });

  it('updates volume bars and status when clicked, Medium when 3rd bar is clicked', async () => {
    const { container } = render(<Volume />);
    const volumeBars = container.querySelectorAll('.bar');
    let statusElement = screen.getByTestId('volumeStatus').textContent

    expect(statusElement).toBe("Volume level : Muted");
    fireEvent.click(volumeBars[2]); // Click on the third bar

    expect(volumeBars[0]).toHaveStyle('background-color: #819DA8');
    expect(volumeBars[1]).toHaveStyle('background-color: #819DA8');
    expect(volumeBars[2]).toHaveStyle('background-color: white');
    expect(volumeBars[3]).toHaveStyle('background-color: white');
    expect(volumeBars[4]).toHaveStyle('background-color: white');

    // Asserting that if the third bar is clicked, then only the first 3 bars will be white. 

    statusElement = screen.getByTestId('volumeStatus').textContent
    await waitFor(() =>
        expect(statusElement).toBe("Volume level : Medium")
    );
    // When 3 bars are white out of 5, the status should be shown as Medium.
  });

  it('updates status to "Low" when volume level is less than 3', async() => {
    const { container } = render(<Volume />);
    const volumeBars = container.querySelectorAll('.bar');
    let statusElement = screen.getByTestId('volumeStatus').textContent
    expect(statusElement).toBe("Volume level : Muted");
    fireEvent.click(volumeBars[3]); // Click on the second bar
    statusElement = screen.getByTestId('volumeStatus').textContent
    await waitFor(() =>
        expect(statusElement).toBe("Volume level : Low")
    );
  });

  it('updates status to "High" when volume level is more than 3', async() => {
    const { container } = render(<Volume />);
    const volumeBars = container.querySelectorAll('.Volume .bar');
    let statusElement = screen.getByTestId('volumeStatus').textContent
    expect(statusElement).toBe("Volume level : Muted");
    fireEvent.click(volumeBars[0]); // Click on the 5th bar
    statusElement = screen.getByTestId('volumeStatus').textContent
    await waitFor(() =>
        expect(statusElement).toBe("Volume level : High")
    );
  });
});