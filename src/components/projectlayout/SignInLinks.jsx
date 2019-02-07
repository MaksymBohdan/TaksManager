import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../redux/actions/authActions'

const SignInLinks = (props) => {
  return (
    <ul className='right'>
      <li> <NavLink to='/create'>New Project</NavLink> </li>
      <li> <NavLink to='/signin' onClick={props.signOut}>Log Out</NavLink></li>
      <li> <NavLink to='/' className='btn btn-floating pink lighten-1'> {props.profile.initials} </NavLink> </li>
    </ul>
  )
}

const mapDispatchToProps=(dispatch)=>{
  return{
    signOut:()=> dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps) (SignInLinks)
