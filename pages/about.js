import Link from 'next/link'
import Nav from '../components/Nav'

function About() {
  return (
    <div className="hello">
      <Nav />
      <h1>About Page</h1>
      <style jsx>{`
        .hello {
          font: 15px Helvetica, Arial, sans-serif;
          background: #eee;
          padding: 100px;
          text-align: center;
          transition: 100ms ease-in background;
        }
        .hello:hover {
          background: cornflowerblue;
        }
      `}</style>
    </div>
  )
}

export default About