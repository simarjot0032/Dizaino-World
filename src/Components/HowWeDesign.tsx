import "../Styles/Design.css";
interface Props {
  main_head: string;
  array: any;
}
export default function HowWeDesign({ main_head, array }: Props) {
  return (
    <>
      <div className="how-we-design-container">
        <div className="how-we-design-header">
          <h2 className="how-we-design-heading">{main_head}</h2>
        </div>
        <div className="how-we-design-content-container">
          {array.map((item: any) => {
            return (
              <>
                <div className="how-we-design-card-container">
                  <img
                    src={item.image}
                    alt=""
                    className="how-we-design-card-image"
                  />
                  <h3 className="how-we-design-card-heading">{item.heading}</h3>
                  <p className="how-we-design-card-para">{item.desc}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
