import React, { useState,useEffect } from 'react'
import axios from "axios"
import '../CssFiles/CaseStatus.css'
import { Link, Route, Routes } from 'react-router-dom'
import CaseNumber from './CaseNumber'
import FirNumber from './FirNumber'
import PartyName from './PartyName'
import AdvocateName from './AdvocateName'
import Act from './Act'
import CaseCode from './CaseCode'
import CaseType from './CaseType'

const CaseStatus = () => {
    const [caseStatus, setCaseStatus] = useState('')
    const [data , setData] = useState([])
    useEffect(() => {
      axios.get('http://localhost:3031/data')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
    }, [])

   const handleOnClick = (newStatus) => {
    setCaseStatus(newStatus)
   
   };
  return (
    <>
    <div className='statusHeading'>
    <h1 >Case Status: Search by {caseStatus}</h1>
    </div>
    <section className="navigate">
        <ul>
        <Link to='CaseNumber'><li className='navigate_list' onClick={() => handleOnClick('Case Number')}><em class="fa fa-info"></em>Case Number</li></Link>
        <Link to='FirNumber'><li className='navigate_list' onClick={() => handleOnClick('Fir Number')}><em class="fa fa-list-ol"></em>Fir Number</li></Link>
        <Link to='PartyName'><li className='navigate_list' onClick={() => handleOnClick('Party Name')}><em class="fa fa-file"></em>Party Name</li></Link>
        <Link to='AdvocateName'><li className='navigate_list' onClick={() => handleOnClick('Advocate Name')}><em class="fa fa-id-card-o"></em>Advocate Name</li></Link>
        <Link to='CaseCode'><li className='navigate_list' onClick={() => handleOnClick('Case Code')}><em class="fa fa-cog"></em>Case Code</li></Link>
        <Link to='Act'><li className='navigate_list' onClick={() => handleOnClick('Act')}><em class="fa fa-gavel"></em>Act</li></Link>
        <Link to='CaseType'><li className='navigate_list' onClick={() => handleOnClick('Case Type')}><em class="fa fa-file-text"></em>Case Type</li></Link>
        </ul>
    </section>
        <Routes>
            <Route path="/CaseNumber" element = {<CaseNumber data={data} />} />
            <Route path="/FirNumber" element = {<FirNumber />} />
            <Route path="/PartyName" element = {<PartyName />} />
            <Route path="/AdvocateName" element = {<AdvocateName />} />
            <Route path="/Act" element = {<Act />} />
            <Route path="/CaseCode" element = {<CaseCode />} />
            <Route path="/CaseType" element = {<CaseType />} />
        </Routes>
    </>
  )
}

export default CaseStatus