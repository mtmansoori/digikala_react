import { NavLink, useLocation } from 'react-router-dom';

const tabs = [
    {
        label: 'خانه',
        path: '/',
        outline: (
            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M3 10.5L12 3l9 7.5" />
                <path d="M5 11v8a2 2 0 002 2h10a2 2 0 002-2v-8" />
                <path d="M9 21V15h6v6" />
            </svg>
        ),
        solid: (
            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.69-8.69a2.25 2.25 0 00-3.18 0l-8.69 8.69a.75.75 0 001.06 1.06l8.69-8.69z" />
                <path d="M12 5.432l5.25 5.25V19.5a1.5 1.5 0 01-1.5 1.5h-2.25a.75.75 0 01-.75-.75V15h-1.5v5.25a.75.75 0 01-.75.75H8.25a1.5 1.5 0 01-1.5-1.5v-8.818L12 5.432z" />
            </svg>
        ),
    },
    {
        label: 'دسته بندی',
        path: '/categories',
        outline: (
            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                <rect x="3.75" y="3.75" width="7.5" height="7.5" rx="1.5" />
                <rect x="12.75" y="3.75" width="7.5" height="7.5" rx="1.5" />
                <rect x="3.75" y="12.75" width="7.5" height="7.5" rx="1.5" />
                <rect x="12.75" y="12.75" width="7.5" height="7.5" rx="1.5" />
            </svg>
        ),
        solid: (
            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M3.375 3C2.34 3 1.5 3.84 1.5 4.875v6.75C1.5 12.66 2.34 13.5 3.375 13.5h6.75c1.035 0 1.875-.84 1.875-1.875v-6.75C12.125 3.84 11.285 3 10.25 3h-6.875zM13.625 3c-1.035 0-1.875.84-1.875 1.875v6.75c0 1.035.84 1.875 1.875 1.875h6.75c1.035 0 1.875-.84 1.875-1.875v-6.75C22.25 3.84 21.41 3 20.375 3h-6.75zM3.375 13.5C2.34 13.5 1.5 14.34 1.5 15.375v6.75C1.5 23.16 2.34 24 3.375 24h6.75c1.035 0 1.875-.84 1.875-1.875v-6.75c0-1.035-.84-1.875-1.875-1.875h-6.875zM13.625 13.5c-1.035 0-1.875.84-1.875 1.875v6.75c0 1.035.84 1.875 1.875 1.875h6.75c1.035 0 1.875-.84 1.875-1.875v-6.75c0-1.035-.84-1.875-1.875-1.875h-6.75z" />
            </svg>
        ),
    },
    {
        label: 'سبد خرید',
        path: '/cart',
        outline: (
            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 003 3h4.5a3 3 0 003-3M7.5 14.25H5.496m2.004 0l-.943-3.546m0 0l-.24-.901A1.125 1.125 0 013.117 8.25h.62m2.82 0h9.386m-9.386 0l.866 3.253M21 8.25h-1.704m0 0l-1.576 5.929a1.5 1.5 0 01-1.463 1.196H9.75" />
                <circle cx="9" cy="20.25" r="1.5" />
                <circle cx="18" cy="20.25" r="1.5" />
            </svg>
        ),
        solid: (
            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.557 9.592a3.752 3.752 0 00-2.497 2.13.75.75 0 00.686 1.067h13.5a.75.75 0 000-1.5H5.487a2.252 2.252 0 012.138-1.567h6.736a3.002 3.002 0 002.933-2.215l1.708-6.407A.75.75 0 0018.266 6H5.496l-.324-1.217A1.875 1.875 0 003.636 3.75H2.25zM9 19.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM18 19.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
            </svg>
        ),
    },
    {
        label: 'مگنت',
        path: '/magnet',
        outline: (
            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M6.5 3.5v8a5.5 5.5 0 0011 0v-8" />
                <path d="M4 3.5h2" /><path d="M18 3.5h2" />
                <path d="M7.5 8.5h2" /><path d="M14.5 8.5h2" />
                <line x1="12" y1="20" x2="12" y2="11" strokeWidth="2" />
                <path d="M9 17l3 3 3-3" fill="none" stroke="currentColor" />
            </svg>
        ),
        solid: (
            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M6.5 2.5a1 1 0 00-1 1v8a6.5 6.5 0 0013 0v-8a1 1 0 00-1-1h-3a1 1 0 00-1 1v8a2 2 0 01-4 0v-8a1 1 0 00-1-1h-3z" />
                <path d="M9 17l3 3 3-3H9z" />
            </svg>
        ),
    },
    {
        label: 'دیجی کالای من',
        path: '/profile',
        outline: (
            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
        ),
        solid: (
            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
        ),
    },
];


const BottomNav = () => {
    const location = useLocation();

    return (
        <div className="dock">
            {tabs.map((tab) => {
                const isActive = location.pathname === tab.path;
                return (
                    <NavLink
                        key={tab.label}
                        to={tab.path}
                        className={isActive ? 'dock-active text-neutral-900' : 'text-[#81858B]'}
                    >
                        {isActive ? tab.solid : tab.outline}
                        <span className={isActive ? 'dock-active dock-label text-neutral-900  text-[14px]' : 'text-neutral-500  text-[14px]'}>{tab.label}</span>
                    </NavLink>
                );
            })}
        </div>
    );
}

export default BottomNav;