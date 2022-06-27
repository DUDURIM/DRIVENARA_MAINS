export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Drive Nara
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                특징
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                체험
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                업데이트
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                갤러리
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                인재채용
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                구성원
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                연락하기
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
