window.crypto.subtle.generateKey({
                    name: "RSA-OAEP",
                    modulusLength: 2048, //can be 1024, 2048, or 4096
                    publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
                    hash: {
                        name: "SHA-256"
                    }, //can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
                },
                true, //whether the key is extractable (i.e. can be used in exportKey)
                ["encrypt", "decrypt"] //must be ["encrypt", "decrypt"] or ["wrapKey", "unwrapKey"]
            )
            
 
 
 window.crypto.subtle.encrypt({
                            name: "RSA-OAEP",
                            iv: iv,
                        },
                        publicKey, //from generateKey or importKey above
                        asciiToUint8Array(plainText) //ArrayBuffer of data you want to encrypt
                    )
                    .then(function(encrypted) {
                        //returns an ArrayBuffer containing the encrypted data
                        document.getElementById("cipherText").value = bytesToHexString(encrypted);
                        document.getElementById("salt").value = bytesToHexString(iv);
                    })
                    .catch(function(err) {
                        console.error(err);
});
                    
                    
var cipherText = document.getElementById("cipherText").value;
    window.crypto.subtle.decrypt({
                name: "RSA-OAEP",
                iv: iv
            },
            privateKey, //from generateKey or importKey above
            hexStringToUint8Array(cipherText) //ArrayBuffer of the data
        )
        .then(function(decrypted) {
            alert(bytesToASCIIString(decrypted));
        })
        .catch(function(err) {
            console.error(err);
        });
                    