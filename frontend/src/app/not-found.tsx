import { NextPage } from 'next';
import Link from 'next/link'

const NotFoundPage: NextPage = () => {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link href="/">Return Home</Link>
        </div>
    );
};

export default NotFoundPage;