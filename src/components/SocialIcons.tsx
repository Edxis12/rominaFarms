type IconProps = { size?: number; className?: string };

export function FacebookIcon({ size = 24, className }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <path
                d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z"
                fill="currentColor"
            />
        </svg>
    );
}

export function InstagramIcon({ size = 24, className }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
        </svg>
    );
}

export function YoutubeIcon({ size = 24, className }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <rect x="2" y="5.5" width="20" height="13" rx="4" stroke="currentColor" strokeWidth="1.8" />
            <path d="M10.5 9.5l5 2.5-5 2.5v-5Z" fill="currentColor" />
        </svg>
    );
}

export function TikTokIcon({ size = 24, className }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <path
                d="M16.5 2h-3.2v13.6c0 1.5-1.2 2.7-2.7 2.7a2.7 2.7 0 0 1-2.7-2.7 2.7 2.7 0 0 1 2.7-2.7c.3 0 .6.05.9.13v-3.3a6 6 0 0 0-.9-.07 6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6V8.8a8.3 8.3 0 0 0 4.7 1.45V7a5.1 5.1 0 0 1-4.8-5Z"
                fill="currentColor"
            />
        </svg>
    );
}