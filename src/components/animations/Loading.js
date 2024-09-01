import React, { useState, useEffect } from 'react';
import ProgressBar from './PorgressBar';

const Loading = ({ Component, onLoadingFinish }) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
    setTimeout(() => {
        setIsLoading(false);
    onLoadingFinish();
    }, 2000);
    }, [onLoadingFinish]);

    return (
        <div>
            {isLoading ? ( 
                <div className="loading-page">
                    <img src={`${process.env.PUBLIC_URL}/img/logo-loading.svg`} alt='loading-logo'></img>
                    <ProgressBar />
                </div>
            ) :( 
                <Component/>
            )}
        </div>
    );
};

export default Loading;