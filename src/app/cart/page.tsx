import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
export default function Cart(){
    return(
        <main>
            <Header/>
            <div className="flex justify-center items-center min-h-screen">
      <div className="w-[720px] bg-white  rounded-lg p-8">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-8">Your shopping cart</h1>

        {/* Cart Items */}
        <div className="space-y-6">
          {/* Product 1 */}
          <div className="grid grid-cols-5 items-center border-b pb-6">
            <div className="col-span-2 flex items-center space-x-4">
              <img
                src="product.png"
                alt="Graystone vase"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h2 className="font-bold text-gray-800">Graystone vase</h2>
                <p className="text-sm text-gray-600">
                  A timeless ceramic vase with a soft color gray glaze.
                </p>
                <p className="mt-2 text-gray-800 font-bold">£85</p>
              </div>
            </div>
            <p className="text-center">1</p>
            <p className="text-right col-span-2 font-bold text-gray-800">£85</p>
          </div>

          {/* Product 2 */}
          <div className="grid grid-cols-5 items-center border-b pb-6">
            <div className="col-span-2 flex items-center space-x-4">
              <img
                src="product2.png"
                alt="Basic white vase"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h2 className="font-bold text-gray-800">Basic white vase</h2>
                <p className="text-sm text-gray-600">
                  Beautiful and simple, this is one for the classics.
                </p>
                <p className="mt-2 text-gray-800 font-bold">£125</p>
              </div>
            </div>
            <p className="text-center">1</p>
            <p className="text-right col-span-2 font-bold text-gray-800">£125</p>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-8 text-right space-y-2">
          <p className="text-gray-600">
            Subtotal <span className="font-bold text-gray-800 ml-2">£210</span>
          </p>
          <p className="text-sm text-gray-500">
            Taxes and shipping are calculated at checkout
          </p>
          <button className="mt-4 bg-purple-700 text-white py-2 px-6 rounded-lg shadow hover:bg-purple-800">
            Go to checkout
          </button>
        </div>
      </div>
    </div>
    <Footer/>
        </main>
    )
}