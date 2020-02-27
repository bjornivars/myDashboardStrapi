import React from 'react';

const Crypto = (prop) => {

    return(
        <>

<div className="col-md-12 mb-5">
<div className="card col-md-12">
  <div className="card-body">
    <h2 className="card-title">{prop.cryptoTitle}</h2>
    <div>
        <h3>{prop.cryptoBTC}</h3>
        <p>{prop.CryptoPrice}</p>
        <p>{prop.BTCvolume}</p>
    </div>
    <div>
        <h3>{prop.cryptoETH}</h3>
        <p>{prop.CryptoPrice}</p>
        <p>{prop.ETHvolume}</p>
    </div>
    <div>
        <h3>{prop.cryptoXRP}</h3>
        <p>{prop.CryptoPrice}</p>
        <p>{prop.XRPvolume}</p>
    </div>
  </div>
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