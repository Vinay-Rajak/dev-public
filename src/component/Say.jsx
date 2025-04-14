import FeedBack from "./FeedBack";
export default function Say() {
  return (
    <>
      <div className="m-4 my-22  sm:m-4 md:px-20 md:mt-10 ">
        <div className="text-center mb-4">
          <h1>What they Say</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="sm:flex">
          <div className="mb-4 ">
            <FeedBack
              rating="8.9/10"
              pImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s"
              para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            eaque molestiae deleniti voluptate."
              pName="johne "
              pCompany="tech-Hub"
            />
            <hr className="w-[95%]" />
          </div>
          <div>
            <FeedBack
              rating="9.5/10"
              pImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA51Hk-IxsWTIv0ruG1KzaLkbulzIqG0Kk_Q&s"
              para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            eaque molestiae deleniti voluptate."
              pName="Miya"
              pCompany="You-tube"
            />
            <hr className="w-[95%]" />
          </div>
        </div>
      </div>
      <br />
      <hr />
      <br />
    </>
  );
}
