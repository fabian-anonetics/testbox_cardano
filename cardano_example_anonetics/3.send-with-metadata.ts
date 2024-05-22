import {
  Blockfrost,
  Lucid,
} from "https://deno.land/x/lucid@0.8.3/mod.ts";

const args = Deno.args;
if (args.length < 1) {
  console.error("Metadatennachricht erforderlich");
  Deno.exit(1);
}
const metadata = args[0];

const lucid = await Lucid.new(
  new Blockfrost(
      "https://cardano-preview.blockfrost.io/api/v0",
      "previewYwiGB51e5bnwQejrYXUMevEobnKbQerm",
  ),
  "Preview",
);

lucid.selectWalletFromPrivateKey(await Deno.readTextFile("./wallet2.sk"));

const tx = await lucid.newTx()
.payToAddress("addr_test1vr3rqxlv0cevs6pvh6jc6gxg8etrgnzy4c3m8f4a3fx78rqzepsyn", { lovelace: 10000000n })
.attachMetadata(674, metadata)
.complete();

const signedTx = await tx.sign().complete();

const txHash = await signedTx.submit();
console.log(txHash);

