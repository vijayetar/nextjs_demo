import Link from 'next/link'

function Nav() {
    return (
        <ul>
          <Link href="/">
              <a>Home</a>
          </Link>
          <Link href="/about">
              <a>About</a>
          </Link>
        </ul>
    )
}

export default Nav