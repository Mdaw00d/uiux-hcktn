import Link from "next/link";
export default function Header(){
    return(
      <div >
      {/* Promotional Banner */}
      <div className="bg-gray-800 text-white text-sm text-center py-2">
        <span> Free delivery on all orders over £50 with code: easter checkout</span>
        <button className="ml-4 text-gray-300 hover:text-white">✖</button>
      </div>
    
      {/* Header Section */}
      <header className="px-8 lg:px-24 py-4">
        {/* Top Row: Logo and Right Links */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
          <div className="text-2xl font-bold text-gray-800 -ml-16">Avion</div>
          </Link>
          {/* Right-Side Links */}
          <div className="flex items-center gap-x-6 text-gray-600">
           <Link href="/aboutus"> <a href="#" className="hover:text-gray-800">About us</a></Link>
            <a href="#" className="hover:text-gray-800">Contact</a>
            <a href="#" className="hover:text-gray-800">Blog</a>
            {/* Icons */}
            <a href="#" className="hover:text-gray-800">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAArhJREFUSEu1lU1IFGEYx//PzLqlmUGBfRzC1t11nVWLpOiQQhmas+YtKqEOSlBQHQw6dOpUdCnEojwUVEjQqdRZy4OQUeJhVVYdXWeMypAoMinSdJ15asoiv2YW1Oc67/v/PR/v/xnCCgetsD4WBUiesq0k8DEmyAC2W4kw0AVwOIn5YVRvfp9IcvMAXm9pmpuEBwDKbQSYmB+tHhcrIyON43agWYD8LYdSJtaYHQByAEwCVCcS1/QMKq8tkVx/yDNtUjURnwTgBtCRnPahIBKJxBeDzAIE/WX3mfk4wMMCqKRXU/oXupiTVZ5nmsZTAJvBfE3Vw+cdAYGAnCsYFAUwDTZ3q3pzl13p2T65kEDPAUwZgrgtFmsYWej8vwokb6gWhDNg3FB15WwiA5R8ZfUAV4DoojrYdMUe4AtpALxgIUfVG/sSAQQzQ/tYQCuAF6qmFDoBvgNIUbVdInDJTAgQLFnPU67PAEZVTdngBPgKYK0rOZ4ajbZYMMeQpMOpiI9/A/BJ1ZR0J0C3ZShmIb9fb+x0VAeQ7S3dQyS0g6lV1ZuKbAFBn3yVQRcAvq1q4dOJAIJe+R4TnQBQq2rKOVtAICD7BYMGABiJPFPJHyoAo+33CrGpepbRJF/oDoBKEN6aAhcPDIQHF8pK8sk7ALKMtvGX2epUTTnlaDTrwJxV8YMJt0TDdb136Mmw9X2mymoAVQBcM6LthiCWxGIN1rDnxbxl5/EcWJcsrqpnIGQzhzEGXybQUQA7Aepyx137u988Hpt7Z9F1HQgczBBMsQKMUgB5ACbA1MlkvnJN0s2ed8qX4B8fWEaz1nk3uaeL+vqejf4PWfIPZwby0uogAM1lxvdGh1o+/oUsGWAJ5WUWpxuCu43BWWBUqbpyd1kBlpiUIW/iJOFIv9ZUs6wtcjLksrTIDrLigJ9wygYoUZqaTQAAAABJRU5ErkJggg=="/>
            </a>
            <a href="#" className="hover:text-gray-800">
              <div className="flex gap-x-4 ">
                <Link href="/cart">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAb9JREFUSEvdlL9rU1EUx78naQZNKSpCxUHakpeQl0Hh6aT9B3IbKZQWOuhScVAcHTSz+QMEhUKzdRB1kNbbOjgJXYQHIu0NeXmEjlpK0SCYGPKOPDDhqcn7oQmIdzz3nO/n/Lj3EEZ8aMT6+I8AuiZ4iO0yVU1edPV6LRougA5U7eXkT4Bu9npKPADhPhHKe5a8EaUqPT13D8wlENaVJa/1BWQyhem449QBfDk28eGUaZrtsBBdE28AzDJhuWLJJ30BrlHX8m8BugTGkrLlszAA42zheDPpNBiINTutk/X6688+AHEHwEOAN1Vt62oYQE7LLzDoORg7ypZXujF9/8GFqfkT7UT70HVKtBOn3+2/+BQEyaXFGjNWQCgqS5Z8AT/atAFQIUj4l3vuxDrZavVVNRiQEosgPI0A+MiMYsWWZW/MwFVhGEbia+PMEYDxWCx+fre68T4CrOfqu4t0TawCuOlW8s1xrtv2disqxB8wM3cOcVYAkmGEVU3+phe4TbOaEAS+C9BlAGN+oD8ChMnczyewAjc4lxaPmHGLCI/3LHm7KzjIHuoVeZ28m9bbhkH2yICRV/A3cwg1g38a8B3a2KAZ3V/avAAAAABJRU5ErkJggg=="/>
            </Link>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA/pJREFUSEvFlW2IlFUUx3/nmVlfcgs/hGVp6Toz68xY2qb2sn4wksJ9xqWgDcoPKkLRC+SXgjR1tTcowfogBCq9gURG0DrPLFQsQrkkbm1tO88w+4ztFuuSFYTRqjAz97TPtDPNzr74Sbrf7jn/e/7nf8659wpXeclVjs8VCNqteKjHRlgLeofCaj8hgR6QXoN+k/HWdEK7mS7RaQmiS1tupU6OiXLvTCpV6Cavj2cGUz9PhZuSIBqyt4vwNjAPOK3K+4rlGou0H2SW0RVFNCaiW0HWAKOqPJfJOUdrSSYRxCP2FlXeAwqivJTOrXlz+hK0W9HwmRfHgrQDQRXZkhlIflBNMoEg1pC4hYD2A/WWYV3/WafbB98e2rioINYR4J7xw18H1TzZl+sc9vfxxo3NaqyvgL+DamJl+3i/KnwSCye6Qe9WeDnjOXt8T2Nj600BU/wBuL5G/u9FK7Aqm+0Y8e2xkP0qwk5Uutxc8v4ytqIgHkmsVdXTKD8uWDTadPLkyULpYNj+GGgTlSOFgLW3riABDRT2qrJ9LPnjruc86uPWr18f/O3cvB5gJWqa3Fxn7wQF0ZC9Q4SDIvJEeiB5uJxBLGz/CcwPqllcln5bxG4oKmeB867n3FjGRkP20yIcEtFn0wOpQxMIKplaZl0623nqP4LEedAFRctqyGZPDPr26Qjiy+z71KIL5JjrJTfXELT8ArI4ODdf39f3+WiVglKJVDlch9lvdJYYK78PZJvAR2nPeayMXbG09QYTLP4KDLmes7RWwV/AteR1oTuU8kGlFY0+uFCKwe9QKqUYd41YhUBT/2DH+TJ2fCDOARdcz5lfS5ABlquInRlIpqonJhTaeN1ssV5Q2CygKnwYnJN/o1ppaVxDdqsKnynal/FSK2sJ3h2TthVhlzvgvFZFILFIollglY6PqsAfSLE3ne3074lWyhmx96HsAX3H9VJPTZyiSKJFVB2BwQuXrokPDx+/FAttiiOmA2iouQPlbc6C1n7PycRibfXkR12/j4o+kPFSX0wggLZALHzRn+NVKhysm5PfXbhcl/NrL3DOwJciMuQfUtUlFmxQuBkYuZgfXTY3WH9ARJ8BPeN6qbvKyiY8FZXL9m9+nwCPAN+6nlN6pmuWxMK2f5n8WpexBvRO10t9X8ZOeuyiYXuXwCsVgEprOpc8MVWJopHEw6L6aZXveddzDlRjp36uw/Z+gd3jwAzCUYzpumzyP80rzLaKs8wSFdkgyDZ/kks4kZ3uQPL1STKnaR4rGltWm6K8hdA8HaZkV05ZAd3Rn035/ZtcxxkP++lFNj1kGbVVdDlCfGwM/e8xrUo2INrR76WSM8X4vz/9K+m7sv8f722iKEdzX0kAAAAASUVORK5CYII="/>
            </div>
            </a>
          </div>
        </div>
    
        {/* Categories Section */}
        <div className="bg-gray-100 py-4 mt-4">
          <nav className="flex justify-center gap-6 text-sm font-medium text-gray-600">
             
          <Link href="/listing">
            <p  className="hover:text-gray-800">All products</p>
            </Link>
            <a href="#" className="hover:text-gray-800">Plant pots</a>
            <a href="#" className="hover:text-gray-800">Ceramics</a>
            <a href="#" className="hover:text-gray-800">Tables</a>
            <a href="#" className="hover:text-gray-800">Chairs</a>
            <a href="#" className="hover:text-gray-800">Crockery</a>
            <a href="#" className="hover:text-gray-800">Tableware</a>
            <a href="#" className="hover:text-gray-800">Cutlery</a>
          </nav>
        </div>
      </header>
    </div>
    
    );
}