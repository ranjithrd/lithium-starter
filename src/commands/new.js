const app = require("lithium-cli")()

app.command(
	"new",
	async ({ args: { root } }) => {
		const path = root ?? "."
		await app
			.execute(
				`git clone https://github.com/ranjithrd/hydronium-template.git ${path}`,
				".",
				false
			)
			.catch((error) => {
				console.error(error)
			})
		await app.execute("rm -Rf .git && git init", path)
		console.log(
			app.colour.greenBright(
				`Created a directory.\n\nTo start coding, just open up the ${root} folder in your favourite editor and run yarn cli install. \n\nHappy coding!`
			)
		)
	},
	[
		{
			question: "Please enter the directory to clone in",
			type: "string",
			optionArgument: "root",
		},
	]
)

module.exports = app.export()
