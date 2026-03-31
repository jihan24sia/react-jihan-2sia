export default function TailwindCSS() {

    return (
        <div>


            <h1 class="border m-4">Belajar Tailwind CSS 4</h1>
            <button className="bg-blue-500 text-white
            px-4 py-2 mx-4 rounded
            shadow-lg">Click Me</button>
            <Spacing title="Card" content="ABCDEFGH." />
            <FlexboxGrid />
            <Typography />
            <BorderRadius />
            <BackgroundColors />
            <ShadowEffects/>
            <ProductCard/>

        </div>
    )
}

function Spacing(props) {
    return (
        <div className="bg-white shadow-lg p-6 m-4 rounded-lg">
            <h2 className="text-lg font-semibold">{props.title}</h2>
            <p className="mt-2 text-gray-600">{props.content}</p>
        </div>
    )
}
function Typography() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-blue-600 px-4 py-2">Tailwind Typography</h1>
            <p className="text-gray-600 text-lg  px-4 py-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    )
}
function BorderRadius() {
    return (
        <button className="border-2 border-blue-500 text-blue-500 ml-4 px-4 py-2 rounded-lg"> Klik Saya </button>
    )
}
function BackgroundColors() {
    return (
        <div className="bg-blue-500 text-white p-6 m-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Tailwind Colors</h3>
            <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
        </div>
    )
}
function FlexboxGrid() {
    return (
        <nav className="flex justify-between bg-gray-800 p-4 text-white">
            <h1 className="text-lg font-bold">MyWebsite</h1>
            <ul className="flex space-x-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>

            </ul>
            <h1 className="text-lg font-bold">Logout</h1>
        </nav>
    )
}
function ShadowEffects(){
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold">Hover me!</h3>
            <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}
function ProductCard() {
  return (
    <div className="bg-gray-100 min-h-screen pt-10 px-4">
      
      {/* Card */}
      <div className="flex justify-center">
        <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 max-w-sm w-full overflow-hidden">
          
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
            alt="Coffee"
            className="w-full h-48 object-cover"
          />

          {/* Content */}
          <div className="p-5">
            
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Zafa’s Latte
            </h2>
            
            <p className="text-gray-600 text-sm mb-4">
              Kopi latte creamy dengan rasa yang smooth dan nikmat.
            </p>

            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-green-600">
                Rp25.000
              </span>

              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition">
                Order
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
