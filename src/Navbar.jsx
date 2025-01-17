
import a from './assets/a.webp'

const Navbar = ({ mode, setMode }) => {
 

  return (
    <nav className="bg-gray-800 p-2">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto ">
        <div className="flex items-center space-x-3">
          <img
            src={a}
            alt="Logo"
            className="h-6 w-6"
          />
          <span className="text-2xl font-semibold text-gray-800 dark:text-white">
            A-Ext
          </span>
        </div>

        <div className=" sm:flex space-x-6">
          <button
            className="text-lg text-gray-800 dark:text-white hover:text-blue-500 "
            onClick={() => {
              setMode((prev) => {
                if (prev == "pdf") return "image";
                else return "pdf";
              });
            }}
          >
            Upload {mode == "pdf" ? "Image" : "PDF"}
          </button>
        </div>

       
      </div>
    </nav>
  );
};

export default Navbar;
