var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import RNFetchBlob from "rn-fetch-blob";
export function register() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield RNFetchBlob.config({
            trusty: true,
        })
            .fetch('POST', '', {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }, JSON.stringify({}))
            .then((response) => {
            return response.json();
        })
            .then((responseJson) => {
            return responseJson;
        }).catch(e => {
            console.log('error: ', e);
        });
    });
}
//# sourceMappingURL=register.js.map