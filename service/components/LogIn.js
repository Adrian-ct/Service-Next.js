import Navbar from "./Navbar";

const LogIn = () => {
  return (
    <div className="h-[100%]">
      <Navbar />
      <div className="artboard-demo rounded-none h-[100vh] bg-white">
        <div className="card w-96 border-solid border-[#6b6a6a72] border-2 ">
          <div className="card-body items-center text-center gap-5">
            <h1 className="card-title text-[#000000] self-start text-2xl">
              Authentification
            </h1>
            <input
              type="text"
              placeholder="Email address"
              className="input input-bordered w-full text-white placeholder:text-white bg-[#5d2e2e73]"
            />
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered w-full text-white placeholder:text-white bg-[#5d2e2e73]"
            />
            <div className="card-actions flex-col  items-start w-full gap-5">
              <a className="link link-accent text-sm ">Forgot yout Password?</a>
              <button className="btn  font-bold  text-xs btn-primary self-center btn-wide ">
                Sign In
              </button>
              <span className="w-full">
                <h3>New Client?</h3>
                <a className="link link-accent text-md">Create account</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
