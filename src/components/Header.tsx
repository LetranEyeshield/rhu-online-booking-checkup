export default function Header() {
  return (
    <>
      <header className="header flex justify-around pt-6">
        <img
          className="best-rhu-logo"
          src={"/best-rhu-logo.jpg"}
          alt={"Best RHU-Manaoag Logo"}
        />
        <h1 className="text-3xl md:text-5xl mt-12 font-bold">
          RURAL HEALTH UNIT
        </h1>
        <img
          className="mayor-kim border-2 rounded-full border-solid border-yellow-300"
          src={"/best-mayor-kim-amador.jpg"}
          alt={"Best Mayor of Manaoag"}
        />
      </header>
    </>
  );
}
