import React from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';



function LoginComponent() {
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()
		const password = document.getElementById('floatingPassword').value
		if (password === 'rightangle') {
			alert('Hi Angle')
			Cookies.set('authToken', 'angel', { expires: 7, secure: true, sameSite: 'Strict' });
			navigate('/card')
		} else {
			alert('Wrong password! Try again.')
		}
	}
  return (
	<div class="modal modal-sheet påosition-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
		<div class="modal-dialog" role="document">
		  <div class="modal-content rounded-4 shadow">
			<div class="modal-header p-5 pb-4 border-bottom-0">
			  <h1 class="fw-bold mb-0 fs-2">This page is for Angel only! Others are not allowed.</h1>
			</div>

			<div class="modal-body p-5 pt-0">
			  <form class="" onSubmit={handleSubmit}>
				<div class="form-floating mb-3">
				  <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password"/>
					<label for="floatingPassword">Secret Password</label>
				</div>
				<button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Log in</button>
			  </form>
			</div>
		  </div>
		</div>
	  </div>
  )
}

export default LoginComponent