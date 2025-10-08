// https://stackoverflow.com/questions/72480583/react-router-dom-flowbite-navbar-problem-with-links
import {NavbarLink} from "flowbite-react";
import { useLinkClickHandler, useLocation } from "react-router";

export interface AppNavLinkProps {
    to: string;
    text: string;
}

export default function AppNavLink(props: AppNavLinkProps) {
    const location = useLocation();
    const clickHandler = useLinkClickHandler(props.to);
    
    return <span onClick={clickHandler}>
        <NavbarLink className="text-black" href={props.to} active={location.pathname === props.to}>
            {props.text}
        </NavbarLink>
    </span>;
}