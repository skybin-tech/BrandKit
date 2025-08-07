// useLink.d.ts
declare module '@/hooks/useLink' {
    const useLink: (props: { href: string; rel?: string; type?: string }) => void;
    export default useLink;
}
