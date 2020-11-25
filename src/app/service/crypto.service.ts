import {Injectable} from '@angular/core';
import sjcl from 'sjcl';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() {
  }

  encrypt(value: any): string {
    const hash = sjcl.hash.sha256.hash(value);
    return sjcl.codec.hex.fromBits(hash);
  }

}
