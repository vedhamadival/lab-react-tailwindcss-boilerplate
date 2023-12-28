function NavBar() {
    return (
      <div className="bg-red-400 h-20 flex content-center flex-wrap justify-between">
          <div className="flex content-center flex-wrap">
              <button className="text-white m-3 font-semibold text-3xl">Kalvium</button>
              <button className="text-gray-500 mx-3 my-5 font-medium">About Us</button>
              <button className="text-gray-500 mx-3 my-5 font-medium">Contacts</button>
              <button className="text-gray-500 mx-3 my-5 font-medium">Courses</button>
          </div>
          <div className="flex content-center flex-wrap">
              <button className="m-3 text-white border-inherit border-2 px-5 py-1 rounded">Login</button>
          </div>
      </div>
    )
  }
  
  export default NavBar