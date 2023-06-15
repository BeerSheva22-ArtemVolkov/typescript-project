import CipherDecipher from "./CipherDecipher";
import CipherType from "./model/CipherType";
import KeyConfig from "./config/key-config.json"

export default class ShiftCipher implements CipherDecipher {

    private map: Map<string, number>;
    private key: number;

    constructor() {
        this.map = new Map();
        this.key = KeyConfig.minCode;
    }

    cipher(text: string): CipherType {
        const CipherType_key = this.generateKey();
        const CipherType_cipherText = Array.from(text).map(letter => {
            const charCode: number = letter.charCodeAt(0);
            const res = (charCode + this.key) % KeyConfig.maxCode;
            return String.fromCharCode(res > KeyConfig.maxCode ? KeyConfig.minCode + res : res);
        }).join('');
        this.map.set(CipherType_key, this.key);
        const res: CipherType = { cipherText: CipherType_cipherText, key: CipherType_key }
        return res;
    }

    decipher(cipher: CipherType): string {
        const key: number = this.map.get(cipher.key) ?? 0;
        if (key != 0) {
            return Array.from(cipher.cipherText).map(letter => {
                const charCode: number = letter.charCodeAt(0);
                const res = (charCode - key) % KeyConfig.maxCode;
                return String.fromCharCode(res < KeyConfig.minCode ? KeyConfig.maxCode + res  : res);
            }).join(''); 
        } else {
            return '';
        }

    }

    updateKey(): void {
        this.key = Math.round(Math.random() * (KeyConfig.maxCode - KeyConfig.minCode + 1) + KeyConfig.maxCode)
    }

    private generateKey(): string {
        let res;
        do {
            res = (Math.random() + 1).toString(36).substring(7);
        } while (this.map.has(res))
        return res;
    }
}