/** @jest-environment jsdom */

import { screen } from '@testing-library/react';
import TestComponent from '.';

describe("TestComponent", () => {

    beforeEach(() => {
        render(<TestComponent />);
    })

    test("Displays a heading", () => {
        const heading = screen.getByRole("heading");
        expect(heading).toBeTruthy();
    })

    test("Displays a heading with specific text", () => {
        const heading = screen.getByRole("heading");
        expect(heading.textContent).toBe("Artists");
    })

})
