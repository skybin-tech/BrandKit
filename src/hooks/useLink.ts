import { useEffect } from 'react';

type LinkProps = {
    href: string;
    rel?: string;
    type?: string;
};

/* simple 32-bit FNV-1a hash */
const hash = (str: string) => {
    let h = 0x811c9dc5;
    for (let i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);
        h = (h * 0x01000193) >>> 0;   // >>> keeps it 32-bit unsigned
    }
    return h.toString(36);          // compact base-36
};

const useLink = (
    href: string,
    rel: string = 'stylesheet',
    type: string = 'text/css'
) => {
    useEffect(() => {
        const id = `link-${hash(`${href}|${rel}|${type}`)}`;

        // already injected?
        if (document.getElementById(id)) return;

        const link = document.createElement('link');
        link.id = id;
        link.href = href;
        link.rel = rel;
        link.type = type;
        document.head.appendChild(link);

        return () => {
            const existing = document.getElementById(id);
            if (existing) document.head.removeChild(existing);
        };
    }, [href, rel, type]);
};

export default useLink;
