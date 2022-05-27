import { useEffect, useState } from "react";

import { connectWallet, getCurrentWalletConnected //import here
} from "./utils/interact.js";
import {  mintNFT } from "./utils/interact.js";
//import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";
//import Facebook from "./images/facebook_icon.png";
//import Twitter from "./images/twitter_icon.png";
//import Linkedln from "./images/linkedln.png";

const Minter = (props) => {

  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");
 
  useEffect(async () => {
    const {address, status} = await getCurrentWalletConnected();
    setWallet(address)
    setStatus(status);

    addWalletListener();
}, []);
function addWalletListener() {
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length > 0) {
        setWallet(accounts[0]);
        setStatus("👆🏽 Write a message in the text-field above.");
      } else {
        setWallet("");
        setStatus("🦊 Connect to Metamask using the top right button.");
      }
    });
  } else {
    setStatus(
      <p>
        {" "}
        🦊{" "}
        <a target="_blank" href={`https://metamask.io/download.html`}>
          You must install Metamask, a virtual Ethereum wallet, in your
          browser.
        </a>
      </p>
    );
  }
}
  

  const connectWalletPressed = async () => { //TODO: implement
   const walletResponse = await connectWallet();
      setStatus(walletResponse.status);
      setWallet(walletResponse.address);
    
  };

  const onMintPressed = async () => {
    const { status } = await mintNFT(url, name, description);
    setStatus(status);
};

  return (
  <div className="Minter">

      

      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      <br></br>
      <h1 id="title">NFT Minter</h1>
      <p>
        Follow the step below, you can mint your NFT.
      </p>
      <form>
        <h2> Input link: </h2>
        <input
          type="text"
          placeholder="https://gateway.pinata.cloud/ipfs/..."
          onChange={(event) => setURL(event.target.value)}
        />
        <h2> Name your NFT: </h2>
        <input
          type="text"
          placeholder="e.g. My bike"
          onChange={(event) => setName(event.target.value)}
        />
        <h2> Describe your NFT: </h2>
        <input
          type="text"
          placeholder="e.g. Wow so cool!"
          onChange={(event) => setDescription(event.target.value)}
        />
      </form>
      <button id="mintButton" onClick={onMintPressed}>
        Mint NFT
      </button>
      <p id="status">
        {status}
      </p>
   </div>
    
  );
  
};

export default Minter;

