
import { utf8ToBytes, bytesToHex } from "ethereum-cryptography/utils";
import { sha256 } from "ethereum-cryptography/sha256";

export const copyToClipboard = async (text: string) => {
  await navigator.clipboard.writeText(text);
};

export const getHashId = (...args: any[]) => {
  const hash = sha256(utf8ToBytes(args.join("")));
  return bytesToHex(hash);
};
