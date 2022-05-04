
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="inline-block">

          <div>
              <h2><Link href="/">Philip Charoen Kvam</Link></h2>
          </div>

        {/* <nav>
          <ul className="text-right sm:grid grid-cols-2">
            <li>
              <Link href="/">projects</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
          </ul>
        </nav> */}
      </header>
    </>
  );
}
