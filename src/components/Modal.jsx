import '../index.css'

function Modal( { selectedImg, setSelectedImg } ) {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null)
        }
    }
    
    return (
        <div className='backdrop' onClick={handleClick}>
            <div className='backdrop-card'>
                <img src={selectedImg} alt="enlarged pic" />
            </div>
        </div>
    )
}

export default Modal