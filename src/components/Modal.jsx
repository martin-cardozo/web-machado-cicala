import '../index.css'

function Modal( { selectedImg, setSelectedImg } ) {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null)
        }
    }
    
    return (
        <div className='backdrop' onClick={handleClick}>
            <img id='card' src={selectedImg} alt="enlarged pic" />
        </div>
    )
}

export default Modal