import React,{ useState} from 'react'
import '../CssFiles/CourtOrders.css'
import { Link, Route, Routes } from 'react-router-dom'
import CaseNumber from './CaseNumber'
import PartyName from './PartyName'
import CourtNumber from './CourtNumber'
import OrderDate from './OrderDate'


const CourtOrders = () => {
    const [caseStatus, setCaseStatus] = useState('')
 

    const handleOnClick = (newStatus) => {
     setCaseStatus(newStatus)
    
    };
  return (
    <>
    <div className='statusHeading'>
    <h1 >Court Orders : Search by {caseStatus}</h1>
    </div>
    <section className="navigate">
        <ul>
        <Link to='CaseNumber'><li className='navigate_list' onClick={() => handleOnClick('Case Number')}><em class="fa fa-info"></em>Case Number</li></Link>
        <Link to='CourtNumber'><li className='navigate_list' onClick={() => handleOnClick('Court Number')}><em class="fa fa-list-ol"></em>Court Number</li></Link>
        <Link to='PartyName'><li className='navigate_list' onClick={() => handleOnClick('Party Name')}><em class="fa fa-file"></em>Party Name</li></Link>
        <Link to='OrderDate'><li className='navigate_list' onClick={() => handleOnClick('Order Date')}><em class="fa fa-id-card-o"></em>Order Date</li></Link>

        </ul>
    </section>
    <Routes>
            <Route path="/CaseNumber" element = {<CaseNumber />} />
            <Route path="/CourtNumber" element = {<CourtNumber />} />
            <Route path="/PartyName" element = {<PartyName />} />
            <Route path="/OrderDate" element = {<OrderDate />} />
        </Routes>
    </>
  )
}

export default CourtOrders