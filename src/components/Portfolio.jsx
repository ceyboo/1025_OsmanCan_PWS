import './Portfolio.css'
export default function Portfolio({content, title, isOpen, toggle}){

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
                <p>{content}</p>
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
          </div>
        </div>
      );
}