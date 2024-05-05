import React from 'react'
import "../components/CssFiles/SideNav.css"
import { NavLink, Route, Routes } from 'react-router-dom'
import { CiCalendar } from "react-icons/ci";
import { FaClipboard } from "react-icons/fa";
import Todo from '../components/TodoAppComponent/Todo'
import { IoDocuments } from "react-icons/io5";
import { FaNoteSticky } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";
import { GoLaw } from "react-icons/go";
import { TbReportMoney } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import Calendar from './Calendar';
import Case_documents from './Case_documents';
import Case_notes from './Case_notes';
import Contacts from './Contacts';
import Judgements from './Judgements';
import Expenses from './Expenses';
import Billing from './Billing';


const sidenav = () => {
  return (
    <>
      <div className="sideNavigation_menu">
        <div className="sideNavigation_menu_items">
          <NavLink to="/" className="sideNavigation_menu_item" activeClassName="active">
            <FaClipboard /><span>Todo</span>
          </NavLink>
          <NavLink to="/calendar" className="sideNavigation_menu_item" activeClassName="active">
            <CiCalendar /><span>Calendar</span>
          </NavLink>
          <NavLink to="/case_documents" className="sideNavigation_menu_item" activeClassName="active">
            <IoDocuments /><span>Case Documents</span>
          </NavLink>
          <NavLink to="/case_notes" className='sideNavigation_menu_item' activeClassName="active">
            <FaNoteSticky /><span>Case Notes</span>
          </NavLink>
          <NavLink to="/contacts" className='sideNavigation_menu_item' activeClassName="active">
            <MdContacts /><span>Contacts</span>
          </NavLink>
          <NavLink to="/judgements" className='sideNavigation_menu_item' activeClassName="active">
            <GoLaw /><span>Orders/Judgement</span>
          </NavLink>
          <NavLink to="/expenses" className='sideNavigation_menu_item' activeClassName="active">
            <GiMoneyStack /><span>Expenses</span>
          </NavLink>
          <NavLink to="/billing" className='sideNavigation_menu_item' activeClassName="active">
            <TbReportMoney /><span>Billing</span>
          </NavLink>
        </div>
      </div>



      <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/case_documents' element={<Case_documents />} />
        <Route path='/case_notes' element={<Case_notes />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/judgements' element={<Judgements />} />
        <Route path='/expenses' element={<Expenses />} />
        <Route path='/billing' element={<Billing />} />
      </Routes>
    </>

  )
}

export default sidenav