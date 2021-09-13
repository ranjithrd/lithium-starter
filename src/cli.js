#!/usr/bin/env node

const lithium = require("lithium-cli")

const app = lithium()

app.setConfig({
	header: () => {
		console.log(
			app.colour.blueBright(
				app.box("Hydronium", {
					padding: 1,
					margin: 1,
				})
			)
		)
		// console.log("\n")
	},
	footer: () => {
		// console.log(
		// 	app.colour.blueBright(
		// 		"Hydronium"
		// 	)
		// )
		console.log("\n")
	},
})

app.import(require("./commands/new"))

app.start()
