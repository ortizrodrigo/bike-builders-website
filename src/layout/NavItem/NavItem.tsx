import "./NavItem.css";
import { NavLink } from "react-router";

interface NavItemProps {
  to: string;
  label: string;
  onClick?: () => void;
}

function NavItem({ to, label, onClick }: NavItemProps) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => (isActive ? "nav-item-active" : "nav-item")}
    >
      {label}
    </NavLink>
  );
}

export default NavItem;
