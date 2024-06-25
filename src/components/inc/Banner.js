import React, { useState } from 'react'

const Banner = () => {
    const [show, setShow] = useState(true);

    if (!show) {
        return null;
    }

    return (
        <div className="alert alert-info alert-dismissible fade show" role="alert">
            <h2 className='closable-banner-title'>We've launched our new book: FlyStudyThrive Experts Handbook to College Admission! </h2>
            <strong>Notice!</strong> This is an important notice for all users. Please read it carefully.
            <button type="button" className="btn-close" aria-label="Close" onClick={() => setShow(false)}></button>
        </div>
    );
};

export default Banner
