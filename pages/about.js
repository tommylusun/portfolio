import Header from '../components/header';

const About = () => (
    <div className="main-background">
    <div className="title full-card">
        <p>This is Me</p>
        <p>Contact me at: 911</p>
    </div>
    <style jsx>{`
    .full-card {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            height: 101vh;
            color: #353535;
            flex-flow: column;
            margin: -2px;
            overflow: hidden;
            /* padding-top:45vh; */
        }
   `}</style>
  </div>
  )
  
  export default About;