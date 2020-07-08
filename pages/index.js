import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className="hello">
      <Nav />
      <h1>Home Page</h1>
      <style jsx>{`
        .hello {
          font: 15px Helvetica, Arial, sans-serif;
          background: #eee;
          padding: 100px;
          text-align: center;
          transition: 100ms ease-in background;
        }
        .hello:hover {
          background: pink;
        }
      `}</style>
    </div>
  )
}
