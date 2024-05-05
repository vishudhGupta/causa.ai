import React, { useEffect } from 'react'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import './CssFiles/Captcha.css'

const Captcha = () => {
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);


    return (
        <>
            <div className="captcha_container">
                <div className="form-group">
                    <div className="canvas_captcha">
                        <LoadCanvasTemplate />
                    </div>
                    <div className="input_captcha">
                        <div><input placeholder="Enter Captcha Value" id="user_captcha_input" name="user_captcha_input" type="text"></input></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Captcha