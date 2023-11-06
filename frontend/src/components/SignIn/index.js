import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import SVG from '../shared/SVG'
import { HiOutlineMail } from 'react-icons/hi'
import { BiLock } from 'react-icons/bi'

const SignIn = () => {
  const nav = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('email', event.target[0].value)
    formData.append('password', event.target[1].value)
    axios
      .post(`${process.env.REACT_APP_BACKEND_BASE_URL}signin`, formData, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((result) => {
        if (result.data) {
          localStorage.setItem('userID', result.data)
          nav('/')
        }
        else {
          alert('Email or password is incorrect')
        }
      }).catch((error) => {
        console.log('unknown errorf')
      })
    // if (result.status === 200) {
    // }
    // else if (result.status === 401) {
    // }
    // else {
    //   alert('unknown error')
    // }
  }

  return (
    <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
      <div className="max-w-[1000px] bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
            <SVG />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10 flex flex-col justify-center">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">SIGN IN</h1>
            </div>
            <form onSubmit={(event) => handleSubmit(event)}>
              <div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">Email</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <HiOutlineMail />
                      </div>
                      <input
                        required
                        type="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <BiLock />
                      </div>
                      <input
                        required
                        type="password"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="******"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      type="submit"
                      className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      SIGN IN
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
