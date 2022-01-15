import React from "react";
import MutationObserver from 'mutationobserver-shim';
// import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
// import '@testing-library/jest-dom/extend-expect';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render (<CheckoutForm />)
});



test("shows success message on submit with form details", async () => {
    render (<CheckoutForm />)


    const firstNameField = screen.getByLabelText(/First Name:*/i);
    const lastNameField = screen.getByLabelText(/Last Name:*/i);
    const addressField = screen.getByLabelText(/Address:*/i);
    const cityField = screen.getByLabelText(/City:*/i);
    const stateField = screen.getByLabelText(/State:*/i);
    const zipField = screen.getByLabelText(/Zip:*/i);
    const messageField = screen.getByTestId('successMessage')

    userEvent.type(firstNameField, 'douglas');
    userEvent.type(lastNameField, 'wilson');
    userEvent.type(addressField, '573 Taffy Lane');
    userEvent.type(cityField, 'Cleveland');
    userEvent.type(stateField, 'Ohio');
    userEvent.type(zipField, '40143');

    
    

    const button = screen.getByRole('button');
    userEvent.click(button);
    
    await waitFor(()=> {
        const firstNameDisplay = screen.queryByText('douglas');
        const lastNameDisplay = screen.queryByText('wilson');
        const addressDisplay = screen.queryByText('573 Taffy Lane');
        const cityDisplay = screen.queryByText('Cleveland');
        const stateDisplay = screen.queryByText('Ohio');
        const zipDisplay = screen.queryByText('40143');
        const messageDisplay = screen.getByTestId('successMessage');

        console.log(messageDisplay);

        expect(messageDisplay).toBeTruthy();
        // expect(firstNameDisplay).toBeInTheDocument();
        // expect(lastNameDisplay).toBeInTheDocument();
        // expect(addressDisplay).toBeInTheDocument();
        // expect(cityDisplay).toBeInTheDocument();
        // expect(stateDisplay).toBeInTheDocument();
        // expect(zipDisplay).toBeInTheDocument();
    })
}); 
