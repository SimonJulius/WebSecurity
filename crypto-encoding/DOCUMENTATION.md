# Crypto Encoding

### Intro

Sometimes, we want to ensure data confidentiality, integrity and authenticity are adhered to when transporting some sensitive customer data from frontend web to server.
One way to ensure data is safe is to encrypt the data being transported to the server. When the data gets to the server, the data is decrypted and used for whatever purpose the data needs to fulfil.

### Web Crypto API

In 2017, the W3C recommended the crypto api to be added to browsers. Since then, the adoption of it has spread and it now enjoys widespread browser support. Developers used to depend on NPM package to encrypt and decrypt data, this can possibly open our app to vulnerabilities associated with using 3rd party packages.

With crypto api, one can now encrypt data using an algorithm of your choice and ensuring data safety when transfering sensitive user data from web to server.

### Chosing Algorithm.

It is important to chose algorithm that meet the 3 criterials of:

1. ## Confidentiality

   This means ensures only the one who must access this data can access it.

2. ## Integrity

   This ensures that the data is not altered in any form while in transit from the sender to the recipient.

3. ## Authenticity
   This ensure the sender and reciever is verified. It ensure that whatever data is recieved from the sender is in fact correct, was not altered in any way and is from the correct source we are expecting.

In lieu of the above, algorithm like AES CBC is not encouraged as even though it gaurantee confidentiality, it does not gaunrantee **Integrity** and **Authenticity**. What this means is that a data encrypted with AES CBC algorithm can be altered and when the value is decrypted, the decryption works but the data will be different from data sent by user.

Hence it is adviced we use Authenticated Encryption with Associated Data (AEAD) such as

- AES-GCM
- ChaCha20-Poly1305 algorithm
