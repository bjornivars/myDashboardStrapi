import React from 'react';

const Crypto = (prop) => {
    return (
        <>
            <div className="col-md-3 mt-3">
                <div className="card">
                    <div className="card-body p-3">
                        <h5 className="card-title">Crypto Currency</h5>
                        <h3>{prop.cryptoName}</h3>
                        <p>Price: {prop.cryptoPrice}</p>
                        <p>Volume: {prop.cryptoPrice}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Crypto;


