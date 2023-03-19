// business logic file of my application

export class CryptoService {
    static async getAllCoins() {


        try {
            let cryptoResponse = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`)

            if (!cryptoResponse.ok) {
                throw Error(cryptoResponse.statusText);
            }
            return cryptoResponse.json();
        }

        // fetch returns me a promise; I can then use a .then() to handle it


        // handling the error thrown above in a catch block
        catch (cryptoError) {
            return cryptoError.message;
        }
        // adding a semicolon here now tells JS that's the end of handling the response gotten




    }
}
