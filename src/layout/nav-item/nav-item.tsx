import "@/layout/nav-item/nav-item.css"
import { NavLink } from "react-router";

interface NavItemProps {
  to: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

function NavItem({ to, label, onClick, className = "" }: NavItemProps) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        isActive ? `nav-item-active ${className}` : `nav-item ${className}`
      }
    >
      {label}
    </NavLink>
  );
}

export default NavItem;
