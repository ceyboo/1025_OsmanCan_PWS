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
                <section id="illustration-context">
                    <Portfolio 
                        title="Illustration"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id est vulputate, bibendum libero vel, pellentesque nunc. "
                        isOpen={isOpen === 0}
                        toggle={toggleOpen(0)}
                    />
                </section>
                <section id="desing-context">
                    <Portfolio 
                        title="Design"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id est vulputate, bibendum libero vel, pellentesque nunc. "
                        isOpen={isOpen === 1}
                        toggle={toggleOpen(1)}
                    />
                </section>
                <section id="motion-context">                    
                    <Portfolio 
                        title="Motion"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id est vulputate, bibendum libero vel, pellentesque nunc. "
                        isOpen={isOpen === 2}
                        toggle={toggleOpen(2)}
                    />
                </section>
                <section id="aboutme-context">                    
                    <Portfolio 
                        title="About Me"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id est vulputate, bibendum libero vel, pellentesque nunc. "
                        isOpen={isOpen === 3}
                        toggle={toggleOpen(3)}
                    />
                </section>
                <section id="footer">
                    <p>Business Inquries</p>
                    <a href="">osmancankaraci@gmail.com</a>
                </section>
            </div>
        </>
    )
}