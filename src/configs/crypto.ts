import { EncryptionTransformer } from "typeorm-encrypted";

export const Crypto = new EncryptionTransformer({
    key: `${process.env.CRYPTO_KEY}`,
    algorithm: 'aes-256-cbc',
    ivLength: 16,
    iv: `${process.env.CRYPTO_IV}`
})