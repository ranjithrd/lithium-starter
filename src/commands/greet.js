const app = require("lithium-cli")()

app.command(
	"greet",
	({ args: { root } }) => {
		console.log(app.colour.blueBright(`Hello, ${root}`))
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
