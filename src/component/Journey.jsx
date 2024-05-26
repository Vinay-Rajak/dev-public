import Discover from "./Discover";
import Date from "./Date";
export default function Journey({ Header, History, Footer = null }) {
  return (
    <>
      <Discover
        title={Header.title}
        heading={Header.heading}
        para={Header.para}
        btn={Header.btn}
        b11={Header.b11}
        b12={Header.b12}
      />
      <br /> <br />
      {History.map((item, index) => {
        return (
          <Date
            date={item.date}
            para={item.para}
            dHeading={item.dHeading}
            dPara={item.dPara}
            dBtn1={item.dBtn1}
            dBtn2={item.dBtn2}
            btn={item.btn}
            b11={item.b11}
            b12={item.b12}
            img={item.img}
          />
        );
      })}
      <br />
      <br />
      {Footer && (
        <Discover
          title={Footer.title}
          heading={Footer.heading}
          para={Footer.para}
          btn={Footer.btn}
          b11={Footer.b11}
          b12={Footer.b12}
        />
      )}
      <br />
      <hr /> <br />
    </>
  );
}
