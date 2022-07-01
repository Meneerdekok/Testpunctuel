const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	
	const row = new discord.MessageActionRow().addComponents(
	
	    new discord.MessageButton()
		    .setcustomId("test")
		    .setLabel("TEST")
		    .setStyle("DANGER")
	
	
	);
	
	message.channel.send({ content: "Dit is een test", components: [row]});

	
}



