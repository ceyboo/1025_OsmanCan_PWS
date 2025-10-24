import { useState } from 'react';
import './Intro.css'
import Portfolio from './Portfolio';

export default function Intro(){
    const [isOpen, setIsOpen] = useState(null);

    const toggleOpen = id => () => setIsOpen(
        isOpen => isOpen === id ? null : id,
    );

    return (
        <>
            <div id="main-context">
                <header id="header">
                    <i class="fa fa-snowflake-o" aria-hidden="true"></i>
                </header>
                <section id="illustration-context">
                    <Portfolio 
                        title="ILLUSTRATION"
                        link="illustration"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id est vulputate, bibendum libero vel, pellentesque nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                        isOpen={isOpen === 0}
                        toggle={toggleOpen(0)}
                    />
                </section>
                <section id="desing-context">
                    <Portfolio 
                        title="DESIGN"
                        link="design"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id est vulputate, bibendum libero vel, pellentesque nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        isOpen={isOpen === 1}
                        toggle={toggleOpen(1)}
                    />
                </section>
                <section id="motion-context">                    
                    <Portfolio 
                        title="ANIMATION"
                        link="animation"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id est vulputate, bibendum libero vel, pellentesque nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                        isOpen={isOpen === 2}
                        toggle={toggleOpen(2)}
                    />
                </section>
                <section id="aboutme-context">                    
                    <Portfolio 
                        title="ABOUT ME"
                        link="aboutme"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id est vulputate, bibendum libero vel, pellentesque nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        isOpen={isOpen === 3}
                        toggle={toggleOpen(3)}
                    />
                </section>
                <footer id="footer">
                    <p>BUSINESS INQUIRESS: <a href="">osmancankaraci@gmail.com</a></p>
                </footer>
            </div>
        </>
    )
}