import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ErrorPage = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                Error main
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default ErrorPage;