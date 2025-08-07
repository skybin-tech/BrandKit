import { useEffect } from 'react';

type LinkProps = {
    href: string;
    rel?: string;
    type?: string;
};

const useLink = (href: string, rel: string = 'stylesheet', type: string = 'text/css') => {
    useEffect(() => {
        const link = document.createElement('link');
        link.href = href;
        link.rel = rel;
        link.type = type;
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, [href, rel, type]);
};

export default useLink;
