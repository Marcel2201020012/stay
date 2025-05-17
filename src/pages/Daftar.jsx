import { Link } from "react-router-dom";
import Daftarimg from '../images/daftar.png';

const Register = () => {
  return (
    <div className="relative flex h-screen">
     <style>
        {`
          @font-face {
            font-family: 'Inter';
            src: url('/font/Inter_18pt-Bold') format('Bold'),
                 url('/font/Inter_18pt-Light') format('Light');
            font-weight: normal;
            font-style: normal;
          }
        `}
      </style>

      <div
        className="hidden lg:flex lg:w-1/2 bg-cover bg-center relative"
         style={{
          backgroundImage: `url(${Daftarimg})`,
          backgroundSize:'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat', }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-center items-start pl-10 pr-8 py-8 text-white">
          <p className="text-4xl lg:text-5xl font-normal mb-4 leading-snug">
          Bingung Nginap
          </p>
          <p className="text-4xl lg:text-5xl font-normal mb-4 leading-snug">
          Dimana?
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-snug">
           Stay With Us Aja!
          </h1>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-white p-4 lg:p-6">
        <div className="w-full max-w-sm rounded-3xl p-4 lg:p-6 shadow-lg"
            style={{ backgroundColor: "#BED6F2" }}>
          <h2 className=" font-inter text-xl lg:text-2xl text font-bold text-[#132A13] mb-2"style={{ fontFamily: 'Inter, sans-serif' }}>
            Buat Akun Anda
          </h2>
          <br/>
          <br/>

          <form className="space-y-3 lg:space-y-4">
            <div className="grid grid-cols-1  gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Masukkan email Anda"
                  className="w-full px-2 py-2 border border-gray-300 rounded-md bg-white focus:ring focus:ring-[#132A13] transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Nama Pengguna
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Masukkan Nama Pengguna"
                  className="w-full px-2 py-2 border border-gray-300 rounded-md bg-white focus:ring focus:ring-[#132A13] transition"
                />
              </div>
              
               <div className="flex items-center">
              <input
              type="checkbox"
                className="mr-2 h-3 w-3 text-[#132A13] rounded"
              />
              <label className="text-sm text-[#31572C]">
                Saya menyetujui syarat & ketentuan Stay
              </label>
              </div>
            </div>
             <br/>
            
            <button className="w-full bg-orange-500 text-white py-2 rounded-full text-md font-semibold hover:bg-orange-600 transition">
              Sign In
            </button>

            
            <div className="flex items-center my-4">
              <hr className="flex-grow border-[#FF6C01]" />
              <span className="mx-2 text-[#31572C] text-sm">or</span>
              <hr className="flex-grow border-[#FF6C01]" />
            </div>

           
            <div className="flex flex-col lg:flex-row gap-3">
              <button className="flex items-center justify-center gap-2 border border-[#FF6C01] w-full py-2 rounded-md hover:bg-gray-100 transition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png"
                  alt="Google"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium text-gray-700">Sign in with Google</span>
              </button>
              
              <button className="flex items-center justify-center gap-2 border border-[#FF6C01] w-full py-2 rounded-md hover:bg-gray-100 transition">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#565656"  
                  className="w-5 h-5"
                >
                  <path d="M19.667 16.166c-.426.997-1.003 1.965-1.748 2.906-1.17 1.481-2.379 2.226-3.632 2.226-.614 0-1.356-.181-2.225-.544-.872-.363-1.652-.545-2.346-.545-.726 0-1.53.182-2.409.545-.882.363-1.608.544-2.183.544-1.22 0-2.418-.72-3.59-2.163C.869 17.29.26 15.455.26 13.543c0-1.412.328-2.635.985-3.666.656-1.031 1.517-1.55 2.584-1.55.51 0 1.182.155 2.015.468.831.312 1.38.469 1.643.469.184 0 .825-.196 1.923-.588.932-.332 1.713-.496 2.343-.496 1.743 0 3.062.736 3.953 2.207-1.566.947-2.352 2.278-2.352 3.993 0 1.141.42 2.14 1.26 2.995.842.855 1.843 1.282 3.003 1.282.536 0 1.127-.103 1.773-.309zM15.007.438c0 .77-.297 1.507-.894 2.211-.712.856-1.526 1.352-2.429 1.352-.072 0-.18-.006-.325-.018-.042-.355.075-.776.353-1.26.277-.484.65-.925 1.12-1.323.47-.397.934-.689 1.392-.872.458-.183.832-.205 1.123-.063.1.055.16.175.16.35z"/>
                </svg>
                <span className="text-sm font-medium text-gray-700">Sign in with Apple</span>
              </button>
            </div>
            
            <p className="text-sm text-center text-gray-600 mt-6">
              Sudah punya akun?{" "}
              <a href="/login" className="text-[#2970C1] font-medium hover:underline">
                Sign in
              </a>
            </p>

            <div className="social-buttons">
          
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
