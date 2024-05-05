import React, { useState } from 'react'
import Button from '../Button'
import '../CssFiles/FirNumber.css'
import Captcha from '../Captcha'

const CauseList = () => {
  const [courtState, setCourtState] = useState('Court Complex')
  const handleOnclick = (newCourt) => {
    setCourtState(newCourt);
  }
  return (
    <>
  <div className='causelist_heading'>
    <h1>Cause List/Daily Board</h1>
  </div>
    <div className='form_section'>
      <form className="form_container" action='/'>
        <div className='heading'>
          <h1>All Fields Marked with <span className='asteric_important'>*</span>are required</h1>
        </div>
        <div className="radio_button">
          <label>
            <input type='radio' name='option' value='Court Complex' onClick={() => handleOnclick('Court Complex')} defaultChecked />
            Court Complex
          </label>
          <label>
            <input type="radio" name="option" value="Court Establishment" onClick={() => handleOnclick('Court Establishment')} />
            Court Establishment
          </label>
        </div>
        <div className="CourtState_options">
          <label htmlFor="court">{courtState}<span className='asteric_important'>*</span></label>
          <select >
            <option value="">---Select{courtState}---</option>
            {courtState === 'Court Complex' ? (
              <>
                <option value="Complex Option 1">Kanpur Nagar District Court Complex</option>
                <option value="Complex Option 2">Commercial Court Kanpur Nagar</option>
              </>
            ) : (
              <>
                <option value="Establishment Option 1">District and Session Judge</option>
                <option value="Establishment Option 2">Chief Materopilition Magitrate</option>
                <option value="Establishment Option 2">Civil Judge Senior Division</option>
                <option value="Establishment Option 2">Civil Judge Junior  Division</option>
              </>
            )}
          </select>
        </div>
        <div className="CourtState_options">
          <label htmlFor="court">Court Number<span className='asteric_important'>*</span></label>

          <select value=''>
            <option value="Default State" >---Select Court---</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 2">Option 3</option>
            <option value="Option 2">Option 4</option>
            <option value="Option 2">Option 5</option>
            <option value="Option 2">Option 6</option>
            <option value="Option 2">Option 7</option>
            <option value="Option 2">Option 8</option>
          </select>
        </div>
       
        <div className='input_fields'>
          <label htmlFor='court'>Cause List Date </label>
          <input type='Date' placeholder='Type Year' className='fir_year_input' />
        </div>
        <div className="radio_button">
          <label>
            <input type='radio' name='option' value='' defaultChecked />
            Civil
          </label>
          <label>
            <input type="radio" name="option" value="" />
            Criminal
          </label>
       
        </div>
        <div className='captcha input_fields'>
        <label htmlFor="court">Please Enter the Captcha<span className='asteric_important'>*</span></label>
      <Captcha />
      </div>
            <Button />
      </form>
    </div>



  </>
  )
}

export default CauseList