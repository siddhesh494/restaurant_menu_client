import React from 'react'
import './Accordion.css'
import DeleteIcon from '../../assests/PNG/delete.png'

const Accordion = (props) => {
  
  // const [accordionState, setAccordionState] = useState(false)
  return (
    <div
      className={`accordion-container ${props.classes?.accordionContainer}`}
    >
      {/* heading */}
      <div
        className={props.classes?.accordionHead || `accordion-head`}
        onClick={props.handleOnClick}
      >
        <span
          className={props.classes?.accordionTitle || `accordion-title-style`}
        >{props.title}</span>
        <div className='flex flex-row gap-4'>
          {props.showDelete ? <img 
            src={DeleteIcon}
            alt="DeleteIcon"
            className='cursor-pointer brightness-0 invert '
            onClick={() => {
              props.onDelete && props.onDelete()
              props.handleOnClick()
            }}
          /> : null}
          <span
            className={props.classes?.accordionIcon || `accordion-icon-style`}
          >
            {props.isOpen ? '\u2212': '\u002B'}
          </span>
        </div>
      </div>
      
      {props.isOpen && (
        <div
          className={props.classes?.accordionBody || `accordion-body`}
        >
          {props.children}
        </div>
      )}
    </div>
  )
}

export default Accordion