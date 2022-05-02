export default function Footer() {
    return (
    <>
    <footer className="grid xs:grid-cols-1 md:grid-cols-3 mt-20 ">
      <div className="xs:col-start-1 col-start-2">
        <h4>say hello</h4>
      </div>
      <div className="xs:text-lg sm:text-xl">
        <a className="underline" href="mailto:philipkvam91@gmail.com">philipkvam91@gmail.com</a>
      </div>
      <div className="xs:text-lg sm:text-xl">
        <span>2022</span>
        <span> <a className="underline" href="" target="_blank" >LinkedIn</a></span>

      </div>
    
    </footer>
    </>
    );
  }