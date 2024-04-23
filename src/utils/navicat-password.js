
import CryptoJS from 'crypto-js'

class NavicatCommonPassword {
    hex2bin(str) {
        return str.match(/.{1,2}/g).reduce((str, hex) => str += String.fromCharCode(parseInt(hex, 16)), '')
    }

    bin2hex(str) {
        return str.split('').reduce((str, glyph) => str += glyph.charCodeAt().toString(16).length < 2 ? `0${glyph.charCodeAt().toString(16)}` : glyph.charCodeAt().toString(16), '')
    }
}

class NavicatTwelvePassword extends NavicatCommonPassword {
    key = null
    iv = null

    constructor(key = 'libcckeylibcckey', iv = 'libcciv libcciv ') {
        super()

        this.key = CryptoJS.enc.Latin1.parse(key)
        this.iv = CryptoJS.enc.Latin1.parse(iv)
    }

    encrypt(str) {
        return this.bin2hex(CryptoJS.AES.encrypt(
            str,
            this.key,
            { mode: CryptoJS.mode.CBC, iv: this.iv }
        ).ciphertext.toString(CryptoJS.enc.Latin1)).toUpperCase()
    }

    decrypt(str) {
        return CryptoJS.AES.decrypt(
            btoa(this.hex2bin(str.toLowerCase())),
            this.key,
            { mode: CryptoJS.mode.CBC, iv: this.iv }
        ).toString(CryptoJS.enc.Latin1)
    }
}

class NavicatPassword {
    cipher = null

    constructor(version = 12) {
        switch (version) {
            case 12:
                this.cipher = new NavicatTwelvePassword()
                break
            default:
                throw new Error('Version Not Support!')
        }
    }

    encrypt(str) {
        return this.cipher.encrypt(str)
    }

    decrypt(str) {
        return this.cipher.decrypt(str)
    }
}

export default NavicatPassword
