import Link from "next/link";
export default function Footer(){
    return(
            <footer className="bg-indigo-950 text-gray-300">
            <div className="max-w-7xl mx-auto px-8 py-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div>
                <h3 className="text-sm font-light uppercase text-white mb-4">
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
            <hr className="mx-16 mb-10 " />
            <div className="text-left ml-14 text-gray-500 text-xs ">
              Copyright 2022 Avion LTD
            </div>
            <div className="flex justify-self-end mr-12 gap-x-5  ">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAX9JREFUSEvllT0vBEEcxp//ZTW7O7MKKt+AVqNzhUohxN0ROgnfQuJjeCkRzksodMJpNHqfQCeK23Fb4ZGRXTmxZ/eyd9eYbpL5P795/i8zgj4v6bM+BguIwvCWwHQRVwI0XK3LicYPB60wZBHxJNbT+lv3L8BVHDDbLTQTICIHrlKrVvjVmEMhl7uBZAIA7Hpar1vRVhjuAVjrKUAAQ3IfIiUAKwD8ngIAPBN4tKICjAMYJXAX78cADIPcBvAGkQkAi+0XyEwRyWM/CJa+atBsHolILQmKwnAejvPguu5TItoyZhPkVu4uIln3g6AWA45FpOoqVRKR1DYm6UTGvADQNiaPg44AkkORMZcAJj9EqkqpRtwM9wCmCgOMMeUSeROnY8fTeiMGXACYKwywNSBwboXSUpkXcOIHQTWuQV1EKq5Sjoi8R8YskDyLHZx6Wlfaz/0TQMagjQCww2XXr4HMlaJunoW0sx3noBcfDshrLwhmEvBgv8yiqUmL77uDT6ynEygDNbVCAAAAAElFTkSuQmCC" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASlJREFUSEvtlT9KA0EUh39vtwmO+zYHsBQrKwtL0UK9gDfQUrTyAp5AsdY72KqgrWCllQhWQuqdySaCmJ9McEMSggRnNlg41Tbzfe/PvnmCmo/UzMdsBR1rbwmsh2QlwN2c6kbFGMmgtJYh8OquUR1wQwQ+mFcCbx6cACsEMv8dQ/CYkjuNPH+poi6tvQewGkPQRpouGWNaw+WMJxC5Nlm25eFd59Y+yePYJbowqrse2nbuRMjD8R8jtAcDQVkUZxDZjyIgcESRB5ItVX320PeiWPxIkoV+ichLAPrrJrPX255vNq8mzQnJRse5btAc/CRwzi0n5FOQYCjyenrwL+hXYMrX9A/3YMqFc25U976filMhD0Zmg7wxeb45ceHEWDbjjNnu5Doy+AKCu78Z5fQ2ugAAAABJRU5ErkJggg==" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAwJJREFUSEvFlVGIVVUUhv+174XGs93rXBmZp3SECjIkKgyRKB90EAQRm9DUeunF9CFI1EDxQRClKVJ88kEfRKYUzaIgiHoTQUQRodQYkhB8sZc5Z997HZxzzh975o6cmc7VQRg8j4e117fW/6+9tmCOP5nj/Hg+gLHR0ZdykV0QeRfAMqBrIQTwB8hLNeBYTxyPzFTkfx20vP8U5HEAdQD3SF4R4E6llCJvgXwDIosAjAPYaVVPlmOnAVqjo8thzBUAt2pFsbGn0fh7Nh5575cZ8icAi1GrvW2tvTF1bjogTS8CWGfy/NV5Cxb887TkD5Pk40LkIMgE9fonyPNrAH60qoPdACHpLau6rpycpGml6YABXgOQF+RtG8e/t5JkQIz5FSL3rHP9rTQNgIVWdUkloJ2mKclhG8c7pgLa7fYiZtk5ACunQYFLMOaU5PkDI9I3T/V0KyggstY6Z7t1UAjwdaS6NwSEytveXwawhORuGvObMabGLBsQkSEAI5Fz74lImCY0k+SciHxgVWvdACHwiFXdFwLa3m8iGQ5tipw7X+6g7f1mkmcBbLCqweAA+E5ENltV0xUgwFCk+sUEIE2HCOyJxsac9PU1y4A0TRfWgH9BHrJxfKBT0DDJrVb18fDMnCJS5Nh85z7vAL4ksHdsfDzu7e1NKwHAYau6vxN/hsBHTwYAR+er7upUNEjyQtA1cu77MqCZJFtFZLgsUdv70MGHT/Sg3EHJ5H6Sezom15lla0TkKwJ/WedWzTA5eNLTzYOg87BV3V4a0xeZZcHMd2aOqanXt0RRdH/q/8SYAqutatwNEJbVSNVFe+j9BgLrATwC8Evk3M9TlT8GeH8dpFrVV6ov2qSG75s8XzqbVTHNk2bzdSmKmyLybeTctuoOWq03keehips1crCn0bj7tH00Mf+TyX8A0I+iWGEbjeuVgPCztK7DZbnKSUlgyKww5k8hXxDy5UIkrPPwUEQAlgPIIPKZde5EuajKF+2ZHhzym6r1/nyezNnoPtuYOe/gP0OVgCg5wyWAAAAAAElFTkSuQmCC" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAthJREFUSEvFlTloVEEcxr//exrwvZ3ZTSCmMoXiUYkWHmgaD0Q8kDQejRciHk0CilaihUUUNYXaCIo2Em1sRCQiWgkeRMVCC8GAxiDIZmd2NzFm36cvbuLkZZNNEzLVezPfzO9/zgimecg0n4+ZARRzuVWR5+0RcgeA2QAeA3gg5Hx63oCQ7+co9VZE+qtFYJwHRWOaCdwH4FfZ/AvkxUDr8yIyMJF2DMBau94jOwF41Sxz1r/S87alUql3lfaMARSMuQngQAVhbOFTAT5EZKOIrAcw19F9GSyVltfW1vYl9yYBPwDUuyKS9/oHBw/V19fbkXmSs/qNOUqRK04oH4Zab6sG6AXQ4Ih6A6XmichQ3phLQi4VkTeDUdSWyWSyeWuvCNkyqidXhun0KxeS9OA2gL2O4EGodXM2m83U+H52ZF6Aj5Hn7UIU7RegddQz4FRK6wuTAQ4BuDEqEOkMldoU/xdyua0UOSnAWgCzKhaByONQqc0TA6w9DvKqI/gtZFOQTr8ctbKnJyimUnGSDwPYngAVAqUycUgdb/9LCtaeAXlunHXkE4jche8/CsPw+8h63pjLboji+UikQSkVF8vwGJsDa4+CvJ4AvAGwtNzRANkVed4JpdRT/vPGuE0ZKDXHbbwxgAFjFpWATw7gTqj1vqK1O0l2OGXakUqnd7O3NywGQc4FRCIbYnhFD4aTacxDAFvKgheh1mvi76IxTRA5AvIbfb89DlXB2mMgryWSeiHQ+tSEgHw+v0yiKE5qfMnF49avoaHWurq62NLhQbKmmM+fBHk2WVECtAVan54QMGxtLtdS7tIR3U8AzwX4TGAhgI0AUuOK4V+S1ymlnk0KKENaKdLmeFLpvORcd6DUAhEpVQWUISvpefdBNk7h9L4SsFpr7RZJ9ReNpG+tXegDSwgsBhn3AT2RgwRW/L19u0Wki6VSe5jJvE4aMjNP5hTCMWXJtHvwB+FQIigoZvJfAAAAAElFTkSuQmCC" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAiNJREFUSEvdlbtrFFEUxr9vxs1j5s4NBIUIig8QEVRErLRUBEXwgQQlYKGFSHpFUfwDtLGI2EgQ0tikEIQUaURsgoKihZXBBXGJLMnk7sxEd3eODGTXdXd29gFpMuU953y/+c49c4bY4IcbrI9NBpBCweXYWJDVtmKxqAdzuYcAzhHYA7JMkalhz7sXRdF2lMvnh7WeIimJTr1FImJHxnyJLWtcKfW5HST0/XkhT7bEyTxEdpK86njey1q8DoiWl3fHtr0I4BeBi47W75pFgpWVo7CsDxkO3xN4E1vWjFLqY7ODodAYA2DLusBz2PYD13V/1gRLvj9BciYDEAgwqbR+0eIgOQhWV5O3Pt4oIMBbAK9sckHi+IiQTzIA067W1xvj/+5gaUmFAwP7YVlzALb2830QeORofTsVEIbhDqlUvgMoAtjWDwDkpOt5T9MdiFihMd8A7OpLHEAVOKC1/poKSA5DYy6JSDJitYvuhbXoar23uaBlVYTGjIvIfQCHelEHecv1vGcdAYHvnwX5ukfxvKPUPpJ/OgLWxzWZ42tdQioUOeGMjCyk5aduUxGxgiA4iGr1LskrGSAR4IbSerpdTgsgWXhrrnssFrkD4EyG+BrJCcfzZrOc1gGlUukU4/gxgMONS7BN8RwrlZvO6Gi+Uxv/c5Cs4qFc7jKACwBOAxgE8BtAAcAPiMyLbc8qpT51Ek7dRd0W9ZK3yX6ZvVjvNvcvNZKzGYZNT64AAAAASUVORK5CYII=" />
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAA51JREFUSEu1lluIHEUUhv+/x8Cme6qaITG6KijigwpeVhB9ELwEYwzmgnjJg0JQiIGorDcU1niJEi9IEl28QoLBBwkYSBTZYKIGX8REVMiDsF5RkbhgnKrq6s3qTh/psWfs6cyu5mHrqeb8f52vzqlqaog5Hpzj/JgVICID3tobA3KpABcBOAuAQOQHkF+SHJtfr+8m+ddMG50R4I1ZBvIVAGfOVqUA3wi5Vil1oJ+vL8AbsxHkhhNoX0aRB8I43lpdcxzAG/MUyEf7JBcAPwrwE0kFkUuO85B3R0q9XI73ALy1KwHsrix8MwC2Dyh1iOSxjua9H0Kr9SSA5SV/RuCKUOtPO7EuQCYm6unAwDiAwa5I3hQqtSs/7NS5JQTOEXKKIl90kiTWPkLgmRLkcKjUEMlWHusCvHN3QeS1EvmFUOuHnHPn10R2CXBuT2Uir4Zarycp3rmXIHJPRxeR6+txvLcXYO17AG4oTJNT09ODjUYjSa39HOTFIPchy8ZBru8mAh6ua/28c25RIPIrgFpbI0cjpe6tAn4BcHph2BcptcRbuwLAHhHZWY/j1bmWWHuAwJUFZCLS+pR87q3N+355Ef8s0ro9/7dF1k4CGCgM2yOt7/TGPAHycQArIq3zCpFa+6EA13SqmBZZEMfx0cSYnSRvKeK/RVqfWj0DD5GwMOyJtF6VGjMs5BYAKyOt3xWRealzfwCICt9UqFRIMvPO7YXIdUX890jrhdUKvgNwdscQKjV4rNk8LavVxgV4rK71c0mSLGaW7S9dhI9CrRcXLZoAcHKhHY60vrAHkBjzNsl2n9uCyP1hHG/x1n4FkZEojt/3zm2AyMaOByLLojgeS5rNaxkEH3TjwI5I6zVVwG0k3yqZMgG2Ehj+s9Va0Gg0mt6YS0F+AuAoRZ4N43hURGqptYdADnU3R94cKvVOD0COHInSMPwZQKMEyacHI60vs9YuVEp5kvllaI/8A5x07g0Bbi+t+TZU6jyS0z2Aoo93ANhWAWyKtB5JnVstIptAbiPwtWTZ1SBXATij5JeAvGq+UnmV/7S6kiy/55sJ3NfdJbCmrvUOb+3rANZW/eXfFBkO4/jFnli/Bd6Yp0GOFNryUKmx1Ln8S100A0AIPBhqvbmqz/jgJMbkhz4qWXZrUKspEWkfWnUIMC7kOqXUx/30/3oy5xlj6icFwToASwlcACCAyPcgD5LcXzyZ7QM9YcBs/f6/2pz/q/gb+DZ+KG0wYdAAAAAASUVORK5CYII=" />
            </div>
          </footer>

    )
}