import React from 'react';
import Rain from '../../Components/Rain/Rain';
import './Home.css';
import Swirl from '../../Components/Swirl/Swirl';
import Navbar from '../../Components/Navbar/Navbar';

const Home: React.FC = () => {
    return (
        <div>
            {/* <Rain /> */}
            <Swirl />
            <Navbar/>
            <section>
                <h1>Section 1</h1>
                <p>This is the content of section 1.</p>
            </section>
            <section>
                <h1>Section 2</h1>
                <p>This is the content of section 2.</p>
            </section>
            <section>
                <h1>Section 3</h1>
                <p>This is the content of section 3.</p>
            </section>
            <section>
                <h1>Section 4</h1>
                <p>This is the content of section 4.</p>
            </section>
            <section>
                <h1>Section 5</h1>
                <p>This is the content of section 5.</p>
            </section>

        </div>
    );
};

export default Home;