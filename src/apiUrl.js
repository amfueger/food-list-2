let apiUrl;

console.log(process.env);

if(Object.keys(process.env).findIndex(key=>key== 'REACT_APP_LOCAL_VERSION')){
	apiUrl = 'http://localhost:9000'
} else {
	apiUrl = 'heroku url, if I had one'
}


export default apiUrl;