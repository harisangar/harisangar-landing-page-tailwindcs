import React from 'react';
import city from "./city.jpg";
import Users from "./users"

 function Login() {
  return (
    
    <>
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">


      <div className="flex shadow-md rounded-3xl">

        <div className="flex flex-wrap content-center justify-center rounded-l-3xl bg-white" style={{
          width: '40rem', height: '40rem'
        }}>
          <div className="w-96">

            <h1 className="text-4xl font-semibold pl-20 pb-5">Sign In</h1>
            <h1 className="text-1xl text-gray-400">Please enter your details</h1>


            <form className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-xl font-semibold">Email</label>
                <input type="email" placeholder="Enter your email" class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
              </div>

              <div className="mb-6">
                <label className="mb-2 block text-xl font-semibold">Password</label>
                <input type="password" placeholder="*****" class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
              </div>

              <div className="mb-3 flex flex-wrap content-center">
                <input id="remember" type="checkbox" class="mr-1 checked:bg-purple-700" /> <label for="remember" class="mr-auto text-base font-semibold">Remember for 30 days</label>
                <a href="https://www.google.com" class="text-base font-semibold  text-purple-700">Forgot password?</a>
              </div>

              <div className="mb-3">
                <button className="mb-6 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">Sign in</button>
                <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                  <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt='image1' />
                  Sign in with Google
                </button>
              </div>
            </form>


            <div className="text-center">
              <span className="text-basic text-gray-400 font-semibold">Don't have account?</span>
              <a href="https://www.google.com" className="text-basic font-semibold text-purple-700">Sign up</a>
            </div>
          </div>
        </div>


        <div className="flex flex-wrap content-center justify-center rounded-r-3xl" style={{
          width: '24rem', height: '40rem'
        }}>
          <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-3xl" src={city} alt='img' />
        </div>

      </div>
    </div>
    <div className='pb-20  mx-10'>
    <Users />
    </div>
    </>
  );
}
export default Login;

