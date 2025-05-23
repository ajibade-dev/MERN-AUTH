import React from 'react'
import { useState, useEffect } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import {Form, Button } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import {toast} from 'react-toastify'
import Loader from '../components/Loader'
import {setCredentials} from '../slices/authSlices'
import { useUpdateUserMutation } from '../slices/usersApiSlice'
const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate= useNavigate();
  const dispatch = useDispatch();

  const {userInfo} = useSelector((state) => state.auth)


  const [updateProfile, {isLoading}] = useUpdateUserMutation();
  useEffect(() => {
  setName(userInfo.name);
  setEmail(userInfo.email)
  }, [userInfo.setName, userInfo.setEmail]);

  const submitHandler = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword){
      toast.error('Passwords do not match');
    }else{
    try {
        const res = await updateProfile({
            _id:userInfo._id,
            name,
            email,
            password
        }).unwrap();
        dispatch(setCredentials({...res}))
        toast.success('Profile updated successfully')
    } catch (err) {
        toast.error(err?.data?.message || err.error)
    }
    }
  }

  return (
    <FormContainer>
      <h1>Update Profile</h1>
      <Form onSubmit={submitHandler}>

        {/* name */}
      <Form.Group className='my-2' controlId='email'>
          <Form.Label>Your Name Please?</Form.Label>
          <Form.Control type='text' placeholder='Enter your name' value={name} onChange={ (e) => setName(e.target.value)}>

          </Form.Control>
        </Form.Group>

        {/* for email */}
        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' value={email} onChange={ (e) => setEmail(e.target.value)}>

          </Form.Control>
        </Form.Group>
    
      {/* for password */}
        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter Password' value={password} onChange={ (e) => setPassword(e.target.value)}>

          </Form.Control>
        </Form.Group>

        {/* confirm Paswword */}
         <Form.Group className='my-2' controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type='password' placeholder='Re-enter Password' value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value)}>

          </Form.Control>
        </Form.Group>
        {isLoading && <Loader />}
        {/* for button to update profile */}
        <Button type='submit' variant='primary' className='mt-3'>
          Update
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ProfileScreen 