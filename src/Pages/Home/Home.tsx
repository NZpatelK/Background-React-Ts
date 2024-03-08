import React from 'react';
import Rain from '../Rain/Rain';
import './Home.css';
// import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    // const nav = useNavigate();
    return (
        <div>
            {/* <h1>Welcome to the Homepage!</h1>
            <p>This is the content of the homepage.11</p>
            <div onClick={() => nav('rain')}>Rain</div> */}
            <Rain />
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