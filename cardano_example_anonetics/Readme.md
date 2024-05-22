## Cardano tx test


1. Send 10 ADA from wallet(A) to wallet(B)
 - Einfache Transaktion zwischen zwei Wallets. ADA ist die Kryptowährung. Die beiden Wallets liegen im Projekt.
    xxx.addr -> Adresse vom Wallet
    xxx.sk -> Secret Key 
    Nutze command 1

2. Send 10 ADA from wallet(A) to wallet(B) with metadata
 - Transaktion zwischen zwei Wallets wie in 1., jedoch mit Metadaten. Frontend liegt in index.html und wird mit

 ```bash
 deno run --allow-net --allow-read --allow-run server.ts 
```
gestartet.


3. Cardano Transaction per Transcation(TPT)
 - Mehrere Transaktionen mit einer Transaktion gleichzeitig abhandeln. Kann zwischen einem oder mehreren Wallets durchgeführt werden.
   Nutze command 3

### commands
```bash

deno run --allow-net --allow-read 2.send-to.ts

deno run --allow-net --allow-read 3.send-with-metadata.ts

deno run --allow-net --allow-read 4.tpt.ts

```

### Tools:
- Lucid - https://lucid.spacebudz.io
- Blockfrost - https://blockfrost.io
- node - https://nodejs.org/en/download/
- deno - https://deno.land/manual@v1.29.1/getting_started/installation

- Analyse mit 
https://preview.cexplorer.io/address/addr_test1vr3rqxlv0cevs6pvh6jc6gxg8etrgnzy4c3m8f4a3fx78rqzepsyn#data
https://preview.cexplorer.io/address/addr_test1vqlv6xvkfmv5ryyyajzyhzq9tz4uqujhujdtrqqs97yfjyss5rvat/tx#data