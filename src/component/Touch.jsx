export default function Touch() {
  return (
    <>
      <div className="text-center">
        <h2 className="text-base font-extrabold">Connect</h2>
        <h1 className="font-black">Get in Touch</h1>
        <p>Have a question? We'd love to hear from you.</p>
        <form action="" className="">
          <input
            type="text"
            placeholder="Name"
            className="border-1 p-2 border-gray-500 my-2 w-[90%] sm:w-[70%] md:w-[30%]"
          />
          <br />
          <input
            type="email"
            placeholder="emai"
            className="border-1 p-2 border-gray-500 my-2 w-[90%] sm:w-[70%] md:w-[30%]"
          />
          <br />
          <textarea
            name=""
            id=""
            placeholder="Enter your message"
            className="border-1 p-2 border-gray-500 my-2 w-[90%] sm:w-[70%] md:w-[30%] h-40"
          ></textarea>
          <br />
          <p className="">
            <input type="checkbox" /> I agree to the Terms
          </p>
          <input
            type="submit"
            className=" px-4 py-2 bg-black text-white my-4"
          />
        </form>
      </div>
      <br />
      <hr />
      <br />
    </>
  );
}
