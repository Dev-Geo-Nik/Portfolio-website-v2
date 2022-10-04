export const asyncFetchFun = async (promise: any) => {
	try {
		const res = await promise;
		const data = await res.json();
		return [data, null];
	} catch (error) {
		console.log(error);
		return [null, error];
	}
};

// Example

// const promise = fetch("",{})
// async function main (){
//   const [data,error] = await asyncFetchFun(promise)
// }
