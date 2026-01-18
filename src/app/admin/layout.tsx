import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Admin Dashboard - WHOME',
    robots: {
        index: false,
        follow: false,
    },
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background-secondary">
            {/* Admin Header */}
            <header className="fixed top-0 left-0 right-0 z-40 bg-card border-b border-card-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/admin" className="flex items-center gap-3">
                            <Image
                                src="/logo.png"
                                alt="WHOME Logo"
                                width={48}
                                height={48}
                            />
                            <div>
                                <h1 className="font-extrabold text-foreground tracking-wider font-[family-name:var(--font-orbitron)]">
                                    WHOME <span className="text-primary">Admin</span>
                                </h1>
                                <p className="text-xs text-foreground-muted">Dashboard Management</p>
                            </div>
                        </Link>
                        <Link
                            href="/"
                            className="text-sm text-foreground-muted hover:text-primary transition-colors flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Kembali ke Website
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
