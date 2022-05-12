
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex justify-between">

          <div>
              <h2 className="logo transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:text-orange duration-300"><Link href="/">Philip Charoen Kvam</Link></h2>
          </div>
<div>
  <h4 className="rounded-full border-2 xs:py-1 xs:px-2 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-orange duration-300">
  <a className="" href="mailto:philipkvam91@gmail.com"> say hello</a>
  </h4>
  
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
