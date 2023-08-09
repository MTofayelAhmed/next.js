import Link from "next/link";

const NavLinks = [
    {
        path:'/',
        element: 'Home'
    },
    {
        path: "/about",
        element: "About",
    },
    {
        path: "/blog",
        element: "Blog",
    },
    {
        path: "/dashboard",
        element: "Dashboard"
    },
];

const Navbar = () => {
    return (
        <div className="flex items-center justify-between">
            <h1>Next Hero</h1>
            <ul className=" flex items-center justify-center ">
                {NavLinks.map(({ path, element }) => (
                    <li className=" mx-2" key={path}>
                        <Link href={path}>{element}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
