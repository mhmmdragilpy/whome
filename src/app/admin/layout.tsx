import { Metadata } from 'next';

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
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                                <span className="text-white font-bold text-lg">W</span>
                            </div>
                            <div>
                                <h1 className="font-bold text-foreground">WHOME Admin</h1>
                                <p className="text-xs text-foreground-muted">Dashboard Management</p>
                            </div>
                        </div>
                        <a
                            href="/"
                            className="text-sm text-foreground-muted hover:text-primary transition-colors"
                        >
                            ← Kembali ke Website
                        </a>
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
