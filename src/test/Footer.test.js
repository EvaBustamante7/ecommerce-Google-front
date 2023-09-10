import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../components/footer/Footer';

test('renders social media icons', () => {
    const { getByTestId } = render(
        <MemoryRouter>
            <Footer />
        </MemoryRouter>
    );

    const facebookIcon = getByTestId('facebook-icon');
    const twitterIcon = getByTestId('twitter-icon');
    const instagramIcon = getByTestId('instagram-icon');
    const linkedinIcon = getByTestId('linkedin-icon');

    expect(facebookIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();
});

test('renders footer links', () => {
    const { getAllByText } = render(
        <MemoryRouter>
            <Footer />
        </MemoryRouter>
    );

    const nosotrosLink = getAllByText('Nosotros');
    const trabajosLink = getAllByText('Trabajos');
    const recursosLink = getAllByText('Recursos');
    const colaboracionesLink = getAllByText('Colaboraciones');
    const soporteLink = getAllByText('Soporte Técnico');

    expect(nosotrosLink.length).toBeGreaterThan(0);
    expect(trabajosLink.length).toBeGreaterThan(0);
    expect(recursosLink.length).toBeGreaterThan(0);
    expect(colaboracionesLink.length).toBeGreaterThan(0);
    expect(soporteLink.length).toBeGreaterThan(0);
});


