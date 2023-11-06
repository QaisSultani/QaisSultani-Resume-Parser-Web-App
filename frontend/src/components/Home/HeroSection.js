import { IoLocationSharp } from 'react-icons/io5'
import { BsBriefcaseFill } from 'react-icons/bs'
import { FaUniversity } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center min-h-[65vh] items-center md:-mt-[40vh] -mt-[50vh]">
      <div className="bg-gray-100 md:w-[65%] w-[80%] h-full rounded-2xl">
        <div className="flex justify-center">
          <img
            alt="..."
            src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
            className="rounded-full -m-16 max-w-[150px]"
          />
        </div>
        <div className="flex flex-col sm:flex-col-reverse">
          <div className="sm:m-0 m-8"></div>
          <div className="px-16 flex sm:justify-end justify-center pt-10 sm:pt-0">
            <button className="bg-red-600 px-5 py-2 rounded-md shadow-black shadow-md">
              Sign Out
            </button>
          </div>
        </div>
        <div className="text-center py-10">
          <h1 className="text-4xl font-semibold text-gray-700 pb-4">Qais</h1>
          <div className="flex justify-center items-center font-bold text-gray-400 gap-1 pb-7">
            <IoLocationSharp />
            <h3 className="text-sm">Address</h3>
          </div>
          <div className="flex justify-center items-center gap-1 pb-2">
            <BsBriefcaseFill className="text-gray-400" />
            <h3 className="text-sm text-gray-600">Profession</h3>
          </div>
          <div className="flex justify-center items-center gap-1">
            <FaUniversity className="text-gray-400" />
            <h3 className="text-sm text-gray-600">University</h3>
          </div>
        </div>
        <div className="mx-10 border-b-2"></div>
        <div className="text-center py-10 md:px-32 px-10 text-sm">
          <p>
            objective/summary: An artist of considerable range, Jenna the name
            taken by Melbourne-raised, Brooklyn-based Nick Murphy writes,
            performs and records all of his own music, giving it a warm,
            intimate feel with a solid groove structure. An artist of
            considerable range.
          </p>
        </div>
      </div>
    </div>
  )
}
export default HeroSection
