import React from 'react'
import { Link, useMatch, useResolvedPath, LinkProps } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }: LinkProps) => {

    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ borderBottom: match ? "2px solid orange" : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    )
}

export default CustomLink