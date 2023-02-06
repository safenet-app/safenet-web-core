import React from "react";
import lighthouse from '@lighthouse-web3/sdk';

export default async function uploader(e) {
  
  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
      console.log(percentageDone);
    };
 
    const output = await lighthouse.upload(e, "cd9da361-54d4-4124-ac8d-43a5adb73d98", progressCallback);
    console.log('File Status:', output);
    console.log('Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash);
    return (
     {hash: output.data.Hash});
    /*
      output:
        {
          Name: "filename.txt",
          Size: 88000,
          Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
        }
      Note: Hash in response is CID.
    */

  }
