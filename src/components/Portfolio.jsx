import './Portfolio.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export default function Portfolio({description, title, isOpen, toggle, link}){
    const history = useHistory();

    const handleClick = (event) => {
        history.push(`/${link}`)
    }

    return (
        <div className="portfolio">
          <div style = {{display:isOpen ? 'none' : 'block'}}>
            <button onClick={toggle}>
                {title}
            </button>
          </div>
          <div style = {{display:isOpen ? 'flex' : 'none'}} onClick={toggle} className='content'>
            <div className='title'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className='sample'>
                <img src="/samples/sample1.jpg" alt='sample1' />
                <img src="/samples/sample2.jpg" alt='sample2' />
                <img src="/samples/sample3.jpg" alt='sample3' />
                <img src="/samples/sample1.jpg" alt='sample1' />
                <img src="/samples/sample2.jpg" alt='sample2' />
                <img src="/samples/sample3.jpg" alt='sample3' />
                <img src="/samples/sample2.jpg" alt='sample2' />
                <img src="/samples/sample3.jpg" alt='sample3' />
            </div>
            <div className='action'>
                <div>
                    <i class="fa fa-close"></i>
                    <p>Close</p>
                </div>
                <div>
                    <p>More</p>
                    <i class="fa fa-plus" onClick={handleClick}></i>
                </div>
            </div>
          </div>
        </div>
      );
}