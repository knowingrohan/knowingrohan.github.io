import React from 'react';
import '../styles/main.scss';
import TypewriterText from './TypewriterText';
// import Device from './Device';
import Header from './Header';
import Footer from './Footer';
import Window from './Window';
const App = () => {

    return (
        <>
            <Header />
            <main>
                <Window>
                    <TypewriterText value="Hello World. I'm a frontend developer with a keen eye for aesthetics and UI/UX. Chekout various hotspots on this site to know more about me" />
                </Window>
            </main>
            <Footer />
        </>
    );

}

export default App;