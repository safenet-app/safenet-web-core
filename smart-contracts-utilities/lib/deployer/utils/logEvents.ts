import { ContractReceipt } from "ethers";

export function decodeEvents(tx: ContractReceipt): any[] | boolean {
  try {
    const contractReceiptDecoded = tx?.events?.map((event) =>
      event?.decode?.(event.data, event.topics)
    );
    console.log(contractReceiptDecoded);

    if (contractReceiptDecoded) {
      return contractReceiptDecoded;
    } else {
      return false;
    }
  } catch (error) {
    console.error({
      message: "Cannot decode transaction events",
      error,
    });
    return false;
  }
}
