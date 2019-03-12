import RNFetchBlob from "rn-fetch-blob";

export async function register () {
	return await RNFetchBlob.config({
		trusty: true,
	})
		.fetch('POST', '', {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			JSON.stringify(
				{
                   
				}
			))
		.then((response) => {
			
			return response.json();
		})
		.then((responseJson) => {
			return responseJson;
		}).catch(e => {
			console.log('error: ',e);
		});
}
