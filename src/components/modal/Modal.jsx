import React , {useState , useEffect , useRef} from 'react'
import PropTypes from 'prop-types'
import './modal.css'

const Modal = props => {
    
    const [active , setActive] = useState(false);

    useEffect(() => {
        setActive(props.active)
    },[props.active])

  return (
    <div id= {props.id} className={`modal ${active ? 'active' : ''}`}>
            {props.children}
    </div>
  )
}

Modal.propTypes = {
    active: PropTypes.bool,
    id : PropTypes.string
}

export const ModalContent = props => {

  // ! contentRef : tua nhu dung class , id thay the
  const contentRef = useRef(); 

  const closeModal = () => {
      // ! parentNode => Node cha cua contentRef
      contentRef.current.parentNode.classList.remove('active');
      // if(props.onClose) props.onClose();
  }

  return (
    <div ref={contentRef} className="modal-content" id={props.id}>

        <div className="close-modal" onClick={closeModal}>
          <i className="uil uil-times"></i>
        </div>
        {props.children}


    </div>
  )
}

ModalContent.propTypes = {
  // onClose: PropTypes.func,
  id:PropTypes.string,
}


export default Modal