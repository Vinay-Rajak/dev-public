export default function Btn({ btn = false, b11, b12 }) {
  return (
    <>
      {btn ? (
        <div>
          <button className="bg-black p-2 px-4 m-2 text-white">{b11}</button>
          <button className=" p-2 m-2 border border-slate-900">{b12}</button>
        </div>
      ) : (
        <div>
          <button className=" p-2 px-4 m-2 border border-slate-900">
            {b11}
          </button>
          <button>{b12}</button>
        </div>
      )}
    </>
  );
}
