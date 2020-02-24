import React from 'react';

const Crypto = (prop) => {

    return(
        <>
        <div>
            <h2>{prop.cryptoTitle}</h2>
            <div>
                <h3>{prop.cryptoBTC}</h3>
                <p>{prop.CryptoPrice}</p>
                <p>{prop.BTCvolume}</p>
            </div>
            <div>
                <h3>{prop.cryptoETH}</h3>
                <p>{prop.ETHprice}</p>
                <p>{prop.ETHvolume}</p>
            </div>
            <div>
                <h3>{prop.cryptoXRP}</h3>
                <p>{prop.XRPprice}</p>
                <p>{prop.XRPvolume}</p>
            </div>
        </div>
    </>
    );
}

export default Crypto;


{/*
    https://api.cryptonator.com/api/ticker/btc-usd 
    https://api.cryptonator.com/api/ticker/eth-usd 
    https://api.cryptonator.com/api/ticker/xrp-usd 
*/}