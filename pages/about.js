import Link from 'next/link'

function About() {
  return (
    <div className="hello">
      <Link href="/">
          <a>Home</a>
      </Link>
      <Link href="/about">
          <a>About</a>
      </Link>
      <h1>About Page</h1>
      <style jsx>{`
        .hello {
          font: 15px Helvetica, Arial, sans-serif;
          background: lightpink;
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