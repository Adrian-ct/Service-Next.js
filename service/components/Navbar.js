//return component
import { useRouter } from "next/router";
import Image from "next/image";
export default function Navbar() {
  const router = useRouter();
  const homeHandler = () => {
    router.push("/");
  };

  return (
    <div className="navbar top-0 absolute bg-[#36b785]">
      <div className="flex-1">
        <button className="btn glass" onClick={homeHandler}>
          <Image src="/back.svg" alt="back" width={30} height={30} />
        </button>
        <a
          onClick={homeHandler}
          className="btn bg-transparent normal-case text-2xl border-0
         ml-5 font-bold  text-white hover:bg-[#5f5c5c68]"
        >
          La Vericu'
        </a>
      </div>
      <div className="flex-none"></div>
    </div>
  );
}
