
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex justify-between">

        
          <nav>
          <ul className="text-right sm:grid grid-cols-2">
            <li className="xs:text-xl xl:text-2xl rounded-full border-2 xs:py-1 xs:px-2 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-green hover:text-black duration-300">
              <Link href="/">Philip Kvam</Link>
            </li>
            {/* <li>
              <Link href="/about">about</Link>
            </li> */}
          </ul>
        </nav>
<div>
  <h4 className="rounded-full border-2 xs:py-1 xs:px-2 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-green hover:text-black duration-300">
  <a className="" href="mailto:philipkvam91@gmail.com"> say hello</a>
  </h4>
  
</div>
       
      </header>
    </>
  );
}
