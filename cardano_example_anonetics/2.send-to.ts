import {
    Blockfrost,
    Lucid,
   } from "https://deno.land/x/lucid@0.8.3/mod.ts";

   const lucid = await Lucid.new(
    new Blockfrost(
    "https://cardano-preview.blockfrost.io/api/v0",
    "previewYwiGB51e5bnwQejrYXUMevEobnKbQerm",
    ),
    "Preview",
   );

lucid.selectWalletFromPrivateKey(await Deno.readTextFile("./wallet2.sk"));

const tx = await lucid.newTx()
  .payToAddress("addr_test1vqlv6xvkfmv5ryyyajzyhzq9tz4uqujhujdtrqqs97yfjyss5rvat", { lovelace: 10000000n })
  .complete();

const signedTx = await tx.sign().complete();

const txHash = await signedTx.submit();
 //console.log(details);
console.log(txHash);