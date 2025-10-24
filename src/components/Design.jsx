import './Design.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export default function Design(){
    const history = useHistory();

    const handleClick = (event) => {
        history.push(`/`)
    }

    return (
        <>
            <div className='detail-content'>
                <div className='detail-title'>
                    <h2>DESIGN</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id est vulputate, bibendum libero vel, pellentesque nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='detail-sample'>
                    <img src="/samples/sample1.jpg" alt='sample1' />
                    <img src="/samples/sample2.jpg" alt='sample2' />
                    <img src="/samples/sample3.jpg" alt='sample3' />
                    <img src="/samples/sample1.jpg" alt='sample1' />
                    <img src="/samples/sample2.jpg" alt='sample2' />
                    <img src="/samples/sample3.jpg" alt='sample3' />
                    <img src="/samples/sample2.jpg" alt='sample2' />
                    <img src="/samples/sample3.jpg" alt='sample3' />
                    <img src="/samples/sample1.jpg" alt='sample1' />
                    <img src="/samples/sample2.jpg" alt='sample2' />
                    <img src="/samples/sample3.jpg" alt='sample3' />
                    <img src="/samples/sample1.jpg" alt='sample1' />
                    <img src="/samples/sample2.jpg" alt='sample2' />
                    <img src="/samples/sample3.jpg" alt='sample3' />
                    <img src="/samples/sample2.jpg" alt='sample2' />
                    <img src="/samples/sample3.jpg" alt='sample3' />
                </div>
                <div className='detail-action'>
                    <div>
                        <i class="fa fa-close"  onClick={handleClick}></i>
                        <p>Close</p>
                    </div>
                </div>
            </div>    
        </>
    )
}