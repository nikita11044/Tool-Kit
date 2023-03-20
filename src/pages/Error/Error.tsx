import { Link } from 'react-router-dom';

export const Error = () => (
    <>
        <div>
            It seems that this page doesn&apos;t exist
        </div>
        <Link to="/">Return to main page</Link>
    </>
);
