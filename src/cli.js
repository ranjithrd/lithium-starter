#!/usr/bin/env node

const lithium = require("lithium-cli")

const app = lithium()

app.setConfig({
	header: () => {
		console.log(
			app.colour.blueBright(
				app.box("Your New Project Starts Here", {
					padding: 1,
					margin: 1,
				})
			)
		)
		console.log("\n")
	},
	footer: () => {
		console.log(
			app.colour.redBright(
				"Lithium -- A micro-framework for creating CLIs."
			)
		)
		console.log("\n")
	},
})

app.import(require("./commands/greet"))
app.import(require("./commands/bye"))

app.start()
