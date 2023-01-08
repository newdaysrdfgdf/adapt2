const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'a0af14b6-599e-4542-b425-2bc32a61db84'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
