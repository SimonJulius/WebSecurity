class CryptoEncryption {
  public static readonly KEY_LENGTH_IN_BYTE = 16; // 128 bit
  public static readonly IV_LENGTH_IN_BYTE = 16;
  public static readonly TAG_LENGTH_IN_BYTE = 16;
  private static readonly ALGORITHM = "AES-GCM";
  private readonly secreteKey: CryptoKey;
  private readonly taglengthInByte: number;

  constructor(
    secreteKey: CryptoKey,
    tagLengthInByte = CryptoEncryption.TAG_LENGTH_IN_BYTE
  ) {
    this.secreteKey = secreteKey;
    this.taglengthInByte = tagLengthInByte;
  }

  public static async getCryptoKeyFromRawKey(
    rawKey: Uint8Array
  ): Promise<CryptoKey> {
    return await crypto.subtle.importKey(
      "raw",
      rawKey,
      { name: this.ALGORITHM },
      true,
      ["encrypt", "decrypt"]
    );
  }

  public async encrypt(iv: Uint8Array, data: Uint8Array): Promise<ArrayBuffer> {
    return await crypto.subtle.encrypt(
      {
        name: CryptoEncryption.ALGORITHM,
        iv,
        tagLength: this.taglengthInByte * 8,
      },
      this.secreteKey,
      data
    );
  }
  public async decrypt(iv: Uint8Array, data: Uint8Array): Promise<ArrayBuffer> {
    return await crypto.subtle.decrypt(
      {
        name: CryptoEncryption.ALGORITHM,
        iv,
        tagLength: this.taglengthInByte * 8,
      },
      this.secreteKey,
      data
    );
  }
}
