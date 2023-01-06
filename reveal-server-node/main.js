var express = require('express');
var reveal = require('reveal-sdk-node');
var cors = require('cors');

const app = express();

app.use(cors()); // DEVELOPMENT only! In production, configure appropriately.



const authenticationProvider = async (userContext, dataSource) => {
	if (dataSource instanceof reveal.RVSqlServerDataSource) {
		return new reveal.RVUserNamePasswordDataSourceCredential("nitinHR", "0202#@!1990mY");
    }
	return null;
}

const revealOptions = {
    authenticationProvider: authenticationProvider,
    localFileStoragePath: "data"
}


//add reveal sdk
app.use('/', reveal(revealOptions));

app.listen(56565, () => {
    console.log(`Reveal server accepting http requests`);
});
