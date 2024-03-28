import "@Styles/FeaturesSection.css";
interface Props {
  featurescard: any;
}
export default function Featuresbedroom({ featurescard }: Props) {
  return (
    <>
      <div className="features-container" data-aos="fade-left">
        <div className="features-container-header">
          <h2 className="features-header-heading">What We Provide?</h2>
        </div>
        <div className="features-content-container">
          {featurescard.map((card: any) => {
            return (
              <div className="features-card">
                <div className="features-card-number">{card.cnumber}</div>
                <h2 className="features-card-heading">{card.heading}</h2>
                <p className="features-card-content">{card.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
