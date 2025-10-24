import './AboutMe.css'

export default function AboutMe({description, title, isOpen, toggle, link}){

    return (
        <div className="portfolio">
          <div style = {{display:isOpen ? 'none' : 'block'}}>
            <button onClick={toggle}>
                {title}
            </button>
          </div>
          <div style = {{display:isOpen ? 'flex' : 'none'}} onClick={toggle} className='aboutme-content'>
            <div className='aboutme-title'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className='aboutme-sample'>
                <img src="/samples/sample1.jpg" alt='sample1' />
            </div>
            <div className='aboutme-action'>
                <div>
                    <i class="fa fa-close"></i>
                    <p>Close</p>
                </div>
            </div>
          </div>
        </div>
      );
}