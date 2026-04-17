import "./NavItem.css";
import { NavLink } from "react-router";

interface NavItemProps {
  to: string;
  label: string;
}

function NavItem({ to, label }: NavItemProps) {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "nav-item-active" : "nav-item")}>
      {label}
    </NavLink>
  );
}

export default NavItem;
