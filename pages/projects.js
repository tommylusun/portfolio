import Header from '../components/header';


const Projects = () => {
    return (
    
    <div className="main-background">
        {/* <Header></Header> */}
        <div className="title full-card">
            <div style={{margin: '50px'}}><p>Project 1:</p></div>
            <div>
                <a href="http://nbastats.tk">NBA Stats</a>
            </div>
                
        </div>
        <div className="title full-card">
            <div style={{margin: '50px'}}><p>Project 2:</p></div>
            <a>Calender</a>
        </div>
    </div>
  )
}
  
  export default Projects;