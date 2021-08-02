const app = require("lithium-cli")()

app.command(
	"bye",
	({ args: { root } }) => {
		console.log(app.colour.redBright(`Bye, ${root}`))
	},
	[
		{
			question: "Please enter your name",
			type: "string",
			optionArgument: "root",
		},
	]
)

module.exports = app.export()
