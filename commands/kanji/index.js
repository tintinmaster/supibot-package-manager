module.exports = {
	Name: "kanji",
	Aliases: null,
	Author: "supinic",
	Last_Edit: "2020-09-08T17:25:36.000Z",
	Cooldown: 10000,
	Description: "Posts a quick summary of a given Kanji(?) character",
	Flags: ["mention","pipe"],
	Whitelist_Response: null,
	Static_Data: null,
	Code: (async function kanji (context, character) {
		if (!character) {
			return { 
				success: false,
				reply: "Pepega"
			};
		}
	
		const data = await sb.Got({
			prefixUrl: "https://app.kanjialive.com/api",
			url: "kanji/" + character
		}).json();
	
		if (data.Error) {
			return {
				success: false,
				reply: "Error: " + data.Error
			};
		}
	
		return {
			reply: `${data.ka_utf} (${data.kunyomi}; ${data.onyomi}): ${data.meaning}.`
		};
	}),
	Dynamic_Description: null
};