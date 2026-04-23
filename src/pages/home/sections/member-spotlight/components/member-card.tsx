import "./member-card.css";

type MemberCardProps = {
  name: string;
  role: string;
  description: string;
  image: string;
};

function MemberCard({ name, role, description, image }: MemberCardProps) {
  return (
    <div className="member-card">
      <div className="member-card-left">
        <img src={image} alt={name} className="member-card-image" />
      </div>
      <div className="member-card-right">
        <h3 className="member-card-name">{name}</h3>
        <p className="member-card-role">{role}</p>
        <p className="member-card-description">{description}</p>
      </div>
    </div>
  );
}

export default MemberCard;
