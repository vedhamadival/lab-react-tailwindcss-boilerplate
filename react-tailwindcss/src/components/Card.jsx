function Card() {
    return (
      <div className="flex justify-center m-5">
          <div className="flex justify-center content-center flex-wrap shadow-md rounded h-24 p-2 m-2 px-10">
              <img src="https://media.licdn.com/dms/image/C560BAQEmI-b9h9lQ9Q/company-logo_200_200/0/1662977309233/kalvieducation_logo?e=2147483647&v=beta&t=5SHkVfvYHYtAF_5MxcVfP6N9ag2GCzYryCrFm1pxsQ8" alt="kalvium-logo" className="h-14 w-14"/>
              <div className="px-2">
                  <div className="font-semibold text-xl">Kalvium Store</div>
                  <div className="text-gray-500 font-medium">You have a new course!</div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Card