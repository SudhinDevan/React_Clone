import './Banner.css'

export function Banner(){
  return(
    <>
      <div className="banner">
        <div className="content">
          <h1 className='title'>Movie Name</h1>
          <div className="banner_buttons">
            <button className="button">Play</button>
            <button className="button">My list</button>
          </div>
          <h1 className="description">This is a sample description and the project is a sample react project</h1>
        </div>
        <div className="fade_bottom"></div>
      </div>



    </>
  )
}