import NavbarLoggedIn from "../components/NavbarLoggedIn";

export default function Home() {
  return (
    <>
      <NavbarLoggedIn />
      <div className="artboard-horizontal flex justify-center h-[100vh] bg-red-700">
        <button className="btn btn-primary">My first button in daisy ui</button>
      </div>
      <div className="artboard-horizontal flex justify-center h-[92vh] bg-blue-700">
        <button className="btn btn-primary">My first button in daisy ui</button>
      </div>
    </>
  );
}
