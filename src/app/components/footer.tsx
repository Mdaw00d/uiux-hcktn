import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 md:px-8 md:py-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Menu */}
        <div>
          <h3 className="text-sm font-light uppercase text-white mb-4">
            Menu
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-100">
                New arrivals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Best sellers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Recently viewed
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Popular this week
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                All products
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-sm font-light uppercase text-white mb-4">
            Categories
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-100">
                Furniture
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Homeware
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Plant pots
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Chairs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Crockery
              </a>
            </li>
          </ul>
        </div>

        {/* Our Company */}
        <div>
          <h3 className="text-sm font-light uppercase text-white mb-4">
            Our company
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-100">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Vacancies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Returns policy
              </a>
            </li>
          </ul>
        </div>

        {/* Mailing List */}
        <div className="-ml-10">
          <h3 className="text- sm font-light uppercase text-white mb-4">
            Join our mailing list
          </h3>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-3 bg-gray-50 bg-opacity-10 text-gray-300 rounded-l outline-none focus:ring focus:ring-gray-600"
            />
            <button
              type="submit"
              className="px-4 py-1 bg-white text-indigo-950 text-sm font-semibold rounded-r hover:bg-blue-500"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
      <hr className="mx-4 md:mx-16 mb-10" />
      <div className="text-center md:text-left ml-4 md:ml-14 text-gray-500 text-xs  md:mb-0">
       <p>Copyright 2022 Avion LTD</p> 
      </div>
      <div className="flex justify-center md:justify-end mb-6 md:mb-0 gap-x-5 sm:hidden">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAX9JREFUSEvllT0vBEEcxp//ZTW7O7MKKt+AVqNzhUohxN0ROgnfQuJjeCkRzksodMJpNHqfQCeK23Fb4ZGRXTmxZ/eyd9eYbpL5P795/i8zgj4v6bM+BguIwvCWwHQRVwI0XK3LicYPB60wZBHxJNbT+lv3L8BVHDDbLTQTICIHrlKrVvjVmEMhl7uBZAIA7Hpar1vRVhjuAVjrKUAAQ3IfIiUAKwD8ngIAPBN4tKICjAMYJXAX78cADIPcBvAGkQkAi+0XyEwRyWM/CJa+atBsHolILQmKwnAejvPguu5TItoyZhPkVu4uIln3g6AWA45FpOoqVRKR1DYm6UTGvADQNiaPg44AkkORMZcAJj9EqkqpRtwM9wCmCgOMMeUSeROnY8fTeiMGXACYKwywNSBwboXSUpkXcOIHQTWuQV1EKq5Sjoi8R8YskDyLHZx6Wlfaz/0TQMagjQCww2XXr4HMlaJunoW0sx3noBcfDshrLwhmEvBgv8yiqUmL77uDT6ynEygDNbVCAAAAAElFTkSuQmCC" />
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASlJREFUSEvtlT9KA0EUh39vtwmO+zYHsBQrKwtL0UK9gDfQUrTyAp5AsdY72KqgrWCllQhWQuqdySaCmJ9McEMSggRnNlg41Tbzfe/PvnmCmo/UzMdsBR1rbwmsh2QlwN2c6kbFGMmgtJYh8OquUR1wQwQ+mFcCbx6cACsEMv8dQ/CYkjuNPH+poi6tvQewGkPQRpouGWNaw+WMJxC5Nlm25eFd59Y+yePYJbowqrse2nbuRMjD8R8jtAcDQVkUZxDZjyIgcESRB5ItVX320PeiWPxIkoV+ichLAPrrJrPX255vNq8mzQnJRse5btAc/CRwzi0n5FOQYCjyenrwL+hXYMrX9A/3YMqFc25U976filMhD0Zmg7wxeb45ceHEWDbjjNnu5Doy+AKCu78Z5fQ2ugAAAABJRU5ErkJggg==" />
        </div>
      </footer>
  )
}