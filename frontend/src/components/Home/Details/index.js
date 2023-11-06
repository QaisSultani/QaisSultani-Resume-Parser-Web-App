import { useState } from "react"

const Details = () => {
  const [tab, setTab] = useState('about')
  
  const handleTab = (value) => {
    setTab(value)
  }

  const classes = (check) => {
    return check ? "w-full py-2 bg-gray-500" : "w-full py-2"
  }
  
  return (
    <div className="px-20 py-10 min-h-screen">
      <div className="bg-gray-100 rounded-2xl overflow-hidden">
        <div className="flex justify-evenly gap-1">
          <button className={classes(tab === 'about')} onClick={() => handleTab('about')}>ABOUT</button>
          <button className={classes(tab === 'education')} onClick={() => handleTab('education')}>EDUCATION</button>
          <button className={classes(tab === 'projects')} onClick={() => handleTab('projects')}>PROJECTS</button>
          <button className={classes(tab === 'experience')} onClick={() => handleTab('experience')}>Experience</button>
          <button className={classes(tab === 'skills')} onClick={() => handleTab('skills')}>SKILLS</button>
        </div>
      </div>
    </div>
  )
}
export default Details
