import { useRef } from "react";

const GlowCard = ({ card, children, index }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (cardIndex) => (e) => {
    const target = cardRefs.current[cardIndex];
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    target.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => {
        cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-6 md:p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow" />
      <p className="text-white-50 text-sm mb-2">{card.company}</p>
      <p className="text-white-50 mb-5">{card.review}</p>
      {children}
    </div>
  );
};

export default GlowCard;
