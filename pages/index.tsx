import Link from 'next/link';

const Home = () => (
    <div>
        <main>
            <div className="absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-dark">
                <Link href="/easy">
                    <button type="button" className="px-8 m-3 py-2 rounded  bg-white transition hover:scale-110">
                        Easy Mode
                    </button>
                </Link>
                <Link href="/hard">
                    <button type="button" className="px-8 m-3 py-2 rounded bg-white transition hover:scale-110">
                        Hard Mode
                    </button>
                </Link>
            </div>
        </main>
    </div>
);

export default Home;
