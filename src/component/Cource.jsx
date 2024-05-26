import Btn from "./Btn";
import Card from "./Card";

export default function Cource({
  title,
  H1,
  H2 = null,
  para,
  cardImg1 = null,
  cardHeading1 = null,
  cardSubHeading1 = null,
  cardPara1 = null,
  cardImg2 = null,
  cardHeading2 = null,
  cardSubHeading2 = null,
  cardPara2 = null,
  cardImg3 = null,
  cardHeading3 = null,
  cardSubHeading3 = null,
  cardPara3 = null,
  socialMedia = false,
  btn1,
  btn2,
  CardObj,
}) {
  return (
    <>
      <div className="m-4 sm:px-4">
        <div className="text-center">
          <h1 className="text-xs font-extrabold">{title}</h1>
          <h1 className="font-extrabold">
            {H1}
            <br /> {H2}{" "}
          </h1>
          <p className="my-4">{para}</p>
        </div>
        <div className="  sm:flex item-center justify-center flex-wrap  ">
          {CardObj == null ? (
            <>
              {" "}
              <Card
                img={cardImg1}
                heading={cardHeading1}
                subHeading={cardSubHeading1}
                para={cardPara1}
                socialMedia={socialMedia}
              />
              <Card
                img={cardImg2}
                heading={cardHeading2}
                subHeading={cardSubHeading2}
                para={cardPara2}
                socialMedia={socialMedia}
              />
              <Card
                img={cardImg3}
                heading={cardHeading3}
                subHeading={cardSubHeading3}
                para={cardPara3}
                socialMedia={socialMedia}
              />{" "}
            </>
          ) : (
            <>
              {CardObj.map((items) => {
                return (
                  <Card
                    key={items.cardHeading}
                    img={items.cardImg}
                    heading={items.cardHeading}
                    subHeading={items.cardSubHeading}
                    para={items.cardPara}
                    socialMedia={items.socialMedia}
                  />
                );
              })}{" "}
            </>
          )}
        </div>
        <div className="flex justify-center my-4">
          {btn1 && <Btn b11={btn1} b12={btn2} />}
        </div>
      </div>
      <br />
      <hr />
      <br />
    </>
  );
}
