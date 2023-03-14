const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, Embed, DiscordAPIError, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require(`discord.js`);
const prefix = '.';

const client= new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () =>{
    console.log("Mao is online");

    client.user.setActivity('Games', {type: "PLAYING" });
})
client.on("messageCreate", (message) => {
	const args1 = message.content.slice(prefix.length).trim().split(/ +/);
	switch (args1[0]) {
		case 'cnuy':
		  rndmessage(message);
	
		  function rndmessage(message) {
			var messages = ['https://i.imgur.com/Vb7Ga1h.mp4', 'https://imgur.com/8yB8ory', 'https://imgur.com/Q9z6K9f', 'https://imgur.com/roMyqMn', 'https://imgur.com/2FavKEA','https://imgur.com/6ZU6ghm','https://tenor.com/view/arknights-suzuran-suzuran-arknights-pat-gif-26031062','https://tenor.com/view/suzuran-%E9%88%B4%E8%98%AD-gif-23899006','https://tenor.com/view/suzuran-gif-24094104','https://tenor.com/view/arknights-suzuran-goldenglow-gg-gif-26560192','https://tenor.com/view/suzuran-gif-20369060'];
			var rnd = Math.floor(Math.random() * messages.length);
	
			message.channel.send(messages[rnd])
		  }
		  break;
		case 'merrychristmas':
			merrychristmas(message);
			
			function merrychristmas(message) {
				var messages1 = ['https://tenor.com/view/arknights-bell-smile-cute-adorable-gif-16533931','https://tenor.com/view/arknights-goldenglow-trumpet-toothache-gif-27230102'];
				var rnd1 = Math.floor(Math.random() * messages1.length);

					message.channel.send(messages1[rnd1])
			}
			break;
		case 'justsurtrit':
			justsurtrit(message);
				
			function justsurtrit(message) {
				var messages2 = ['https://tenor.com/view/surtr-arknights-just-use-surtr-gif-24975177','https://tenor.com/view/surtrwangy-gif-22090121'];
				var rnd2 = Math.floor(Math.random() * messages2.length);
	
					message.channel.send(messages2[rnd2])
				}
				break;
		case 'xincaituoi':
			xct(message);
						
			function xct(message) {
				var messages205 = ['https://i.imgur.com/M8iuwTW.mp4','https://i.imgur.com/nHeuyGw.mp4','https://i.imgur.com/yiFjLDp.mp4'];
				var rnd205 = Math.floor(Math.random() * messages205.length);
			
						message.channel.send(messages205[rnd205])
					}
					break;
		case 'nengachako':
			nengachako(message);
						
			function nengachako(message) {
				var messages3 = ['https://tenor.com/view/anime-arknights-gif-21966007','https://tenor.com/view/red-projekt-arknights-tail-provence-gif-22285642'];
				var rnd3 = Math.floor(Math.random() * messages3.length);
			
						message.channel.send(messages3[rnd3])
						}
						break;
		case 'imonfire':
			imonfire(message);
										
			function imonfire(message) {
				var messages4 = ['https://tenor.com/view/w-arknights-arknights-dance-gif-25199998','https://tenor.com/view/arknights-art-of-blade-eyjafjalla-hoshiguma-shining-gif-21361474','https://tenor.com/view/ejyafjalla-anime-arknights-gif-21228819','https://tenor.com/view/arknights-gif-22392540'];
				var rnd4 = Math.floor(Math.random() * messages4.length);
							
						message.channel.send(messages4[rnd4])
						}
						break;
		case 'segg':
			segg(message);
														
			function segg(message) {
				var messages5 = ['https://i.imgur.com/RtzTxDK.mp4','https://i.imgur.com/1ehkiQ3.mp4','https://i.imgur.com/YN22fTt.mp4','https://i.imgur.com/JSjoe6N.mp4','https://i.imgur.com/0jwnZRb.mp4','https://i.imgur.com/xunZNym.mp4','https://i.imgur.com/iemzmXR.mp4'];
				var rnd5 = Math.floor(Math.random() * messages5.length);
											
						message.channel.send(messages5[rnd5])
						}
						break;	
		case 'giamonbathanh':
			gmbh(message);
																		
			function gmbh(message) {
				var messages6 = ['https://i.imgur.com/ZeFTbPZ.mp4','https://i.imgur.com/6q0tv95.mp4','https://i.imgur.com/hio2QgQ.mp4','https://i.imgur.com/MOhRWug.mp4','https://i.imgur.com/EsqZat1.mp4','https://i.imgur.com/dwNqwif.mp4','https://i.imgur.com/SBWtmuf.mp4'];
				var rnd6 = Math.floor(Math.random() * messages6.length);
															
										message.channel.send(messages6[rnd6])
										}
										break;																		
		}
})

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    //message array

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    //COMMANDS
	

//test command

if (command === 'test') {
    message.channel.send("Bot is working");
}
if (command === 'help') {
	const help = new EmbedBuilder()
		.setColor("Random")
		.setTitle("Help")
		.setDescription("`.op`: xem tất cả lệnh liên quan đến operators.\n`.cnlist`: thông tin cn server.\n`.standard`: thông tin standard banner hiện tại.\n`.event`: thông tin sự kiện hiện tại.\n`.farm`: farm nguyên liệu.\n`.link`: các link liên quan đến game.")
		.setImage('https://i.imgur.com/KWYxkGD.png')
		.setTimestamp()
	
		message.channel.send({ embeds: [help] });
	}	

if (command === 'op') {
	const op = new EmbedBuilder()
		.setColor("Random")
		.setTitle("Operator")
		.setDescription("`.(tên operator)`: thông tin operator.\n`.art(tên operator)`: animation của operator.\n`.skin(tên operator)`: animation về skin của operator.\n`.l2d(skin)(tên operator)`: l2d về operator hoặc skin của operator đó.")
		.setImage('https://i.imgur.com/6PvwSp9.png')
		.setTimestamp()
	
		message.channel.send({ embeds: [op] });
	}	

if (command === '4fun') {
	const lmaofun = new EmbedBuilder()
		.setColor("Random")
		.setTitle("For Fun")
		.setDescription(".news, .gay, .cnuy, .wtf, .merrychristmas, .tamphaitinh, .justsurtrit, nengachako, .imonfire, .maychetvoitao, .trungrate, .nani, .bnuy, .psuy, .segg, .dmgame, .giamonbathanh, tannhungkophe, xincaituoi, .imamedicbut\n.bhbi : behind the scene break the ice\n.bhga : behind the scene guilding ahead\n.bhnl : behind the scene near light\n.s(number)kaltsit: meme kaltsit (gồm 1, 2, 3)\n.s(number)goldenglow: meme goldenglow (gồm 1,2)\n.s(number)w: meme w (gồm 1,2)\n.s(number)ceobe: meme ceobe (gồm 1, 2, 3, 4, 5)\n.s(number)zima: meme zima (gồm 1, 2, 3)\n.s1ifrit, .s1magallan, .s1exusiai")
		.setTimestamp()
	
		message.channel.send({ embeds: [lmaofun] });
	}	
if (command === 'link') {
	const link = new EmbedBuilder()
		.setColor("Random")
		.setTitle("Link")
		.setDescription("Thông tin về module: https://bit.ly/3JdB9E1\nThông tin về địch (sẽ được cập nhật thêm): https://bit.ly/3zOmf4p\nTra tag recruit, xem thông tin Operators, lên kế hoạch nâng Operator: https://aceship.github.io/\nLên kế hoạch nâng Operator: https://samidare.io/arknights/planner\nTra tỉ lệ rớt nguyên liệu ở các màn: https://penguin-stats.io/\nGiả lập Operators hiện có, giúp bạn không cần thiết vào game để show Operators khi nhờ tư vấn: https://www.krooster.com/\nThông tin relics trong IS2: https://bit.ly/3QybdX1\nGiả lập map: https://map.ark-nights.com/map\nXem skins: https://kokodayo.fun/skins\nTrang chủ Arknights official: https://www.arknights.global/\nMonster Siren: https://monster-siren.hypergryph.com/\nOfficial website IS2: https://arknights.global/crimsonsolitaire/")
		.setTimestamp()
	
		message.channel.send({ embeds: [link] });
	}	
if (command === 'lumen') {
    const embed = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Lumen')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns'})
	.setDescription('6★ Therapist Medic dễ dàng nhận được potential 6 thông qua shop event.')
	.setThumbnail('https://i.imgur.com/CKOyM3C.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Một medic có thể cung cấp hiệu ứng __Resist__, và khả năng xóa bỏ trạng thái xấu của đồng minh. Khác với mọi operators cùng subclass, Lumen có thể cấp hiệu ứng __Resist__ cho đồng minh thông qua những lần hồi phục mà không cần phải thông qua kỹ năng nào. Ngoài ra, Lumen phản ứng rất tốt với đồng minh dính trạng thái xấu ở Talent 2. Tuy Lumen được đánh giá cao nhờ vào khả năng xóa bỏ trạng thái xấu, lượng HPS đạt được trong toàn bộ trận đấu lại ít hơn so với khi không xóa bỏ trạng thái xấu, SP cost lại cao để đáp ứng nhu cầu này ở toàn bộ trận. Do đó, bạn có thể dùng Lumen như một medic bình thường' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - In Drizzle, Privation', value: '> Skill total healing: 1755/2193.75\n> Average HPS: 272/340\n• Hồi HP mỗi giây trong khoảng thời gian nhất định.\n• Kỹ năng không có gì đặc biệt nào khác.', inline: true },
		{ name: 'Skill 2 - In Downpour, Grace', value: '> Skill total healing: 1216.8/1521\n> Average HPS: 225/281\n__Ưu điểm__\n• Hồi phục tối đa 3 đồng minh.\n• Hồi phục nhiều đồng minh giúp Talent 1 hoạt động tốt hơn.\n• SP cost thích hợp để kích hoạt Talent 2.\n• Có khả năng xóa bỏ trạng thái xấu.\n\n__Nhược điểm__\n• Cost SP cao cho việc xóa bỏ trạng thái xấu.', inline: true },
	)
	.addFields({ name: 'Skill 3 - This Lantern Undying', value: '> Skill total healing: 324979.2/406224\n> Average HPS: 317/396\n__Ưu điểm__\n• Có khả năng xóa bỏ trạng thái xấu.\n• Đạn chỉ mất khi xóa bỏ trạng thái xấu, do đó hiệu lực kỹ năng là vĩnh viễn nếu không tiêu hao hết đạn.\n• ASPD cao nâng cao khả năng hồi phục tốt hơn so với medic bình thường.\n• Dùng làm medic bình thường rất tốt.\n\n__Nhược điểm__\n• Tiêu hao đạn sẽ mất một thời gian lâu để có thể sử dụng kỹ năng', inline: true })
	.setImage('https://i.imgur.com/UNiiOWl.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: tầm tấn công rộng nhưng ATK giảm mạnh khi hồi phục đơn vị ở xa\n• Potential 5 tăng Talent 2\n• Trust tăng +45 ATK, +30 DEF\n• Resist: giảm 50% hiệu lực của trạng thái xấu như choáng, đóng băng,...\n• Abnormal Status (trạng thái xấu): loại bỏ các hiệu ứng đồng minh đang gặp phải như choáng, đóng băng,...\n• Charged: tiếp tục hồi SP sau khi đạt tối đa. Sau khi SP đạt tối đa lần thứ 2 sẽ gọi là trạng thái Charged. Kích hoạt kỹ năng có Charged sẽ cho thêm hiệu ứng (tiêu hao tất cả SP khi kích hoạt kỹ năng)\n• Total healing và HPS bao gồm đã và không ảnh hưởng bởi trait. ', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [embed] });
}
if (command === 'artlumen') {
	const artlumen = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_4042_lumen_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [artlumen] });
}
if (command === 'artlumen') {
	const artlumen1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_4042_lumen_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [artlumen1] });
}
if (command === 'artlumen') {
	const artlumen2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/LumenGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [artlumen2] });
}
if (command === 'artlumen') {
	const artlumen3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/LumenGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [artlumen3] });
}
if (command === 'artlumen') {
	const artlumen4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1: In Drizzle, Privation")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/LumenGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [artlumen4] });
}
if (command === 'artlumen') {
	const artlumen5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: In Downpour, Grace")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/LumenGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [artlumen5] });
}
if (command === 'artlumen') {
	const artlumen6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2 (charged effect): In Downpour, Grace")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/LumenGIFS2Charged.gif')
	.setTimestamp()

	message.channel.send({ embeds: [artlumen6] });
}
if (command === 'artlumen') {
	const artlumen7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3: This Lantern Undying")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/LumenGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [artlumen7] });
}
if (command === 'windflit') {
    const windflit = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Windflit')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('5★ Artificer Supporter thuộc hội chân dài 1m80.')
	.setThumbnail('https://i.imgur.com/L6Uqg41.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Thuộc subclass có khả năng hỗ trợ toàn bộ đồng minh ở nhiều vị trí thông qua thiết bị hỗ trợ, tuy nhiên khả năng hỗ trợ từ các thiết bị cũng không có gì nổi bật và khá tốn kém. Windflit là operator chuyên về buff ATK, anh có thể buff ATK cho 1 hoặc 2 operator khác nhau, nhưng chỉ áp dụng cho mỗi Caster và Supporter. Vì chỉ số buff ATK lại thấp, thiết bị hỗ trợ lại mất nhiều thời gian để tái triển khai lại, việc buff ATK cho operator lại khá bất tiện so với những operator có khả năng buff mạnh mẽ hơn.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Machine Rapport', value: '> Skill total damage: 25200\n> Average DPS: 536\n__Ưu điểm__\n• Có DPS ổn định.\n• Có giữ charges.\n• Chi phí SP thấp.\n• Tấn công đa mục tiêu trong 8 ô xung quanh.\n\n__Nhược điểm__\n• Số SP cung cấp ít do bị phụ thuộc vào skill.', inline: true },
		{ name: 'Skill 2 - Energy Rapport', value: '> Skill total damage: 13104\n> Average DPS: 521\n__Ưu điểm__\n• Buff mạnh ATK.\n\n__Nhược điểm__\n• Chi phí SP cao.\n• Thời gian tái triển khai thiết bị bằng thời lượng kỹ năng, cần phải canh thời gian dùng skill để có thể buff ATK bằng 2 thiết bị tốt hơn.\n• Chỉ số buff ATK không cao đối với đơn và đa mục tiêu.', inline: true },
	)
	.setImage('https://i.imgur.com/VJAc3pV.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: có khả năng chặn 2 kẻ địch và dùng thiết bị hỗ trợ trong trận đấu.\n• Potential 5 tăng Talent.\n• Trust tăng +40 ATK, +40 DEF.\n• Sát thương và DPS ở phía trên không bao gồm thiết bị hỗ trợ cho bản thân.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [windflit] });
}
if (command === 'artwindflit') {
	const artwindflit1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_433_windft_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [artwindflit1] });
}
if (command === 'artwindflit') {
	const artwindflit2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_433_windft_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [artwindflit2] });
}
if (command === 'artwindflit') {
	const artwindflit3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/WindflitGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [artwindflit3] });
}
if (command === 'artwindflit') {
	const artwindflit4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/WindflitGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [artwindflit4] });
}
if (command === 'artwindflit') {
	const artwindflit5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1: Machine Rapport")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/WindflitGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [artwindflit5] });
}
if (command === 'artwindflit') {
	const artwindflit6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Energy Rapport")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/WindflitGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [artwindflit6] });
}
if (command === 'specter2') {
    const specteralter = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Specter the Unchained')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('6★ Dollkeeper Specialist limited operator.')
	.setThumbnail('https://i.imgur.com/PVQr7wv.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Nằm trong subclass có lối chơi linh hoạt và mới mẻ giữa bản gốc và thế thân, do đó khả năng sinh tồn rất tốt, có thể triển khai ở những nơi được coi là nguy hiểm và không bị phụ thuộc vào medic khi trụ đường, ngoài ra những debuff nhận phải sẽ biến mất khi chuyển đổi qua lại giữa bản gốc và thế thân. Talent 1 làm Specter trở thành một đơn vị có khả năng khống chế AoE, tuy nhiên chỉ số lại không đáng kể là bao. Talent 2 củng cố chỉ số HP cơ bản của cô cũng như đồng đội thuộc AH, và talent này thực sự rất hữu dụng khi đi kèm cùng Gladiia nói riêng hoặc cả team AH nói chung. SP cả 3 skill đều không quá cao, nhưng do stat thấp nên gần như Specter dễ chuyển thành thế thân làm mất hết SP hiện đạt được. Specter là operator có đánh giá rất thấp khi mới ra mắt. Tuy nhiên module đã cải thiện những khuyết điểm hiện có ở cả 2 Talent và khả năng hồi SP. Do đó Specter rất cần đầu tư nhiều tài nguyên vào để đạt được sức mạnh tốt hơn.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - The Skill To Survive', value: '> Skill total damage: 44625\n> Average DPS: 1146\n__Ưu điểm__\n• Hỗ trợ operator có HP thấp trong trường hợp cấp bách.\n\n__Nhược điểm__\n• Dễ chuyển thành thế thân.\n• Không tận dụng được hết toàn bộ thời lượng tăng ATK khi dễ chuyển thành thế thân.', inline: true },
		{ name: 'Skill 2 - The Thirst To Survive', value: '`Mastery 3 chỉ khi nâng cấp Module X`\n> Skill total damage: 48875\n> Average DPS: 1328\n__Ưu điểm__\n• Có thể tận dụng hết thời lượng skill.\n• DPS tốt.\n• Chống chịu nhiều nguồn sát thương.\n\n__Nhược điểm__\n• Cần đầu tư vào module để giảm rủi ro không hồi đủ SP mà đã chuyển thành thế thân.', inline: true },
	)
	.addFields({ name: 'Skill 3 - The Pressure to Survive', value: '`Nên Mastery 3`\n> Skill total damage: 36720\n> Average DPS: 996\n__Ưu điểm__\n• Dễ dùng.\n• Tấn công đa mục tiêu.\n• Sát thương gây nhiều hơn khi đối đầu với địch có HP cao.\n\n__Nhược điểm__\n• Chi phí SP cao.\n• Mất HP khi không tấn công kẻ địch có HP cao.\n• Cần đạt 1 trong 2 điều kiện để DPS tốt hơn skill 2: tấn công đa mục tiêu hoặc tấn công địch có HP cao.\n• Cần module Y để giảm rủi ro HP bị mất.', inline: true })
	.setImage('https://i.imgur.com/dhtJvlY.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: thay vì phải rút lui khi bị hạ gục, chuyển thành thế thân (thế thân có block bằng 0, tăng ATK). Sau 20 giây chuyển về bản gốc.\n• Potential 5 tăng Talent 2.\n• Trust tăng +80 ATK.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [specteralter] });
}
if (command === 'skadi2') {
    const skadialter = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Skadi the Corrupting Heart')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('6★ Bard Supporter thuộc Limited operator.')
	.setThumbnail('https://i.imgur.com/zoG6kiU.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Skadi là operator chuyên về khả năng buff thông qua chỉ số bản thân, và dễ dùng trong suốt trận đấu. Nhờ việc hồi HP một cách gián tiếp, nên operator không thể hồi HP theo cách trực tiếp sẽ rất thích điều này, kể cả đơn vị triệu hồi. Talent 1, Seaborn giúp khả năng buff của Skadi được mở rộng và linh hoạt hơn ở nhiều vị trí trong trận. Talent 2 tăng ATK bản thân để có khả năng buff đồng minh tốt hơn, nếu đi chung với team AH sẽ được tăng mạnh ATK. Nói về khả năng buff ATK, do buff bằng chỉ số nên lượng ATK buff cho đồng minh sẽ không được tốt hơn như Warfarin và Aak, bù lại Skadi sẽ lấy số lượng bù cho chất lượng. Cả 3 kỹ năng cô có được đều đa dụng và đa dạng. Skadi là operator đáng để có, bạn không cần phải đau đầu suy nghĩ nên chọn medic nào, vì Skadi có thể hồi HP và buff đa mục tiêu.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Chant of Returning by Varied Paths', value: '__Ưu điểm__\n`Mastery 3 để đi CC`\n• Giảm sát thương nhận vào cho tất cả đồng minh trong phạm vi.\n• Bình hồi phục HP di động trong trường hợp cấp bách.\n• Thời lượng kỹ năng lâu.\n\n__Nhược điểm__\n• Chi phí SP cao.\n• Có thể bị hạ gục nếu chịu áp lực quá lớn từ đồng minh nhận phải.', inline: true },
		{ name: 'Skill 2 - Wish of Burial Beyond the Light', value: '`Nên Mastery 3`\n__Ưu điểm__\n• Buff DEF, ATK cho tất cả đồng minh trong phạm vi.\n• Tăng khả năng hồi phục tốt hơn.\n• Phù hợp với người lười biếng.\n\n__Nhược điểm__\n• Chi phí SP cao.\n• Trait khi chưa kích hoạt kỹ năng không có khả năng hồi phục HP tốt, cần đi chung với operators có ATK, HP hoặc DEF cao để tránh trường hợp đồng minh đó ở đầu trận bị hạ gục.', inline: true },
	)
	.addFields({ name: 'Skill 3 - The Tide Surges, The Tide Recedes', value: '`Mastery 3 ở giai đoạn giữa hoặc cuối game`\n__Ưu điểm__\n• Buff mạnh ATK cho tất cả đồng minh trong phạm vi.\n• Gây sát thương chuẩn.\n\n__Nhược điểm__\n• HP mất mỗi giây dẫn đến tự hạ gục.', inline: true })
	.setImage('https://i.imgur.com/Q1isrQA.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: không tấn công, hồi HP cho tất cả đồng minh trong phạm vi bằng 10% ATK của bản thân mỗi giây.\n• Potential 5 tăng Talent 2.\n• Trust tăng +50 ATK, +30 DEF. \n• Inspire: tăng chỉ số cơ bản dựa trên hiệu ứng (chỉ áp dụng với mỗi hiệu ứng mạnh nhất).', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [skadialter] });
}
if (command === 'pudding') {
    const pudding = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Pudding')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Some name', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('4★Chain Caster nhận được thông qua mua trong shop')
	.setThumbnail('https://i.imgur.com/RlUFVo0.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Pudding có khả năng làm chậm tốt hơn Greyy nhờ khả năng lan gần cho các mục tiêu gần kề nhau, không bị phụ thuộc vào việc cần tất cả kẻ địch ở cùng một vị trí để làm chậm qua đòn đánh như cách Greyy làm. Tuy nhiên, sát thương khi nảy qua mỗi mục tiêu sẽ giảm dần đi, và talent đã giảm thiểu đi hậu quả này. Nếu bạn không muốn nâng Splash Caster vì phạm vi tấn công bé, thì Pudding có thể là lựa chọn tốt vì vừa có khả năng khống chế đám đông, đòn tấn công nảy sang kẻ địch khác, phạm vi tấn công bằng Core Caster, và cũng dễ dàng kiếm được.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Tactical Chant β', value: '> Skill total damage: 13970\n> Average DPS: 400\n• Kỹ năng không có gì nổi bật.', inline: true },
		{ name: 'Skill 2 - Diffusion Current', value: '> Skill total damage: 12573\n> Average DPS: 432\n__Ưu điểm__\n• Khống chế địch tốt.\n• DPS tốt không chỉ với 4 kẻ địch mà còn 2 kẻ địch.\n\n__Nhược điểm__\n• Mastery 3 để chi phí SP giảm đi.', inline: true },
	)
	.setImage('https://i.imgur.com/N7BPOag.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: đòn tấn công gây sát thương phép và làm chậm trong 0.5 giây. Đòn tấn công có thể nảy sang 4 kẻ địch và sát thương giảm 15% sau mỗi lần nảy.\n• Trust tăng +70 ATK.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [pudding] });
}
if (command === 'artpudding') {
	const pudding1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_4004_pudd_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [pudding1] });
}
if (command === 'artpudding') {
	const pudding2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_4004_pudd_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [pudding2] });
}
if (command === 'artpudding') {
	const pudding3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-10/PuddingGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [pudding3] });
}
if (command === 'artpudding') {
	const pudding4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-10/PuddingGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [pudding4] });
}
if (command === 'artpudding') {
	const pudding5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Diffusion Current")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/PuddingGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [pudding5] });
}
if (command === 'skinpudding') {
	const spudding1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Icefield Messenger series - Gleaming Festive Fey")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-12/PuddingSkin.jpeg')
	.setTimestamp()

	message.channel.send({ embeds: [spudding1] });
}
if (command === 'skinpudding') {
	const spudding2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-12/PuddingSkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [spudding2] });
}
if (command === 'skinpudding') {
	const spudding3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-12/PuddingSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [spudding3] });
}
if (command === 'skinpudding') {
	const spudding4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-12/PuddingSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [spudding4] });
}
if (command === 'irene') {
    const irene = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Irene')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('6★ Swordmaster Guard được mệnh danh là Yasuo.')
	.setThumbnail('https://i.imgur.com/41dDu9i.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Swordmaster đều có điểm yếu lớn nhất là hồi SP qua đòn đánh, nên sẽ có nhiều bất tiện xảy ra khiến cô không phải lựa chọn tốt ở CC high risk. Talent 2 của Irene đã giảm đi điểm yếu lớn này, do đó Irene rất phụ thuộc vào việc Elite 2. Talent 1 giúp cô giảm đi thiệt hại phải nhận khi đối đầu với kẻ địch kể cả có giáp cao, vì cả 3 skill đều có thể Levitate nên Irene là operator có khả năng đột phá nhất trong subclass. Tuy nhiên, hiệu ứng Levitate bị phụ thuộc vào cân nặng của địch. Nhờ vào talent, cô không nhất thiết phải cần thêm hỗ trợ nào khác trong việc trụ đường, Irene vẫn được sử dụng rất tốt trong story, event và IS.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Gust', value: '> Skill total damage: 2896\n> Average DPS: 2011\n__Ưu điểm__\n• Chi phí SP thấp.\n• Dễ dàng kích Talent 1.\n\n__Nhược điểm__\n• Thời gian Levitate quá ngắn.\n• Auto trigger dễ để lại những trường hợp dùng skill không cần thiết.\n• DPS không cao khi gặp phải kẻ địch hạng nặng.', inline: true },
		{ name: 'Skill 2 - Shattertide', value: '> Skill total damage: 2896\n> Average DPS: 1984\n__Ưu điểm__\n• Chi phí SP thấp.\n• Dễ dàng kích Talent 1.\n• Áp dụng tốt khả năng từ Talent 1\n• Thời gian Levitate lâu.\n• Có thể giữ charges.\n• Làm gián đoạn kỹ năng của địch tốt.\n\n__Nhược điểm__\n• Chỉ Levitate với địch có weight từ 3 trở xuống.\n• Không tấn công kẻ địch trên không.', inline: true },
	)
	.addFields({ name: 'Skill 3 - Judgment', value: '`Nên Mastery 3`\n> Skill total damage: 23892\n> Average DPS: 2365\n__Ưu điểm__\n• DPS cao.\n• Khả năng nuke tốt.\n• Gây sát thương vùng.\n• Thời gian Levitate lâu.\n• Áp dụng tốt khả năng từ Talent 1.\n• Tấn công được kẻ địch trên không.\n\n__Nhược điểm__\n• Chi phí SP cao.\n• Trong khoảng thời gian của animation skill (3.5 giây), vẫn có khả năng chặn kẻ địch, nhận sát thương hoặc kỹ năng bị gián đoạn bởi địch có hiệu ứng Stun.', inline: true })
	.setImage('https://i.imgur.com/ZkfLx4b.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: đòn tấn công gây sát thương 2 lần.\n• Potential 5 tăng Talent 2.\n• Trust tăng +80 ATK, +20 DEF.\n• Levitate: hất tung kẻ địch, biến chúng thành mục tiêu trên không và không thể di chuyển, tấn công. Thời gian hất tung giảm một nửa với địch có weight từ 3 trở lên.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [irene] });
}
if (command === 'artirene') {
	const irene1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_4009_irene_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [irene1] });
}
if (command === 'artirene') {
	const irene2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_4009_irene_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [irene2] });
}
if (command === 'artirene') {
	const irene3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/IreneGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [irene3] });
}
if (command === 'artirene') {
	const irene4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/IreneGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [irene4] });
}
if (command === 'artirene') {
	const irene5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1: Gust")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/IreneGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [irene5] });
}
if (command === 'artirene') {
	const irene6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Shattertide")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/IreneGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [irene6] });
}
if (command === 'artirene') {
	const irene7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3: Judgment")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/IreneGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [irene7] });
}
if (command === 'jackie') {
    const jackie = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Jackie')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('4★ Fighter Guard operator có hình dáng giống Korone')
	.setThumbnail('https://i.imgur.com/TG98wHx.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Jackie không phải là một lựa chọn tốt kể cả đối với newbie nếu như bạn đang tìm kiếm một người trụ lane tốt và rẻ. Jackie phụ thuộc vào việc né để có DPS tốt hơn, tuy nhiên đây là hành động may rủi và không cần thiết với newbie cũng như khả năng của bộ kỹ năng mang lại khi đi đôi với talent.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Grit Those Teeth!', value: '> Skill total damage: 1525\n> Average DPS: 1094\n__Ưu điểm__\n• Kết hợp với talent tốt.\n\n__Nhược điểm__\n• Kỹ năng không có gì nổi bật.', inline: true },
		{ name: 'Skill 2 - Pay Close Attention!', value: '> Skill total damage: 42944\n> Average DPS: 1390\n__Ưu điểm__\n• Thích hợp với địch có ASPD cao hoặc tầm xa.\n\n__Nhược điểm__\n• Bỏ qua talent.', inline: true },
	)
	.setImage('https://i.imgur.com/5bBqhuA.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: chặn 1 kẻ địch.\n• Potential 5 tăng talent.\n• Trust tăng +60 ATK.\n• Sát thương và DPS ở phía trên không bao gồm talent.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [jackie] });
}
if (command === "artjackie") {
	const jackie1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_347_jaksel_1.png")
	.setTimestamp()

	message.channel.send({ embeds: [jackie1]})
}
if (command === "artjackie") {
	const jackie2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_347_jaksel_2.png")
	.setTimestamp()

	message.channel.send({ embeds: [jackie2]})
}
if (command === "artjackie") {
	const jackie3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/2020-10/JackiePokeGIF.gif")
	.setTimestamp()

	message.channel.send({ embeds: [jackie3]})
}
if (command === "artjackie") {
	const jackie4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/2020-10/JackieDeployGIF.gif")
	.setTimestamp()

	message.channel.send({ embeds: [jackie4]})
}
if (command === "artjackie") {
	const jackie5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Pay Close Attention!")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/inline-images/JackieS2GIF.gif")
	.setTimestamp()

	message.channel.send({ embeds: [jackie5]})
}
if (command === "skinjackie") {
	const sjackie2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/inline-images/JackieSkinGIFPoke.gif")
	.setTimestamp()

	message.channel.send({ embeds: [sjackie2]})
}
if (command === "skinjackie") {
	const sjackie3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/inline-images/JackieSkinGIFBase.gif")
	.setTimestamp()

	message.channel.send({ embeds: [sjackie3]})
}
if (command === "skinjackie") {
	const sjackie4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/inline-images/JackieSkinGIFDeploy.gif")
	.setTimestamp()

	message.channel.send({ embeds: [sjackie4]})
}
if (command === 'haze') {
    const haze = new EmbedBuilder()
    .setColor("Random")
	.setTitle('Haze')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('4★ Core Caster')
	.setThumbnail('https://i.imgur.com/wUjOkvT.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Một Caster có khả năng cạnh tranh DPS với Click. Tuy nhiên, Haze sẽ yêu cầu về cách triển khai để bỏ đi khuyết điểm mà ở skill 2 có. Haze vẫn là một Core Caster rất tốt với newbie nếu bạn thiếu một operator có khả năng gây sát thương phép và không cần phải tốn nhiều tài nguyên.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - ATK Up β', value: '> Skill total damage: 18518\n> Average DPS: 537\n• Kỹ năng không có gì nổi bật.', inline: true },
		{ name: 'Skill 2 - Pay Close Attention!', value: '> Skill total damage: 25720\n> Average DPS: 712\n__Ưu điểm__\n• Chi phí SP thấp.\n• DPS cao.\n• Tăng ASPD giúp tận dụng talent tốt.\n\n__Nhược điểm__\n• HP thấp, khả năng bị hạ gục cao.', inline: true },
	)
	.setImage('https://i.imgur.com/KdWLTvu.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: đòn tấn công gây sát thương phép.\n• Potential 5 tăng talent.\n• Trust tăng +60 ATK.\n• Thiên béo', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [haze] });
}
if (command === "arthaze") {
	const haze1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_141_nights_1.png")
	.setTimestamp()

	message.channel.send({ embeds: [haze1]})
}
if (command === "arthaze") {
	const haze2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_141_nights_2.png")
	.setTimestamp()

	message.channel.send({ embeds: [haze2]})
}
if (command === 'gitano') {
    const gitano = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Gitano')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('4★ Splash Caster')
	.setThumbnail('https://i.imgur.com/oiVnS7p.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Một Caster khá thân thiện với newbie trong giai đoạn đầu game. Talent của Gitano sẽ tăng ngẫu nhiên 1 trong 3 chỉ số, tuy nhiên nếu rơi phải vào tăng HP thì đây là một chỉ số không cần thiết với Gitano. Gitano có thể giúp bạn dễ dàng vượt qua những map có quái rất đông ở giai đoạn mở đầu, như một số map ở mục Supply, Annihilation. Và bạn không nhất thiết phải elite 2 Gitano để đạt thêm nguồn sức mạnh, những tài nguyên đó hãy để dành cho operators khác vì càng về sau, khả năng mà Gitano có được lại bị hạn chế đi do SP cao hay talent không có đóng góp gì nhiều.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Tactical Chant β', value: '> Skill total damage: 15642\n> Average DPS: 464\n• Kỹ năng không có gì nổi bật.', inline: true },
		{ name: 'Skill 2 - Destiny', value: '> Skill total damage: 20856\n> Average DPS: 416\n__Ưu điểm__\n• Mở rộng phạm vi tấn công.\n• Tấn công tất cả mục tiêu trong phạm vi.\n\n__Nhược điểm__\n• Chi phí SP cao.', inline: true },
	)
	.setImage('https://i.imgur.com/iXChHUT.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: đòn tấn công gây sát thương phép trong vùng.\n• Potential 5 tăng talent.\n• Trust tăng +70 ATK.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [gitano] });
}
if (command === "artgitano") {
	const gitano1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_109_fmout_1.png")
	.setTimestamp()

	message.channel.send({ embeds: [gitano1]})
}
if (command === "artgitano") {
	const gitano2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_109_fmout_2.png")
	.setTimestamp()

	message.channel.send({ embeds: [gitano2]})
}
if (command === "skingitano") {
	const sgitano1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("EPOQUE series - Unknown Journey")
	.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_109_fmout_epoque%232.png")
	.setTimestamp()

	message.channel.send({ embeds: [sgitano1]})
}
if (command === "skingitano") {
	const sgitano2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Animation")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/inline-images/GitanoSkinGIF.gif")
	.setTimestamp()

	message.channel.send({ embeds: [sgitano2]})
}
if (command === 'greyy') {
    const greyy = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Greyy')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/5ipf13N.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Cũng giống như Gitano nhưng lại thiêng về khả năng làm chậm hơn. Do đó DPS mà Greyy mang lại không cao. Và vì độ trễ giữa các đòn đánh ở subclass này cao, nên khả năng khống chế đám đông không có được sự linh hoạt và thời gian làm chậm lại ít để có thể làm nổi bật được độ hiệu quả mà Greyy có được. Nếu bạn đang tìm operator có khả năng làm chậm thì có thể tìm kiếm Supporter operator làm lựa chọn thích hợp.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Tactical Chant β', value: '> Skill total damage: 11184\n> Average DPS: 333\n• Kỹ năng không có gì nổi bật.', inline: true },
		{ name: 'Skill 2 - Electrostatic Discharge', value: '> Skill total damage: 13980\n> Average DPS: 324\n__Nhược điểm__\n• Chi phí SP cao.\n• DPS thấp\n• Thời gian làm chậm không mấy là bao.', inline: true },
	)
	.setImage('https://i.imgur.com/Z20JrHB.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: đòn tấn công gây sát thương phép trong vùng.\n• Trust tăng +300 HP.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [greyy] });
}
if (command === "artgreyy") {
	const greyy1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_253_greyy_1.png")
	.setTimestamp()

	message.channel.send({ embeds: [greyy1]})
}
if (command === "artgreyy") {
	const greyy2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_253_greyy_2.png")
	.setTimestamp()

	message.channel.send({ embeds: [greyy2]})
}
if (command === "skingreyy") {
	const sgreyy1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("EPOQUE series - Music Egg Crafter")
	.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_253_greyy_epoque%238.png")
	.setTimestamp()

	message.channel.send({ embeds: [sgreyy1]})
}
if (command === "skingreyy") {
	const sgreyy2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/inline-images/GreyySkinGIFBase_0.gif")
	.setTimestamp()

	message.channel.send({ embeds: [sgreyy2]})
}
if (command === "skingreyy") {
	const sgreyy3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/inline-images/GreyySkinGIFDeploy.gif")
	.setTimestamp()

	message.channel.send({ embeds: [sgreyy3]})
}
if (command === 'indigo') {
    const indigo = new EmbedBuilder()
    .setColor("Random")
	.setTitle('Indigo')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('4★ Mystic Caster')
	.setThumbnail('https://i.imgur.com/sl8aQ7Q.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Thuộc subclass khá khó dùng ở trong game, không khuyến khích với newbie. Một dòng Caster có khả năng bùng nổ sát thương dựa trên cầu năng lượng. Do độ trễ giữa các đòn đánh cao, nên bạn cần phải ghi nhớ kiếm một vị trí thích hợp với số lượng địch di chuyển tới hướng của operator có dòng này ở một mức vừa phải, không quá nhanh cũng không quá nhiều, để có thể tránh đánh thường quá nhiều và tận dụng được cầu năng lượng một cách tốt hơn. Talent 1 của Indigo đã hỗ trợ việc tích cầu năng lượng một cách dễ hơn thông qua khả năng trói, cô không bị phụ thuộc vào kỹ năng quá nhiều để có thể trói. Tóm lại, nếu bạn muốn trải nghiệm dòng subclass này thì Indigo là lựa chọn dễ dùng nhất cho bạn.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Lighthouse Guardian', value: '> Skill total damage: 1157\n> Average DPS: 661\n__Ưu điểm__\n• Chuyển phạm vi thành một đường thẳng để hạn tránh có địch trong phạm vi, giúp hồi cầu năng lượng.\n__Nhược điểm__\n• Khó dùng', inline: true },
		{ name: 'Skill 2 - Labyrinth of Light', value: '> Skill total damage: 15864/26440\n> Average DPS: 573/749\n__Ưu điểm__\n• Khả năng trói địch.\n• Vừa gây sát thương lúc trói, vừa hồi cầu năng lượng khi địch bị trói.\n\n__Nhược điểm__\n• Chi phí SP cao.\n• Không thể kiểm soát được quá nhiều kẻ địch trong phạm vi.', inline: true },
	)
	.setImage('https://i.imgur.com/I8r9OJA.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: đòn tấn công gây sát thương phép. Khi không có kẻ địch trong phạm vi, hồi cầu năng lượng (tối đa 3) và phóng chúng một lượt.\n• Potential 5 tăng talent.\n• Trust tăng +100 ATK.\n• Sát thương và DPS ở skill 2 bao gồm khi talent đã và chưa kích hoạt.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [indigo] });
}
if (command === "artindigo") {
	const artindigo1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_469_indigo_1.png")
	.setTimestamp()

	message.channel.send({ embeds: [artindigo1]})
}
if (command === "artindigo") {
	const artindigo2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_469_indigo_2.png")
	.setTimestamp()

	message.channel.send({ embeds: [artindigo2]})
}
if (command === "artindigo") {
	const artindigo3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/2021-05/IndigoGIFPoke.gif")
	.setTimestamp()

	message.channel.send({ embeds: [artindigo3]})
}
if (command === "artindigo") {
	const artindigo4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Trait")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/inline-images/IndigoGIFCharge.gif")
	.setTimestamp()

	message.channel.send({ embeds: [artindigo4]})
}
if (command === "artindigo") {
	const artindigo5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/2021-05/IndigoGIFDeploy.gif")
	.setTimestamp()

	message.channel.send({ embeds: [artindigo5]})
}
if (command === "artindigo") {
	const artindigo6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1: Lighthouse Guardian")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/inline-images/IndigoGIFS1.gif")
	.setTimestamp()

	message.channel.send({ embeds: [artindigo6]})
}
if (command === "artindigo") {
	const artindigo7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Labyrinth of Light")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/inline-images/IndigoGIFS2.gif")
	.setTimestamp()

	message.channel.send({ embeds: [artindigo7]})
}
if (command === "skinindigo") {
	const sindigo1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("0011 series - Serene Day")
	.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_469_indigo_nian%237.png")
	.setTimestamp()

	message.channel.send({ embeds: [sindigo1]})
}
if (command === "skinindigo") {
	const sindigo2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/inline-images/IndigoSkinGIFPoke.gif")
	.setTimestamp()

	message.channel.send({ embeds: [sindigo2]})
}
if (command === "skinindigo") {
	const sindigo3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/inline-images/IndigoSkinGIFBase.gif")
	.setTimestamp()

	message.channel.send({ embeds: [sindigo3]})
}
if (command === "skinindigo") {
	const sindigo4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/inline-images/IndigoSkinGIFDeploy.gif")
	.setTimestamp()

	message.channel.send({ embeds: [sindigo4]})
}
if (command === 'matoimaru') {
    const matoimaru = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Matoimaru')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('4★Dreadnought Guard')
	.setThumbnail('hhttps://i.imgur.com/qv8AhZg.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Nếu bạn muốn một operator nâng cấp hơn so với Melantha thì có thể lựa chọn Matoimaru. Matoimaru rất rẻ và phù hợp với newbie. Vì HP được tối ưu nên cô có thể sẵn sàng đối đầu với kẻ địch có thể gây sát thương phép.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Regeneration β', value: '__Ưu điểm__\n• Chi phí SP thấp.\n• Hồi HP nhanh chóng giúp bền vững trên những trận chiến tay đôi.\n\n__Nhược điểm__\n• ATK không đổi.', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addFields({ name: 'Skill 2 - Demonic Power', value: '> Skill total damage: 24275\n> Average DPS: 1007\n__Ưu điểm__\n• Chi phí SP thấp.\n• Hạ gục địch nhanh chóng.\n\n__Nhược điểm__\n• Không thể đối đầu với địch có ASPD cao.', inline: true })
	.setImage('https://i.imgur.com/feXl65n.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: chặn 1 kẻ địch.\n• Potential 5 tăng talent.\n• Trust tăng +450 HP.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png' });

    message.channel.send({ embeds: [matoimaru] });
}
if (command === "artmatoimaru") {
	const matoimaru1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_289_gyuki_1.png")
	.setTimestamp()

	message.channel.send({ embeds: [matoimaru1]})
}
if (command === "artmatoimaru") {
	const matoimaru2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_289_gyuki_2.png")
	.setTimestamp()

	message.channel.send({ embeds: [matoimaru2]})
}
if (command === 'mousse') {
    const mousse = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Mousse')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('4★Arts Fighter Guard tên chuột giống mèo.')
	.setThumbnail('https://i.imgur.com/2PDFput.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Nếu bạn không có operator nào nổi trội về Caster thì Mousse có thể sẽ là người bạn đồng hành đáng tin cậy. Cô ấy sẽ là lựa chọn tốt với newbie cũng như cách tận dụng rất dễ, thích hợp khi gặp những đối thủ có DEF cao.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Scratch', value: '> Skill total damage: 1517.51\n> Average DPS: 787\n__Ưu điểm__\n• Chi phí SP thấp.\n• Kết hợp với talent giúp kích hoạt kỹ năng nhanh chóng.\n\n__Nhược điểm__\n• Không có đặc điểm gì nổi bật khác.', inline: true },
		{ name: 'Skill 2 - Fury', value: '> Skill total damage: 48560.4\n> Average DPS: 856\n__Ưu điểm__\n• Thích hợp với các tình huống lâu dài.\n• Đối đầu với các kẻ địch có ATK, ASPD cao.\n\n__Nhược điểm__\n• Chi phí SP cao.\n• Ít nơi thích hợp để tận dụng', inline: true },
	)
	.setImage('https://i.imgur.com/xRsDR96.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: đòn tấn công gây sát thương phép.\n• Potential 5 tăng talent.\n• Trust tăng +35 ATK, +35 DEF. ', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png' });

    message.channel.send({ embeds: [mousse] });
}
if (command === "artmousse") {
	const mousse1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_185_frncat_1.png")
	.setTimestamp()

	message.channel.send({ embeds: [mousse1]})
}
if (command === "artmousse") {
	const mousse2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_185_frncat_2.png")
	.setTimestamp()

	message.channel.send({ embeds: [mousse2]})
}
if (command === 'utage') {
    const utage = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Utage')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('4★ Musha Guard có tâm hồn đẹp.')
	.setThumbnail('https://i.imgur.com/AZm8KYv.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Một operator có khả năng chơi helidrop rất tốt, nhanh chóng hạ gục kẻ địch có RES thấp và rất hiệu quả. Utage rất rẻ, bền và bạn có thể dễ dàng tìm được sự hữu ích từ cô ta.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Space Out', value: '__Nhược điểm__\n• Đi ngược lại talent.', inline: true },
		{ name: 'Skill 2 - Descending Strike - Earth Splitter', value: '`Nên Mastery 3`\n> Skill total damage: 42298.2\n> Average DPS: 1927\n__Ưu điểm__\n• Gây sát thương phép.\n• Sử dụng tốt talent.\n• Phù hợp chơi helidrop\n\n__Nhược điểm__\n• Tránh những kẻ địch có ATK cao hoặc bùng nổ về sát thương.', inline: true },
	)
	.setImage('https://i.imgur.com/XBk2Zme.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: không thể được hồi phục bởi operator khác.  Mỗi đòn tấn công hồi phục 70 HP.\n• Trust tăng +30 ATK, +40 DEF.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png' });

    message.channel.send({ embeds: [utage] });
}
if (command === "artutage") {
	const utage1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_337_utage_1.png")
	.setTimestamp()

	message.channel.send({ embeds: [utage1]})
}
if (command === "artutage") {
	const utage2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_337_utage_2.png")
	.setTimestamp()

	message.channel.send({ embeds: [utage2]})
}
if (command === "artutage") {
	const utage3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/2020-03/ArtUtagePokeGIF.gif")
	.setTimestamp()

	message.channel.send({ embeds: [utage3]})
}
if (command === "artutage") {
	const utage4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/2020-03/ArtUtageDeployGIF.gif")
	.setTimestamp()

	message.channel.send({ embeds: [utage4]})
}
if (command === "artutage") {
	const utage5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1: Space Out")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/inline-images/ArtUtageS1GIF.gif")
	.setTimestamp()

	message.channel.send({ embeds: [utage5]})
}
if (command === "artutage") {
	const utage6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Descending Strike - Earth Splitter")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/inline-images/ArtUtageS2GIF.gif")
	.setTimestamp()

	message.channel.send({ embeds: [utage6]})
}
if (command === "skin1utage") {
	const s1utage1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Coral Coast series - Summer Flower FA661")
	.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_337_utage_summer%234.png")
	.setTimestamp()

	message.channel.send({ embeds: [s1utage1]})
}
if (command === "skin1utage") {
	const s1utage2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/inline-images/UtageSkinSipGIF.gif")
	.setTimestamp()

	message.channel.send({ embeds: [s1utage2]})
}
if (command === "skin1utage") {
	const s1utage3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/inline-images/UtageSkinDontSpillGIF.gif")
	.setTimestamp()

	message.channel.send({ embeds: [s1utage3]})
}
if (command === "skin1utage") {
	const s1utage4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/inline-images/UtageSkinDeployGIF.gif")
	.setTimestamp()

	message.channel.send({ embeds: [s1utage4]})
}
if (command === "skin2utage") {
	const s2utage1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("EPOQUE series - Disguise")
	.setImage("https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_337_utage_epoque%2315.png")
	.setTimestamp()

	message.channel.send({ embeds: [s2utage1]})
}
if (command === "skin2utage") {
	const s2utage2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/2022-09/UtageSkinGIFPoke.gif")
	.setTimestamp()

	message.channel.send({ embeds: [s2utage2]})
}
if (command === "skin2utage") {
	const s2utage3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/2022-09/UtageSkinGIFBase.gif")
	.setTimestamp()

	message.channel.send({ embeds: [s2utage3]})
}
if (command === "skin2utage") {
	const s2utage4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage("https://gamepress.gg/arknights/sites/arknights/files/2022-09/UtageSkinGIFDeploy.gif")
	.setTimestamp()

	message.channel.send({ embeds: [s2utage4]})
}
if (command === 'click') {
    const click = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Click')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('4★ Mech-accord Caster thường bị nhầm giới tính là nam.')
	.setThumbnail('https://i.imgur.com/o8xWLIi.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Là một operator dễ dàng có được ở giai đoạn đầu game. Dòng subclass này mặc dù có chỉ số cơ bản khá thấp nhưng đừng bỏ quên ATK được tăng dần bởi trait. Talent của Click tăng ASPD, do đó ATK tăng từ trait cũng rất nhanh chóng, giúp cho Click có được nguồn sát thương ổn định trong các giai đoạn của game. Tỉ lệ choáng từ skill 2 mang lại không cao, nhưng nhờ tăng ASPD nên Click đã làm rất tốt khả năng làm choáng kẻ địch trong suốt hiệu lực kỹ năng tồn tại. Click là operator rất phù hợp với newbie trong giai đoạn đầu game nếu bạn thật sự cần một Caster giá rẻ với DPS ổn cho đầu game, ngoài ra cũng có thể cung cấp những hiệu suất tốt cho factory trong base.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - ATK Up β', value: '> Skill total damage: 29051\n> Average DPS: 849\n__Ưu điểm__\n• Sát thương được tối ưu hơn khi kết hợp với talent.\n• Hiệu lực kỹ năng vừa phải.\n\n__Nhược điểm__\n• Kỹ năng không có gì nổi bật hơn ngoài tăng ATK.', inline: true },
		{ name: 'Skill 2 - Synchronized Attack', value: '> Skill total damage: 32805\n> Average DPS: 822\n__Ưu điểm__\n• Có khả năng làm choáng kẻ địch.\n• Hiệu lực kỹ năng lâu giúp thêm thời gian hoặc cơ hội choáng được địch.\n• Float Unit khóa kẻ địch, giúp choáng kẻ địch kể cả ngoài phạm vi tấn công của Click.\n\n__Nhược điểm__\n• Chi phí SP cao.', inline: true },
	)
	.setImage('https://i.imgur.com/QtNB4v1.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: điều khiển drone gây sát thương phép. Khi drone tiếp tục tấn công vào một mục tiêu nhiều lần, tăng sát thương (tối đa đến 110% ATK của operator).\n• Trust tăng +60 ATK.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [click] });
}
if (command === 'artclick') {
	const artclick1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_328_cammou_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [artclick1] });
}
if (command === 'artclick') {
	const artclick2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_328_cammou_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [artclick2] });
}
if (command === 'artclick') {
	const artclick3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2020-06/ArtClickGIFPoke_0.gif')
	.setTimestamp()

	message.channel.send({ embeds: [artclick3] });
}
if (command === 'artclick') {
	const artclick4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2020-06/ArtClickGIFDeploy_0.gif')
	.setTimestamp()

	message.channel.send({ embeds: [artclick4] });
}
if (command === 'artclick') {
	const artclick5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Synchronized Attack")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/ArtClickS2GIF_0.gif')
	.setTimestamp()

	message.channel.send({ embeds: [artclick5] });
}
if (command === 'skinclick') {
	const skinclick1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Witch Feast series - Grave Thief")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_328_cammou_witch%232.png')
	.setTimestamp()

	message.channel.send({ embeds: [skinclick1] });
}
if (command === 'skinclick') {
	const skinclick2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/ClickSkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [skinclick2] });
}
if (command === 'skinclick') {
	const skinclick3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/ClickSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [skinclick3] });
}
if (command === 'skinclick') {
	const skinclick4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/ClickSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [skinclick4] });
}
if (command === 'honeyberry') {
    const honeyberry = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Honeyberry')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('5★ Wandering Medic kiếm được thông qua mua shop.')
	.setThumbnail('https://i.imgur.com/DPXNjaA.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Honeyberry, một lựa chọn dễ dàng có được bằng cách chi cert đỏ vào để sỡ hữu được một bé hồi sát thương nguyên tố cực tốt. Nhìn chung thì Honeyberry là một AoE medic trá hình cùng với khả năng hồi phục sát thương nguyên tố gây ra trong khoảng thời gian liên tục. Do đó, Honeyberry rất dễ dàng để dùng và nhiều nơi để tận dụng tốt.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Spiritual Care', value: '`Nên Mastery 3`\n> Skill total healing: 8580\n> Average HPS: 150\n__Ưu điểm__\n• Chi phí SP thấp.\n• Hồi phục 2 đồng minh.\n• Hồi phục sát thương liên nguyên tố gây ra trong thời gian liên tục.\n__Nhược điểm__• Không dành cho những trường hợp sát thương nguyên tố nhận vào cao.', inline: true },
		{ name: 'Skill 2 - Rouse', value: '> Skill total healing: 5791.5\n> Average DPS: 181\n__Ưu điểm__\n• Hồi phục 3 mục tiêu.\n• Bảo vệ nhiều đồng minh tốt hơn do sát thương nguyên tố gây ra trong khoảng thời gian nhất định.\n\n__Nhược điểm__\n• Chi phí SP cao.\n• Không dành cho những trường hợp sát thương nguyên tố nhận vào cao.', inline: true },
	)
	.setImage('https://i.imgur.com/dgtNU9D.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: hồi phục đồng minh. Hồi phục sát thương nguyên tố bằng 50% ATK bản thân (có thể hồi phục đồng minh chưa dính sát thương nguyên tố).\n• Potential 5 tăng talent.\n• Trust tăng +150 HP tối đa, +35 ATK.\n• Elemental Damage (sát thương nguyên tố): bao gồm Nervous Impairment, Corrosion Damage, Burn Damage, Necrosis Damage.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [honeyberry] });
}
if (command === 'arthoneyberry') {
	const honeyberry1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_449_glider_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [honeyberry1] });
}
if (command === 'arthoneyberry') {
	const honeyberry2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_449_glider_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [honeyberry2] });
}
if (command === 'arthoneyberry') {
	const honeyberry3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-10/HoneyberryGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [honeyberry3] });
}
if (command === 'arthoneyberry') {
	const honeyberry4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-10/HoneyberryGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [honeyberry4] });
}
if (command === 'arthoneyberry') {
	const honeyberry5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1: Spiritual Care")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/HoneyberryGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [honeyberry5] });
}
if (command === 'arthoneyberry') {
	const honeyberry6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Rouse")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/HoneyberryGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [honeyberry6] });
}
if (command === 'skinhoneyberry') {
	const shoneyberry1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("EPOQUE series - Wilderness Behind")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_449_glider_epoque%2317.png')
	.setTimestamp()

	message.channel.send({ embeds: [shoneyberry1] });
}
if (command === 'skinhoneyberry') {
	const shoneyberry2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-11/HoneyberrySkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [shoneyberry2] });
}
if (command === 'skinhoneyberry') {
	const shoneyberry3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-11/HoneyberrySkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [shoneyberry3] });
}
if (command === 'skinhoneyberry') {
	const shoneyberry4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-11/HoneyberrySkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [shoneyberry4] });
}
if (command === 'skinhoneyberry') {
	const shoneyberry5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1: Spiritual Care")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-11/HoneyberrySkinGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [shoneyberry5] });
}
if (command === 'skinhoneyberry') {
	const shoneyberry6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Rouse")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-11/HoneyberrySkinGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [shoneyberry6] });
}
if (command === 'mulberry') {
    const mulberry = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Mulberry')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('5★ Wandering Medic nhận qua gacha.')
	.setThumbnail('https://i.imgur.com/qzrcYkh.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Mulberry, một operator hồi phục lượng lớn sát thương nguyên tố cho một đồng minh. Talent giúp tăng HPS cho Mulberry, giúp tối ưu việc hồi sát thương nguyên tố, tuy nhiên sẽ bị tốn 1 slot. Mulberry sẽ tỏa sáng ở những nơi có kẻ địch sốc sát thương nguyên tố đơn mục tiêu hoặc đa mục tiêu, do vậy tùy vào trường hợp nhất định sử dụng để thấy được Mulberry đã hoàn thành tốt nhiệm vụ như nào trong việc hồi phục sát thương nguyên tố.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Healing Haze', value: '> Skill total healing: 22276.8/24727.25\n> Average HPS: 237/263\n__Ưu điểm__\n• Chi phí SP thấp.\n• Có charges.\n• Hồi phục lượng lớn sát thương nguyên tố.\n\n__Nhược điểm__\n• Không dành cho những trường hợp nhận sát thương nguyên tố liên tục.\n• Không thích hợp với kẻ địch có khả năng gây AoE sát thương nguyên tố.', inline: true },
		{ name: 'Skill 2 - Safe Zone', value: '`Nên Mastery 3`\n> Skill total healing: 18122/20115.42\n> Average DPS: 295/327\n__Ưu điểm__\n• Giảm sát thương nhận vào trong phạm vi.\n• Hồi phục mục tiêu nhanh chóng.\n\n__Nhược điểm__\n• Chi phí SP cao.\n• ATK không đổi.', inline: true },
	)
	.setImage('https://i.imgur.com/fmgIK9A.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: hồi phục đồng minh. Hồi phục sát thương nguyên tố bằng 50% ATK bản thân (có thể hồi phục đồng minh chưa dính sát thương nguyên tố).\n• Potential 5 tăng talent.\n• Trust tăng +150 HP tối đa, +35 ATK.\n• Elemental Damage (sát thương nguyên tố): bao gồm Nervous Impairment, Corrosion Damage, Burn Damage, Necrosis Damage. \n• Sát thương và HPS ở 2 skill bao gồm khi chưa kích và đã kích talent.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [mulberry] });
}
if (command === 'artmulberry') {
	const mulberry1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_473_mberry_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [mulberry1] });
}
if (command === 'artmulberry') {
	const mulberry2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_473_mberry_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [mulberry2] });
}
if (command === 'artmulberry') {
	const mulberry3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-09/MulberryGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [mulberry3] });
}
if (command === 'artmulberry') {
	const mulberry4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-09/MulberryGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [mulberry4] });
}
if (command === 'artmulberry') {
	const mulberry5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Safe Zone")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MulberryGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [mulberry5] });
}
if (command === 'skinmulberry') {
	const smulberry1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("EPOQUE series - Plant Crude Drug")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_473_mberry_epoque%2314.png')
	.setTimestamp()

	message.channel.send({ embeds: [smulberry1] });
}
if (command === 'skinmulberry') {
	const smulberry2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MulberrySkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smulberry2] });
}
if (command === 'skinmulberry') {
	const smulberry3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MulberrySkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smulberry3] });
}
if (command === 'skinmulberry') {
	const smulberry4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MulberrySkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smulberry4] });
}
if (command === 'skinmulberry') {
	const smulberry5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Safe Zone")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MulberrySkinGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smulberry5] });
}
if (command === 'artspecter2') {
	const specter21 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_1023_ghost2_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [specter21] });
}
if (command === 'artspecter2') {
	const specter22 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_1023_ghost2_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [specter22] });
}
if (command === 'artspecter2') {
	const specter23 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/SpecterAlteGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [specter23] });
}
if (command === 'artspecter2') {
	const specter24 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Trait: chuyển thành thế thân sau khi bị trọng thương")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SpecterAlteGIFSubstitute.gif')
	.setTimestamp()

	message.channel.send({ embeds: [specter24] });
}
if (command === 'artspecter2') {
	const specter25 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Trait: chuyển về bản thể sau 20 giây")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SpecterAlteGIFSubstitute2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [specter25] });
}
if (command === 'artspecter2') {
	const specter26 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/SpecterAlteGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [specter26] });
}
if (command === 'artspecter2') {
	const specter27 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1: The Skill To Survive")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SpecterAlteGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [specter27] });
}
if (command === 'artspecter2') {
	const specter28 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: The Thirst To Survive")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SpecterAlteGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [specter28] });
}
if (command === 'artspecter2') {
	const specter29 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3: The Pressure to Survive")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SpecterAlteGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [specter29] });
}
if (command === 'artskadi2') {
	const skadi21 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_1012_skadi2_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [skadi21] });
}
if (command === 'artskadi2') {
	const skadi22 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_1012_skadi2_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [skadi22] });
}
if (command === 'artskadi2') {
	const skadi23 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-04/SkadiAlterGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [skadi23] });
}
if (command === 'artskadi2') {
	const skadi24 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-04/SkadiAlterGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [skadi24] });
}
if (command === 'artskadi2') {
	const skadi25 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1: Chant of Returning by Varied Paths")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SkadiAlterGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [skadi25] });
}
if (command === 'artskadi2') {
	const skadi26 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Wish of Burial Beyond the Light")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SkadiAlterGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [skadi26] });
}
if (command === 'artskadi2') {
	const skadi27 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3: The Tide Surges, The Tide Recedes")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SkadiAlterGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [skadi27] });
}
if (command === 'skinskadi2') {
	const sskadi21 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Bloodline of Combat series - Sublimation")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_1012_skadi2_boc%234.png')
	.setTimestamp()

	message.channel.send({ embeds: [sskadi21] });
}
if (command === 'skinskadi2') {
	const sskadi22 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/SkadiAlterSkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sskadi22] });
}
if (command === 'skinskadi2') {
	const sskadi23 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/SkadiAlterSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sskadi23] });
}
if (command === 'skinskadi2') {
	const sskadi24 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/SkadiAlterSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sskadi24] });
}
if (command === 'skinskadi2') {
	const sskadi25 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1: Chant of Returning by Varied Paths")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/SkadiAlterSkinGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sskadi25] });
}
if (command === 'skinskadi2') {
	const sskadi26 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Wish of Burial Beyond the Light")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/SkadiAlterSkinGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sskadi26] });
}
if (command === 'skinskadi2') {
	const sskadi27 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3: The Tide Surges, The Tide Recedes")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/SkadiAlterSkinGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sskadi27] });
}
if (command === "l2dskadi2") {
	message.channel.send("https://i.imgur.com/QdtzRa8.mp4");
}
if (command === "l2dskinskadi2") {
	message.channel.send("https://i.imgur.com/agxH2gt.mp4");
}
if (command === 'corroserum') {
    const corroserum = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Corroserum')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('5★ Blast Caster nhận qua gacha.')
	.setThumbnail('https://i.imgur.com/7zRH20w.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Toàn bộ kỹ năng của Corroserum không có gì nổi bật, chỉ tăng ATK và gây thêm hiệu ứng. Điều khiến Corroserum có DPS ổn nhất dựa vào vị trí thích hợp với phạm vi tấn công và số lượng kẻ địch trong phạm vi. Đổi lại talent của Corroserum rất khó để kích hoạt nếu đã đạt đủ điều kiện trên. Do vậy, anh ta khá mờ nhạt vì những gì anh làm được đều đã có operator khác làm tốt hơn nhiều.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Focus Overload', value: '> Skill total damage: 22825.55\n> Average DPS: 493\n__Ưu điểm__\n• Choáng khi kết thúc kỹ năng giúp kích talent.\n\n__Nhược điểm__\n• Không có chi phí SP ban đầu.\n• Số SP hồi bởi talent khi bị choáng không có là bao.', inline: true },
		{ name: 'Skill 2 - Conductive Corrosive Blast', value: '> Skill total damage: 15894\n> Average DPS: 435\n__Ưu điểm__\n• Câm lặng AoE.\n• Thời gian câm lặng lâu.\n• Kỹ năng bật tắt theo thủ công.\n\n__Nhược điểm__\n• Chi phí SP cao.\n• DPS thấp hơn skill 1.', inline: true },
	)
	.setImage('https://i.imgur.com/2VP1GBn.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: gây sát thương phép trong vùng theo một đường thẳng.\n• Potential 5 tăng talent.\n• Trust tăng +90 ATK.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [corroserum] });
}
if (command === 'artcorroserum') {
	const corroserum1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_489_serum_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [corroserum1] });
}
if (command === 'artcorroserum') {
	const corroserum2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_489_serum_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [corroserum2] });
}
if (command === 'artcorroserum') {
	const corroserum3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-10/CorroserumGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [corroserum3] });
}
if (command === 'artcorroserum') {
	const corroserum4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-10/CorroserumGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [corroserum4] });
}
if (command === 'artcorroserum') {
	const corroserum5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Conductive Corrosive Blast")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/CorroserumGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [corroserum5] });
}
if (command === 'wildmane') {
    const wildmane = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Wild Mane')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('5★ Charger Vanguard nhận qua event.')
	.setThumbnail('https://i.imgur.com/h5wtKNo.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Wild Mane có bộ kỹ năng thú vị nhưng ATK lại thấp hơn so với Vigna. Talent giúp giảm chi phí triển khai của Guard, tuy nhiên với general content thì số DP được giảm lại không đáng là bao, đối với Contigency Contract thì DPS của Wild Mane lại thấp để mà tận dụng được talent.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Stabbing Lance', value: '> Skill total damage: 43960\n> Average DPS: 1041\n__Ưu điểm__\n• Helidrop tốt.\n• Dễ dàng kích talent.\n\n__Nhược điểm__\n• ATK thấp.', inline: true },
		{ name: 'kill 2 - Lance Charge', value: '> Skill total damage: 22608\n> Average DPS: 795\n__Ưu điểm__\n• Kiểm soát được đám đông.\n• Dễ dàng hủy animation attack.\n• Mở rộng phạm vi giúp hỗ trợ operator từ phía sau.\n\n__Nhược điểm__\n• Chi phí SP cao.\n• Không phù hợp với talent.\n• Chỉ đẩy được quái có weight thấp.\n• Lực đẩy  không đổi từ level 1 đến mastery 3.', inline: true },
	)
	.setImage('https://i.imgur.com/eoRKaD6.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: gây sát thương phép trong vùng theo một đường thẳng.\n• Potential 5 tăng talent.\n• Trust tăng +90 ATK.' });

    message.channel.send({ embeds: [wildmane] });
}
if (command === 'artwildmane') {
	const wildmane1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_496_wildmn_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [wildmane1] });
}
if (command === 'artwildmane') {
	const wildmane2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_496_wildmn_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [wildmane2] });
}
if (command === 'artwildmane') {
	const wildmane3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-10/WildManeGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [wildmane3] });
}
if (command === 'artwildmane') {
	const wildmane4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-10/WildManeGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [wildmane4] });
}
if (command === 'artwildmane') {
	const wildmane5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Lance Charge")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/WildManeGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [wildmane5] });
}
if (command === 'skinwildmane') {
	const swildmane1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("EPOQUE series - Justice Maker")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_496_wildmn_epoque%2316.png')
	.setTimestamp()

	message.channel.send({ embeds: [swildmane1] });
}
if (command === 'skinwildmane') {
	const swildmane2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-09/WildmaneSkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [swildmane2] });
}
if (command === 'skinwildmane') {
	const swildmane3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-09/WildmaneSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [swildmane3] });
}
if (command === 'skinwildmane') {
	const swildmane4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1: Stabbing Lance")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-09/WildmaneSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [swildmane4] });
}
if (command === 'skinwildmane') {
	const swildmane5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Lance Charge")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-09/WildmaneSkinGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [swildmane5] });
}
if (command === 'flametail') {
    const flametail = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Flametail')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('6★ Pioneer Vanguard nhận thông qua gacha.')
	.setThumbnail('https://i.imgur.com/PN20Inl.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Siêu sóc nhí làm tốt vai trò tiên phong, vừa có DPS cao và khả năng sinh tồn tốt. Cả 2 talent của Flametail đều kết hợp rất ăn ý, mang lại DPS từ skill ở ngưỡng cao. Talent 2 cung cấp khả năng né khi chưa kích hoạt skill, thì talent 1 cho phép gây nhiều sát thương hơn cho nhiều mục tiêu bằng số block khi né thành công. Điều này giúp cho Flametail không bị phụ thuộc vào skill, nhanh chóng hạ gục kẻ địch và sát thương trong suốt trận đấu đều cao. Tuy vậy, Flametail sẽ hơi khó dùng một chút so với những Pioneer khác do bạn phải biết nên lúc nào kích hoạt kỹ năng, vì hiệu lực ở skill 3 rất ngắn. Thêm một lưu ý khác là DPS cao hay không còn tùy thuộc vào địch như chặn nhiều địch, đối đầu với kẻ địch tầm xa hoặc có ASPD cao, và những lưu ý này để tăng khả năng kích hoạt cả 2 talent. Flametail vẫn là operator rất đáng để nâng, cô nàng có thể vượt qua khả năng mong đợi trong toàn bộ trận đấu nếu đã đạt đủ yêu cầu trên.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Quick Intuition', value: '> Skill total damage: 636\n> Average DPS: 729\n__Ưu điểm__\n• Kích hoạt talent 1.\n\n__Nhược điểm__\n• DP nhận được ít.\n• Không tăng chỉ số cơ bản.', inline: true },
		{ name: 'Skill 2 - "Pinus Sylvestris"', value: '> Skill total damage: 3052.8\n> Average DPS: 800\n__Ưu điểm__\n• Giúp đồng đội có khả năng né sát thương vật lý.\n\n__Nhược điểm__\n• Chi phí SP cao.\n• Tỉ lệ né thấp.\n• Thời gian choáng ngắn, chỉ dùng để hủy animation attack.', inline: true },
	)
	.addFields({ name: 'Skill 3 - Flameheart', value: '`Nên Mastery 3`\n> Skill total damage: 16917.6\n> Average DPS: 1182\n__Ưu điểm__\n• Nhanh chóng kích hoạt.\n• Dễ dàng kích hoạt talent 1.\n• Né sát thương phép và vật lý.\n\n__Nhược điểm__\n• DP nhận được ít.\n• DPS cao phụ thuộc vào địch.\n• Hiệu lực skill ngắn.', inline: true })
	.setImage('https://i.imgur.com/maPxiB6.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: chặn 2 kẻ địch.\n• Potential 5 tăng Talent 2.\n• Trust tăng +85 ATK.' });

    message.channel.send({ embeds: [flametail] });
}
if (command === 'artflametail') {
	const flametail1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_420_flamtl_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [flametail1] });
}
if (command === 'artflametail') {
	const flametail2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_420_flamtl_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [flametail2] });
}
if (command === 'artflametail') {
	const flametail3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-10/FlametailGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [flametail3] });
}
if (command === 'artflametail') {
	const flametail4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-10/FlametailGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [flametail4] });
}
if (command === 'artflametail') {
	const flametail5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1: Quick Intuition")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/FlametailGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [flametail5] });
}
if (command === 'artflametail') {
	const flametail6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle('Skill 2: "Pinus Sylvestris"')
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/FlametailGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [flametail6] });
}
if (command === 'skinflametail') {
	const sflametail1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle('Achievement Star series - Sport For All')
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_420_flamtl_game%232.png')
	.setTimestamp()

	message.channel.send({ embeds: [sflametail1] });
}
if (command === 'skinflametail') {
	const sflametail2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle('Base 1')
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-06/FlametailSkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sflametail2] });
}
if (command === 'skinflametail') {
	const sflametail3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle('Base 2')
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-06/FlametailSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sflametail3] });
}
if (command === 'skinflametail') {
	const sflametail4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle('Deploy')
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-06/FlametailSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sflametail4] });
}
if (command === 'skinflametail') {
	const sflametail5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle('Skill 1: Quick Intuition')
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-06/FlametailSkinGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sflametail5] });
}
if (command === 'skinflametail') {
	const sflametail6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle('Skill 2: "Pinus Sylvestris"')
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-06/FlametailSkinGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sflametail6] });
}
if (command === 'skinflametail') {
	const sflametail7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle('Skill 3: Flameheart')
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-06/FlametailSkinGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sflametail7] });
}
if (command === 'nearl2') {
    const nearlalter = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Nearl The Radiant Knight')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('6★ Dreadnought Guard limited operator.')
	.setThumbnail('https://i.imgur.com/Qjl1DRs.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Có tính đa dụng cao, cả 3 kỹ năng đều có cách hoạt động khác nhau. Vì là 1 Dreadnought nên ATK của Nearl ở ngưỡng rất cao, đổi lại cô chỉ block được 1. Do vậy sẽ để lại rủi ro rất cao khi dùng để trụ lane. Cả 2 talent của Nearl đều được sử dụng rất tốt và dễ. Chính vì vậy nếu Nearl không thể gây được sát thương chuẩn ở kỹ năng thứ 3 thì đừng quên talent 2 đã bù trừ đi khoảng này.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Flaming Edge', value: '> Skill total damage: 2012800\n> Average DPS: 1944\n__Ưu điểm__\n• Tăng ASPD cho phép tối ưu talent 2.\n• Tăng phạm vi.\n\n__Nhược điểm__\n• Block 1.\n• Chi phí SP cao.', inline: true },
		{ name: 'Skill 2 - Night-scouring Gleam', value: '`Nên Mastery 3`\n> Skill total damage: 57873.92\n> Average DPS: 2067\n__Ưu điểm__\n• Không tốn Deployment Slot.\n• Kích hoạt tốt cả 2 talent.\n• Có Shield.\n• Helidrop tốt.\n\n__Nhược điểm__\n• Tăng thời gian tái triển khai.', inline: true },
	)
	.addFields({ name: "Skill 3 - Blazing Sun's Obeisance", value: '`Nên Mastery 3`\n> Skill total damage: 51432.96\n> Average DPS: 2017\n__Ưu điểm__\n• Gây sát thương chuẩn khi bị chặn bởi Blazing Sun.\n• Hỗ trợ được lane khác.\n\n__Nhược điểm__\n• Phụ thuộc vào Blazing Sun hoặc operator khác để tránh block 1.', inline: true })
	.setImage('https://i.imgur.com/D88ECq4.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: chặn 1 kẻ địch.\n• Potential 5 tăng Talent 2.\n• Trust tăng +200 HP tối đa, +85 ATK.\n• Sát thương và DPS chưa bao gồm Talent 1.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [nearlalter] });
}
if (command === 'artnearl2') {
	const nearl21 = new EmbedBuilder()
	.setColor("Random")
	.setTitle('Elite 0')
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_1014_nearl2_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [nearl21] });
}
if (command === 'artnearl2') {
	const nearl22 = new EmbedBuilder()
	.setColor("Random")
	.setTitle('Elite 2')
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_1014_nearl2_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [nearl22] });
}
if (command === 'artnearl2') {
	const nearl23 = new EmbedBuilder()
	.setColor("Random")
	.setTitle('Base')
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-10/NalterGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [nearl23] });
}
if (command === 'artnearl2') {
	const nearl24 = new EmbedBuilder()
	.setColor("Random")
	.setTitle('Deploy')
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-10/NalterGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [nearl24] });
}
if (command === 'artnearl2') {
	const nearl25 = new EmbedBuilder()
	.setColor("Random")
	.setTitle('Skill 1: Flaming Edge')
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/NalterGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [nearl25] });
}
if (command === 'artnearl2') {
	const nearl26 = new EmbedBuilder()
	.setColor("Random")
	.setTitle('Skill 2: Nightscouring Gleam')
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/NalterGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [nearl26] });
}
if (command === 'artnearl2') {
	const nearl27 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3: Blazing Sun's Obeisance")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/NalterGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [nearl27] });
}
if (command === 'skinnearl2') {
	const snearl22 = new EmbedBuilder()
	.setColor("Random")
	.setTitle('Base 1')
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-10/NTRSkinGIFPoke_0.gif')
	.setTimestamp()

	message.channel.send({ embeds: [snearl22] });
}
if (command === 'skinnearl2') {
	const snearl23 = new EmbedBuilder()
	.setColor("Random")
	.setTitle('Base 2')
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-10/NTRSkinGIFBase_0.gif')
	.setTimestamp()

	message.channel.send({ embeds: [snearl23] });
}
if (command === 'skinnearl2') {
	const snearl24 = new EmbedBuilder()
	.setColor("Random")
	.setTitle('Deploy')
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-10/NTRSkinGIFDeploy_0.gif')
	.setTimestamp()

	message.channel.send({ embeds: [snearl24] });
}
if (command === 'skinnearl2') {
	const snearl25 = new EmbedBuilder()
	.setColor("Random")
	.setTitle('Skill 1: Flaming Edge')
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-10/NTRSkinGIFS1_0.gif')
	.setTimestamp()

	message.channel.send({ embeds: [snearl25] });
}
if (command === 'skinnearl2') {
	const snearl26 = new EmbedBuilder()
	.setColor("Random")
	.setTitle('Skill 2: Nightscouring Gleam')
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-10/NTRSkinGIFS2_0.gif')
	.setTimestamp()

	message.channel.send({ embeds: [snearl26] });
}
if (command === 'skinnearl2') {
	const snearl27 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3: Blazing Sun's Obeisance")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-10/NTRSkinGIFS3_0.gif')
	.setTimestamp()

	message.channel.send({ embeds: [snearl27] });
}
if (command === "l2dnearl2") {
	message.channel.send("https://i.imgur.com/6929Fo1.mp4");
}
if (command === "l2dchen2") {
	message.channel.send("https://i.imgur.com/qJcVgWV.mp4");
}
if (command === "l2ddusk") {
	message.channel.send("https://i.imgur.com/eK5o7SJ.mp4");
}
if (command === "l2dskindusk") {
	message.channel.send("https://i.imgur.com/xtBcTlj.mp4");
}
if (command === "l2dskinnian") {
	message.channel.send("https://i.imgur.com/sZlBT6x.mp4");
}
if (command === "l2dling") {
	message.channel.send("https://i.imgur.com/jRYqvHz.mp4");
}
if (command === "news") {
	message.channel.send("https://i.imgur.com/vlkoJnq.png");
}
if (command === "farm") {
	message.channel.send("https://i.imgur.com/QHaGl2k.png");
}
if (command === "gay") {
	message.channel.send("https://i.imgur.com/mDa9eT2.mp4");
}
if (command === "l2dw") {
	message.channel.send("https://i.imgur.com/pGYQsbd.mp4");
}
if (command === "read") {
	message.channel.send("https://i.imgur.com/JJWGImw.jpg");
}
if (command === "l2dskinphantom") {
	message.channel.send("https://i.imgur.com/f2MjV6d.mp4");
}
if (command === "l2drosmontis") {
	message.channel.send("https://i.imgur.com/cme7FeZ.mp4");
}
if (command === "l2dskinw") {
	message.channel.send("https://i.imgur.com/SnTQUnn.mp4");
}
if (command === "l2dnian") {
	message.channel.send("https://i.imgur.com/vuYZOXs.mp4");
}
if (command === "l2dgavial2") {
	message.channel.send("https://i.imgur.com/rUbyqDS.mp4");
}
if (command === "l2dskinlee") {
	message.channel.send("https://i.imgur.com/Anuf1wS.mp4");
}
if (command === "l2dskinmizuki") {
	message.channel.send("https://i.imgur.com/2FC7BwA.mp4");
}
if (command === "l2dskinnearl2") {
	message.channel.send("https://i.imgur.com/WGkPZ0t.mp4");
}
if (command === "l2dskinpassenger") {
	message.channel.send("https://i.imgur.com/aVsZVTj.mp4");
}
if (command === "l2dskinrosmontis") {
	message.channel.send("https://i.imgur.com/A0x3t8Y.mp4");
}
if (command === "l2dskin2surtr") {
	message.channel.send("https://i.imgur.com/avmsqmN.mp4");
}
if (command === "l2dtexas2") {
	message.channel.send("https://i.imgur.com/3EdhlP6.mp4");
}
if (command === "s3ceobe") {
	message.channel.send("https://i.imgur.com/nMVvn4z.mp4");
}
if (command === "s3kaltsit") {
	message.channel.send("https://i.imgur.com/Nr3bXoe.mp4");
}
if (command === "s4ceobe") {
	message.channel.send("https://i.imgur.com/F3bFIkd.mp4");
}
if (command === "s2zima") {
	message.channel.send("https://i.imgur.com/DQJaWfz.mp4");
}
if (command === "s3zima") {
	message.channel.send("https://i.imgur.com/nRwDw4C.mp4");
}
if (command === "imamedicbut") {
	message.channel.send("https://i.imgur.com/x7oL8Fc.mp4");
}
if (command === "s1w") {
	message.channel.send("https://i.imgur.com/WqjFRLk.mp4");
}
if (command === "s2w") {
	message.channel.send("https://i.imgur.com/mRC61Y4.mp4");
}
if (command === "s2goldenglow") {
	message.channel.send("https://i.imgur.com/2OwuncV.mp4");
}
if (command === "s1exusiai") {
	message.channel.send("https://i.imgur.com/hUmsKlA.mp4");
}
if (command === "s5ceobe") {
	message.channel.send("https://i.imgur.com/R9q9X4k.mp4");
}
if (command === 'bagpipe') {
    const bagpipe = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Bagpipe')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('6★ Charger Vanguard operator.')
	.setThumbnail('https://i.imgur.com/7Pi1gG1.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Một Vanguard có nguồn DPS tốt nhất trong game hiện tại. Tuy nhiên thứ mà Bagpipe được biết đến nhiều nhất là nhờ qua talent 2 - cung cấp thêm SP cho tất cả Vanguard nếu Bagpipe được mang theo. Hỗ trợ rất tốt khi kết hợp với những Vanguard cung cấp nhiều DP trong giai đoạn game như Standard Bearer, Pioneer hoặc Agent, khiến việc triển khai operators diễn ra một cách nhanh chóng hơn. Bạn có thể dễ dàng thấy được lợi ích của talent này thông qua những hard mode hay contract liên quan đến tốc độ hồi DP.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Swift Strike γ', value: '> Skill total damage: 54698.54\n> Average DPS: 1156\nKhông có gì nổi bật', inline: true },
		{ name: 'Skill 2 - High-Impact Assault', value: '`Mastery 3 khi muốn giữ lane`\n> Skill total damage: 75446.40\n> Average DPS: 2067\n__Ưu điểm__\n• Chi phí SP thấp.\n• Có thể mang trụ lane.\n\n__Nhược điểm__\n• Block 1.', inline: true },
	)
	.addFields({ name: "Skill 3 - Locked Breech Burst", value: '`Nên Mastery 3`\n> Skill total damage: 59257.44\n> Average DPS: 1490\n__Ưu điểm__\n• DPS cao.\n• Sát thương lâu dài.\n• Khả năng chơi helidrop tốt.\n• Dễ dàng kích talent 1.\n• Elite enemy killer.\n\n__Nhược điểm__\n• Block 1.', inline: true })
	.setImage('https://i.imgur.com/zFZ9PNs.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: chặn 1 kẻ địch.\n• Potential 3 tăng Talent 1, Potential 5 tăng Talent 2.\n• Trust +85 ATK.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [bagpipe] });
}
if (command === 'artbagpipe') {
	const bagpipe1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_222_bpipe_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [bagpipe1] });
}
if (command === 'artbagpipe') {
	const bagpipe2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_222_bpipe_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [bagpipe2] });
}
if (command === 'artbagpipe') {
	const bagpipe3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2020-03/ArtBagpipePokeGIF.gif')
	.setTimestamp()

	message.channel.send({ embeds: [bagpipe3] });
}
if (command === 'artbagpipe') {
	const bagpipe4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2020-03/ArtBagpipeDeployGIF.gif')
	.setTimestamp()

	message.channel.send({ embeds: [bagpipe4] });
}
if (command === 'artbagpipe') {
	const bagpipe5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: High-Impact Assault")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/ArtBagpipeSkillGIF1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [bagpipe5] });
}
if (command === 'artbagpipe') {
	const bagpipe6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3: Locked Breech Burst")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/ArtBagpipeSkillGIF2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [bagpipe6] });
}
if (command === 'skinbagpipe') {
	const sbagpipe1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Whistlewind series - Queen I")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_222_bpipe_race%231.png')
	.setTimestamp()

	message.channel.send({ embeds: [sbagpipe1] });
}
if (command === 'skinbagpipe') {
	const sbagpipe2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/BagpipeSkinWhiteFlagGIF.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sbagpipe2] });
}
if (command === 'skinbagpipe') {
	const sbagpipe3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/BagpipeSkinWinnerGIF.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sbagpipe3] });
}
if (command === 'skinbagpipe') {
	const sbagpipe4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 3")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/BagpipeSkinBaseGIF.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sbagpipe4] });
}
if (command === 'skinbagpipe') {
	const sbagpipe4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/BagpipeSkinDeployGIF.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sbagpipe4] });
}
if (command === 'erato') {
    const erato = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Erato')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('5★ Besieger Sniper có được qua Contigency Contract event.')
	.setThumbnail('https://i.imgur.com/jI1JLxh.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Một sniper operator có thể tận dụng hiệu ứng sleep để bỏ qua DEF của địch, và talent này rất ăn ý với trait của Erato. Và vì điểm mạnh của Erato thông qua hiệu ứng sleep, nên cô sẽ hoàn toàn vô dụng khi đối mặt với kẻ địch kháng hiệu ứng này. Erato được dễ tận dụng nhất với skill 1, khi cô không cần phải đối đầu với nhiều địch có weight cao trong cùng một lúc. Skill 2 buộc phải phụ thuộc vào operators khác có thể gây hiệu ứng sleep như Kafka, Blemishine, Blacknight,... tuy nhiên để thích hợp với hiệu lực kỹ năng cũng như ASPD được tăng, khuyến khích đi chung với operator có khả năng gây hiệu ứng sleep trong một khoảng thời gian lâu như Sora để có thể tận dụng hết khả năng ở skill 2 mà Erato có được.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: "Skill 1 - Lullaby's Meter", value: "> Skill total damage: 25464\n> Average DPS: 566\n__Ưu điểm__\n• Bản thân có khả năng tự gây hiệu ứng sleep.\n• Kích được talent.\n\n__Khuyết điểm__\n• Kỹ năng tự động kích hoạt dễ dàng sinh ra nhiều lỗi khác.\n• Không có charges.\n• Số đòn gây ra trong khoảng thời gian địch dính hiệu ứng sleep ít.", inline: true },
		{ name: "Skill 2 - Heroes' Paean", value: '> Skill total damage: 20689.5\n> Average DPS: 686\n__Ưu điểm__\n• Thực hiện nhiều đòn tấn công nhanh hơn.\n\n__Nhược điểm__\n• Phụ thuộc vào operator khác có thể gây hiệu ứng sleep.', inline: true },
	)
	.setImage('https://i.imgur.com/QLRyr8Q.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: ưu tiên tấn công vào địch có weight cao nhất.\n• Trust tăng +150 HP tối đa, +70 ATK.\n• Sleep/Slumbering (ngủ): không di chuyển, không tấn công, và không bị tấn công bởi mục tiêu không có khả năng.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [erato] });
}
if (command === 'arterato') {
	const erato1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_4043_erato_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [erato1] });
}
if (command === 'arterato') {
	const erato2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_4043_erato_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [erato2] });
}
if (command === 'arterato') {
	const erato3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-05/EratoGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [erato3] });
}
if (command === 'arterato') {
	const erato4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-05/EratoGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [erato4] });
}
if (command === 'arterato') {
	const erato5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1: Lullaby's Meter")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/EratoGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [erato5] });
}
if (command === 'arterato') {
	const erato6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Heroes' Paean")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/EratoGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [erato6] });
}
if (command === 'skinerato') {
	const serato1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Icefield Messenger series- Untold Stories")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_4043_erato_snow%235.png')
	.setTimestamp()

	message.channel.send({ embeds: [serato1] });
}
if (command === 'skinerato') {
	const serato2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-12/EratoSkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [serato2] });
}
if (command === 'skinerato') {
	const serato3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-12/EratoSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [serato3] });
}
if (command === 'skinerato') {
	const serato4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-12/EratoSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [serato4] });
}
if (command === 'skinerato') {
	const serato5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1: Lullaby's Meter")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-12/EratoSkinGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [serato5] });
}
if (command === 'skinerato') {
	const serato6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Heroes' Paean")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-12/EratoSkinGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [serato6] });
}
if (command === 'mountain') {
    const mountain = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Mountain')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('6★ Fighter Guard operator.')
	.setThumbnail('https://i.imgur.com/K2ANlvO.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Thuộc một trong những operator đáng để có và nâng cấp ngay lập tức. Với chỉ số cơ bản mà Mountain có, bạn không cần phải hoạt động bất kì tế bào neuron nào, chỉ cần triển khai và nhìn những gì anh ta mang lại trong một trận đấu.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Left Hook', value: '> Skill total damage: 1704.94\n> Average DPS: 1281\nKhông có gì nổi bật', inline: true },
		{ name: 'Skill 2 - Sweeping Stance', value: '`Nên Mastery 3`\n> Skill total damage: ∞\n> Average DPS/HPS: 1740/192\n__Ưu điểm__\n• Chi phí SP thấp.\n• Thủ lane tốt.\n• Tự hồi HP.\n• Block 2.\n• Tấn công địch bằng số block.\n• Giúp bạn lười biếng.\n\n__Nhược điểm__\n• Giảm DEF (cần elite 2 để giảm đi rủi ro).', inline: true },
	)
	.addFields({ name: "Skill 3 - Earth-Shattering Smash", value: '`Nên Mastery 3`\n> Skill total damage: 89347.2\n> Average DPS: 1825\n__Ưu điểm__\n• DPS cao.\n• Sát thương lâu dài và nhiều mục tiêu.\n• Dễ dàng kích talent 1.\n• Có thể cancel animation attack của địch.', inline: true })
	.setImage('https://i.imgur.com/plMaGUM.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: chặn 1 kẻ địch.\n• Potential 5 tăng Talent 1.\n• Trust +45 ATK, +45 DEF.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [mountain] });
}
if (command === 'artmountain') {
	const mountain1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_264_f12yin_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [mountain1] });
}
if (command === 'artmountain') {
	const mountain2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_264_f12yin_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [mountain2] });
}
if (command === 'artmountain') {
	const mountain3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2020-12/MountainGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [mountain3] });
}
if (command === 'artmountain') {
	const mountain4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2020-12/MountainGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [mountain4] });
}
if (command === 'artmountain') {
	const mountain5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1: Left Hook")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MountainGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [mountain5] });
}
if (command === 'artmountain') {
	const mountain6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Sweeping Stance")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MountainGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [mountain6] });
}
if (command === 'artmountain') {
	const mountain7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3: Earth-Shattering Smash")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MountainGIFS3_0.gif')
	.setTimestamp()

	message.channel.send({ embeds: [mountain7] });
}
if (command === 'skin1mountain') {
	const smountain1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Bloodline of Combat series - Dark Cloud")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_264_f12yin_boc%233.png')
	.setTimestamp()

	message.channel.send({ embeds: [smountain1] });
}
if (command === 'skin1mountain') {
	const smountain2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MountainSkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smountain2] });
}
if (command === 'skin1mountain') {
	const smountain3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MountainSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smountain3] });
}
if (command === 'skin1mountain') {
	const smountain4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MountainSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smountain4] });
}
if (command === 'skin1mountain') {
	const smountain5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1: Left Hook")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MountainSkinGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smountain5] });
}
if (command === 'skin1mountain') {
	const smountain6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Sweeping Stance")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MountainSkinGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smountain6] });
}
if (command === 'skin1mountain') {
	const smountain7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3: Earth-Shattering Smash")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MountainSkinGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smountain7] });
}
if (command === 'skin2mountain') {
	const smountain21 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("EPOQUE series - Book Reader")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_264_f12yin_epoque%2315.png')
	.setTimestamp()

	message.channel.send({ embeds: [smountain21] });
}
if (command === 'skin2mountain') {
	const smountain22 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-09/MountainSkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smountain22] });
}
if (command === 'skin2mountain') {
	const smountain23 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-09/MountainSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smountain23] });
}
if (command === 'skin2mountain') {
	const smountain24 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-09/MountainSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smountain24] });
}
if (command === 'skin2mountain') {
	const smountain25 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1: Left Hook")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-09/MountainSkinGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smountain25] });
}
if (command === 'skin2mountain') {
	const smountain26 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Sweeping Stance")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-09/MountainSkinGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smountain26] });
}
if (command === 'skin2mountain') {
	const smountain27 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3: Earth-Shattering Smash")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-09/MountainSkinGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smountain27] });
}
if (command === "skinutage") {
	const skinutage = new EmbedBuilder()
	.setColor("Random")
	.setDescription("`.skin1utage`: Coral Coast series - Summer Flower FA661\n`.skin2utage`: EPOQUE series - Disguise")
	.setTimestamp()
	message.channel.send({ embeds: [skinutage]});
}
if (command === "skinmountain") {
	const skinmountain = new EmbedBuilder()
	.setColor("Random")
	.setDescription("`.skin1mountain`: Bloodline of Combat series - Dark Cloud\n`.skin2mountain`: EPOQUE series - Book Reader")
	.setTimestamp()
	message.channel.send({ embeds: [skinmountain]});
}
if (command === 'silverash') {
    const silverash = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('SilverAsh')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('6★ Lord Guard operator đời đầu.')
	.setThumbnail('https://i.imgur.com/cxxGaPK.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Một trong những operator đời đầu của game và là sự lựa chọn ưu tiên hàng đầu trong newbie banner. SilverAsh là sự kết hợp giữa DPS và support cho đồng minh. Cả 2 talent ngoài tăng lợi ích cho SilverAsh có thể gây DPS tốt hơn, thì còn có thể hỗ trợ đồng minh. Tuy nhiên, việc hỗ trợ mang lại từ talent chỉ thích hợp khi chơi helidrop là chủ yếu. Nhưng vẫn không thể phủ nhận anh ta không có khả năng hỗ trợ, tùy theo kỹ năng bạn mang, SilverAsh có thể làm mini defender thủ lane với khả năng tự hồi phục, hoặc làm một DPS trong tùy tình huống cần thiết.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Power Strike γ', value: '> Skill total healing: 2562.67\n> Average DPS: 1110\nKhông có gì nổi bật.\nDPS bị ảnh hưởng bởi trait.', inline: true },
		{ name: 'Skill 2 - Rules of Survival', value: '> Skill total healing: 4582.5\n> Average HPS: 104\n__Ưu điểm__\n• Cung cấp lượng lớn DP.\n• Bình HP di động.\n• Có thể hồi phục operators không thể được hồi phục theo cách chủ động.\n• Phù hợp talent 1.\n\n__Nhược điểm__\n• Chi phí SP cao.', inline: true },
	)
	.addFields({ name: "Skill 3 - Truesilver Slash", value: 'Nên Mastery 3\n> Skill total damage: 56618.64\n> Average DPS: 980\n__Ưu điểm__\n• DPS không bị ảnh hưởng bởi trait.\n• Đánh nhiều mục tiêu.\n• DPS cao.\n• Thích hợp chơi helidrop.\n\n__Nhược điểm__\n• Giảm mạnh DEF.\n• Tránh làm mục tiêu ưu tiên của kẻ địch tầm xa.', inline: true })
	.setImage('https://i.imgur.com/lZfvdiz.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: có thể thực hiện các đòn tấn công tầm xa, tuy nhiên sẽ bị giảm còn 80% atk.\n• Potential 5 tăng Talent 1.\n• Trust +40 ATK, +40 DEF. \n• Stealth: không thể làm mục tiêu nếu không bị chặn.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [silverash] });
}
if (command === 'artsilverash') {
	const silverash1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_172_svrash_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [silverash1] });
}
if (command === 'artsilverash') {
	const silverash2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_172_svrash_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [silverash2] });
}
if (command === 'skin1silverash') {
	const ssilverash1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Icefield Messenger series - York's Bise")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_172_svrash_snow%231.png')
	.setTimestamp()

	message.channel.send({ embeds: [ssilverash1] });
}
if (command === 'skin1silverash') {
	const ssilverash2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Animation")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/ArtSilverAshSkinGIF.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssilverash2] });
}
if (command === 'skin2silverash') {
	const ssilverash21 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Coral Coast series - Seeker SKm01")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_172_svrash_summer%234.png')
	.setTimestamp()

	message.channel.send({ embeds: [ssilverash21] });
}
if (command === 'skin2silverash') {
	const ssilverash22 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SilverAshSummerSkinPokeGIF_1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssilverash22] });
}
if (command === 'skin2silverash') {
	const ssilverash23 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SilverAshSummerSkinBaseGIF.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssilverash23] });
}
if (command === 'skin2silverash') {
	const ssilverash24 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SilverAshSummerSkinDeployGIF.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssilverash24] });
}
if (command === 'skin2silverash') {
	const ssilverash25 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Rules of Survival")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SilverAshSummerSkinS2GIF.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssilverash25] });
}
if (command === 'skin2silverash') {
	const ssilverash26 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3: Truesilver Slash")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SilverAshSummerSkinS3GIF.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssilverash26] });
}
if (command === "skinsilverash") {
	const skinsilverash = new EmbedBuilder()
	.setColor("Random")
	.setDescription("`.skin1silverash`: Icefield Messenger series - York's Bise\n`.skin2silverash`: Coral Coast series - Seeker SKm01")
	.setTimestamp()
	message.channel.send({ embeds: [skinsilverash]});
}
if (command === "wtf") {
	message.channel.send("https://tenor.com/view/goldenglow-arknights-gif-24905728");
}
if (command === "psuy") {
	message.channel.send("https://tenor.com/view/goldenglow-arknights-ak-gif-26669318");
}
if (command === "tamphaitinh") {
	message.channel.send("https://tenor.com/view/arknights-saga-gif-22720264");
}
if (command === "happynewyear") {
	message.channel.send("https://tenor.com/view/ark-nights-seseren-confetti-smile-happy-gif-17827400");
}
if (command === "maychetvoitao") {
	message.channel.send("https://tenor.com/view/arknights-mudrock-flare-eyes-gif-19254880");
}
if (command === "trungrate") {
	message.channel.send("https://tenor.com/view/kataskinosi-dance-me-with-my-besty-gif-13674196");
}
if (command === "nani") {
	message.channel.send("https://tenor.com/view/surtr-arknights-gif-26334547");
}
if (command === "s1kaltsit") {
	message.channel.send("https://i.imgur.com/ftE64c6.mp4");
}
if (command === "s2kaltsit") {
	message.channel.send("https://i.imgur.com/jzvSbDV.mp4");
}
if (command === "s1ceobe") {
	message.channel.send("https://i.imgur.com/3Pui2tz.mp4");
}
if (command === "s2ceobe") {
	message.channel.send("https://i.imgur.com/nqO6tZr.mp4");
}
if (command === "bnuy") {
	message.channel.send("https://i.imgur.com/D2jDEZn.gif");
}
if (command === "dmgame") {
	message.channel.send("https://i.imgur.com/CE2RHWu.mp4");
}
if (command === "bhbi") {
	message.channel.send("https://i.imgur.com/NzCjuei.mp4");
}
if (command === "bhga") {
	message.channel.send("https://i.imgur.com/wJsYBYY.mp4");
}
if (command === "bhnl") {
	message.channel.send("https://i.imgur.com/Ig2aV5r.mp4");
}
if (command === "s1goldenglow") {
	message.channel.send("https://i.imgur.com/pDtXL1x.mp4");
}
if (command === "s1ifrit") {
	message.channel.send("https://i.imgur.com/PtfqN14.mp4");
}
if (command === "s1zima") {
	message.channel.send("https://i.imgur.com/shtrT93.mp4");
}
if (command === "tannhungkophe") {
	message.channel.send("https://i.imgur.com/hJIsttv.mp4");
}
if (command === "s1magallan") {
	message.channel.send("https://i.imgur.com/OpnEOsR.mp4");
}
if (command === 'saga') {
    const saga = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Saga')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('6★ Pioneer Vanguard operator.')
	.setThumbnail('https://i.imgur.com/beyNJba.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Giống với Siege nhưng đã khắc phục những bất tiện mà Siege hiện có. Thứ nhất là về DPS, thứ hai là về SP. Talent 1 cho phép Saga hồi SP nhanh chóng hoặc hỗ trợ đồng minh hồi SP tùy theo kỹ năng mà bạn lựa chọn. Thứ ba là về độ sinh tồn, talent 2 giúp Saga sống sót lâu hơn, bạn có thể dễ dàng tìm thấy lợi ích của talent này như để bait những kẻ địch tầm xa, sống sót đến hết hiệu lực của skill 3,... Tuy nhiên, tỉ lệ né của Saga cũng chỉ là một con số hên xui may rủi nên cũng đừng lệ thuộc quá nhiều.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Charge γ', value: 'Không có gì nổi bật', inline: true },
		{ name: 'Skill 2 - Cleansing Evil', value: '`Nên Mastery 3`\n> Skill total damage: 23040\n> Average DPS: 741\n__Ưu điểm__\n• Chi phí SP thấp.\n• Thích hợp đối đầu với địch có DEF và HP thấp.\n\n__Nhược điểm__\n• Cần hạ gục kẻ địch để sạc SP nhanh chóng.', inline: true },
	)
	.addFields({ name: "Skill 3 - Fierce Glare", value: '`Nên Mastery 3`\n> Skill total damage: 20780/41561\n> Average DPS: 787/1133\n__Ưu điểm__\n• DPS cao.\n• Sát thương lâu dài\n• Thích hợp chơi helidrop.\n• Dễ dàng hỗ trợ đồng minh qua talent 1.\n\n__Nhược điểm__\n• Chi phí SP cao (cần Mastery 3 để giảm đi bất tiện này)\n• Phù hợp với địch có DEF thấp để nhanh chóng trigger thêm đòn tấn công ở skill 3.', inline: true })
	.setImage('https://i.imgur.com/rFB1NUr.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: chặn 2 kẻ địch.\n• Potential 5 tăng Talent 2.\n• Trust +85 ATK. \n• Critically Wounded: giảm 80% tốc độ di chuyển, không thể bị chặn, sau 10 giây sẽ bị hạ gục. Người kết liễu những kẻ địch này sẽ nhận SP.\n• Sát thương và DPS ở skill 3 bao gồm đã và chưa kích hoạt thêm lần tấn công.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [saga] });
}
if (command === 'artsaga') {
	const saga1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_362_saga_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [saga1] });
}
if (command === 'artsaga') {
	const saga2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_362_saga_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [saga2] });
}
if (command === 'artsaga') {
	const saga3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-01/SagaGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [saga3] });
}
if (command === 'artsaga') {
	const saga4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-01/SagaGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [saga4] });
}
if (command === 'artsaga') {
	const saga5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Cleansing Evil")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SagaGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [saga5] });
}
if (command === 'artsaga') {
	const saga6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3: Fierce Glare")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SagaGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [saga6] });
}
if (command === 'artdusk') {
	const dusk1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_2015_dusk_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [dusk1] });
}
if (command === 'artdusk') {
	const dusk2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_2015_dusk_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [dusk2] });
}
if (command === 'artdusk') {
	const dusk3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-02/DuskGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [dusk3] });
}
if (command === 'artdusk') {
	const dusk4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-02/DuskGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [dusk4] });
}
if (command === 'artdusk') {
	const dusk5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1: Transcendental Stroke")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/DuskGIFS1_0.gif')
	.setTimestamp()

	message.channel.send({ embeds: [dusk5] });
}
if (command === 'artdusk') {
	const dusk6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Flowing Ink")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/DuskGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [dusk6] });
}
if (command === 'artdusk') {
	const dusk7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3: Image Over Form")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/DuskGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [dusk7] });
}
if (command === 'skindusk') {
	const sdusk1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("0011 series - Everything Is A Miracle")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_2015_dusk_nian%237.png')
	.setTimestamp()

	message.channel.send({ embeds: [sdusk1] });
}
if (command === 'skindusk') {
	const sdusk2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/DuskSkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sdusk2] });
}
if (command === 'skindusk') {
	const sdusk3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/DuskSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sdusk3] });
}
if (command === 'skindusk') {
	const sdusk4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/DuskSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sdusk4] });
}
if (command === 'skindusk') {
	const sdusk5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1: Transcendental Stroke")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/DuskSkinGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sdusk5] });
}
if (command === 'skindusk') {
	const sdusk6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2: Flowing Ink")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/DuskSkinGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sdusk6] });
}
if (command === 'skindusk') {
	const sdusk7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3: Image Over Form")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/DuskSkinGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sdusk7] });
}
if (command === 'artmrnothing') {
	const mrn1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_455_nothin_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [mrn1] });
}
if (command === 'artmrnothing') {
	const mrn2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_455_nothin_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [mrn2] });
}
if (command === 'artmrnothing') {
	const mrn3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-01/MrNothingGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [mrn3] });
}
if (command === 'artmrnothing') {
	const mrn4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-01/MrNothingGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [mrn4] });
}
if (command === 'artmrnothing') {
	const mrn5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MrNothingGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [mrn5] });
}
if (command === 'artmrnothing') {
	const mrn6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2 (hiệu ứng 1)")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MrNothingGIFS2Effect1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [mrn6] });
}
if (command === 'artmrnothing') {
	const mrn7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2 (hiệu ứng 2)")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MrNothingGIFS2Effect2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [mrn7] });
}
if (command === 'artmrnothing') {
	const mrn8 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2 (hiệu ứng 3)")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MrNothingGIFS2Effect3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [mrn8] });
}
if (command === 'skinmrnothing') {
	const smrn1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("0011 series - Pale Rising Moon")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_455_nothin_nian%237.png')
	.setTimestamp()

	message.channel.send({ embeds: [smrn1] });
}
if (command === 'skinmrnothing') {
	const smrn2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MrNothingSkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smrn2] });
}
if (command === 'skinmrnothing') {
	const smrn3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MrNothingSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smrn3] });
}
if (command === 'skinmrnothing') {
	const smrn4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MrNothingSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smrn4] });
}
if (command === 'skinmrnothing') {
	const smrn5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MrNothingSkinGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smrn5] });
}
if (command === 'skinmrnothing') {
	const smrn6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2 (hiệu ứng 1)")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MrNothingSkinGIFS2-1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smrn6] });
}
if (command === 'skinmrnothing') {
	const smrn7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2 (hiệu ứng 2)")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MrNothingSkinGIFS2-2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smrn7] });
}
if (command === 'skinmrnothing') {
	const smrn8 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2 (hiệu ứng 3)")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MrNothingSkinGIFS2-3_1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smrn8] });
}
if (command === 'artlava2') {
	const lava1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_1011_lava2_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [lava1] });
}
if (command === 'artlava2') {
	const lava2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_1011_lava2_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [lava2] });
}
if (command === 'artlava2') {
	const lava3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-01/PurgatoryGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [lava3] });
}
if (command === 'artlava2') {
	const lava4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-01/PurgatoryGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [lava4] });
}
if (command === 'artlava2') {
	const lava5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/PurgatoryGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [lava5] });
}
if (command === 'artlava2') {
	const lava6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/PurgatoryGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [lava6] });
}
if (command === 'saileach') {
    const saileach = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Saileach')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('6★ Standard Bearer Vanguard operator.')
	.setThumbnail('https://i.imgur.com/ZJAjbCU.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Cũng giống như Myrtle và Elysium, Saileach lại thiêng về những nơi có content phải try hard như Contigency Contract nhờ khả năng buff và debuff trong toàn bộ talent và skill. Bạn không cần phải lo lắng gì nhiều nếu chưa sở hữu Saileach, Myrtle và Elysium vẫn làm tốt vai trò ở các content hiện tại của game. Và nếu bạn đắn đo nên nâng Saileach khi hiện tại đã nâng Myrtle và Elysium, thì bạn có thể nâng nếu bạn dư tài nguyên. Ví dụ skill 1 của Elysium và Saileach đều như nhau, nhưng bạn sẽ phải tốn nhiều tài nguyên để nâng cho Saileach.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Support γ', value: '`Nên Mastery 3`\nHồi DP.', inline: true },
		{ name: 'Skill 2 - Inheritance of Faith', value: '> Skill total healing: 4582.5\n> Average HPS: 104\n__Ưu điểm__\n• Cung cấp lượng lớn DP.\n• Bình HP di động.\n• Có thể hồi phục operators không thể được hồi phục theo cách chủ động.\n• Phù hợp talent 1.\n\n__Nhược điểm__\n• Chi phí SP cao.', inline: true },
	)
	.addFields({ name: "Skill 3 - Glorious Banner", value: '`Nên Mastery 3`\n> Skill total damage: 2382.9\n> Average DPS: 426\n__Ưu điểm__\n• Mini debuff.\n• Choáng AoE.\n• Phù hợp talent 1.\n\n__Nhược điểm__\n• Chi phí SP cao (cần Mastery 3 để giảm đi bất tiện này)', inline: true })
	.setImage('https://i.imgur.com/arpVXV1.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: không chặn địch khi kích hoạt kỹ năng.\n• Potential 5 tăng Talent 1.\n• Trust +40 ATK, +40 DEF. \n• Stun: làm choáng kẻ địch, không tấn công, không di chuyển.\n• Slow: giảm 80% tốc độ di chuyển.\n• Fragile: tăng sát thương phải nhận.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [saileach] });
}
if (command === 'artsaileach') {
	const saileach1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_479_sleach_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [saileach1] });
}
if (command === 'artsaileach') {
	const saileach2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_479_sleach_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [saileach2] });
}
if (command === 'artsaileach') {
	const saileach3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-09/SaileachGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [saileach3] });
}
if (command === 'artsaileach') {
	const saileach4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-09/SaileachGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [saileach4] });
}
if (command === 'artsaileach') {
	const saileach5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SaileachGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [saileach5] });
}
if (command === 'artsaileach') {
	const saileach6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SaileachGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [saileach6] });
}
if (command === 'skinsaileach') {
	const ssaileach1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("EPOQUE series - Appreciate Fragrance")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_479_sleach_epoque%2314.png')
	.setTimestamp()

	message.channel.send({ embeds: [ssaileach1] });
}
if (command === 'skinsaileach') {
	const ssaileach2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SaileachSkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssaileach2] });
}
if (command === 'skinsaileach') {
	const ssaileach3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SaileachSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssaileach3] });
}
if (command === 'skinsaileach') {
	const ssaileach4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SaileachSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssaileach4] });
}
if (command === 'skinsaileach') {
	const ssaileach5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SaileachSkinGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssaileach5] });
}
if (command === 'skinsaileach') {
	const ssaileach6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SaileachSkinGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssaileach6] });
}
if (command === 'skinsaileach') {
	const ssaileach7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SaileachSkinGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssaileach7] });
}
if (command === 'kaltsit') {
    const kaltsit = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle("Kal'tsit")
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('6★ Medic operator trá hình.')
	.setThumbnail('https://i.imgur.com/SfNNGRr.png')
	.addFields(
		{ name: 'Tổng Quan', value: "Đừng dùng Kal'tsit để hồi phục đồng minh một khi đã triển khai Mon3tr."},
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Command: Structural Fortification', value: 'Không có gì nổi bật.', inline: true },
		{ name: 'Skill 2 - Command: Tactical Coordination', value: '`Nên Mastery 3`\n> Skill total damage: 26638\n> Average DPS: 1152\n__Ưu điểm__\n• Đánh nhiều mục tiêu\n• DPS cao.\n• Hồi phục cho Mon3tr nhanh chóng trước những tình huống đột biến về sát thương.\n• Chi phí SP thấp.\n• Thủ lane tốt.\n\n__Nhược điểm__\n• Không thích hợp đối đầu với địch có DEF cao.', inline: true },
	)
	.addFields({ name: "Skill 3 - Command: Meltdown", value: '`Nên Mastery 3`\n> Skill total damage: 34068.6\n> Average DPS: 1294\n__Ưu điểm__\n• DPS cao.\n• Chi phí SP thấp.\n• Sát thương chuẩn.\n• Elite enemy killer.\n\n__Nhược điểm__\n• Mất một nửa HP khi không hạ gục kẻ địch.', inline: true })
	.setImage('https://i.imgur.com/1F5cDVr.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: hồi phục đơn vị đồng minh.\n• Potential 5 tăng Talent 2.\n• Trust +400 HP tối đa, +40 DEF.\n• Total damage và DPS là của Mon3tr.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [kaltsit] });
}
if (command === 'artkaltsit') {
	const kaltist1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_003_kalts_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [kaltist1] });
}
if (command === 'artkaltsit') {
	const kaltist2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_003_kalts_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [kaltist2] });
}
if (command === 'artkaltsit') {
	const kaltist3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-04/KalTsitGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [kaltist3] });
}
if (command === 'artkaltsit') {
	const kaltist4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-04/KalTsitGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [kaltist4] });
}
if (command === 'artkaltsit') {
	const kaltist5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/KalTsitGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [kaltist5] });
}
if (command === 'artkaltsit') {
	const kaltist6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/KalTsitGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [kaltist6] });
}
if (command === 'artkaltsit') {
	const kaltist7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/KalTsitGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [kaltist7] });
}
if (command === 'carnelian') {
    const carnelian = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Carnelian')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('6★ Phalanx operator và bé là cừu, không phải là dê.')
	.setThumbnail('https://i.imgur.com/Lxq2ZE0.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Là chị gái của Beeswax và cũng khó dùng hơn Beeswax. Vì Carnelian chỉ hồi HP khi kích hoạt kỹ năng, do đó bạn phải biết nên kích hoạt kỹ năng khi nào để tránh trường hợp Carnelian bị hạ gục. Carnelian là một operator rất phụ thuộc vào trạng thái charged, do đó sẽ mất thời gian để đợi hồi đủ SP và talent 2 cũng giảm đi một phần khuyết điểm này. Carnelian không phù hợp với newbie, và nếu bạn hứng thú với operator này, thì tips dùng tốt Carnelian là biết rõ waves cũng như loại địch để biết khi nào nên bật skill khi có hoặc không có trạng thái charged.'},
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Sandstorm Guardian', value: '> Skill total damage: 15360\n> Average DPS: 404\n__Ưu điểm__\n• Tank cứng.\n\n__Nhược điểm__\n• Phụ thuộc vào trạng thái charged.', inline: true },
		{ name: 'Skill 2 - Sand Fetters', value: '`Nên Mastery 3`\n> Skill total damage: 26880/32256\n> Average DPS/HPS: 538/645\n__Ưu điểm__\n• DPS cao.\n• Khống chế đám đông tốt\n\n__Nhược điểm__\n• Phụ thuộc vào trạng thái charged.\n• Tránh đối đầu với kẻ địch thực hiện đòn tấn công tầm xa.', inline: true },
	)
	.addFields({ name: "Skill 3 - Mark of Gluttony", value: '`Nên Mastery 3`\n> Skill total damage: 25344/48230.4\n> Average DPS: 517/725\n__Ưu điểm__\n• DPS cao.\n\n__Nhược điểm__\n• Phụ thuộc vào trạng thái charged.\n• Tránh đối đầu với kẻ địch thực hiện đòn tấn công tầm xa.', inline: true })
	.setImage('https://i.imgur.com/DICeKCZ.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: chỉ tấn công khi kích hoạt kỹ năng. Khi không tấn công, +200% DEF, +20 RES. Gây sát thương phép cho tất cả kẻ địch trong phạm vi tấn công.\n• Potential 5 tăng Talent 1.\n• Trust +80 ATK, +30 DEF. \n• Slow: giảm 80% tốc độ di chuyển.\n• Bind (trói): không thể di chuyển.\n• Charged: gồm 2 thanh SP, khi đạt đủ thanh SP đầu tiên, tiếp tục hồi SP. Sau khi đạt đủ 2 thanh SP, tiến vào trạng thái charged. Kích hoạt kỹ năng ở trạng thái charged sẽ cho thêm hiệu ứng (tiêu hao tất cả SP).\n• Total damage và DPS bao gồm đã và chưa kích hoạt trạng thái charged.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [carnelian] });
}
if (command === 'artcarnelian') {
	const carnelian1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_426_billro_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [carnelian1] });
}
if (command === 'artcarnelian') {
	const carnelian2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_426_billro_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [carnelian2] });
}
if (command === 'artcarnelian') {
	const carnelian3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-05/CarnelianGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [carnelian3] });
}
if (command === 'artcarnelian') {
	const carnelian4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-05/CarnelianGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [carnelian4] });
}
if (command === 'artcarnelian') {
	const carnelian5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/CarnelianGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [carnelian5] });
}
if (command === 'artcarnelian') {
	const carnelian6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/CarnelianGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [carnelian6] });
}
if (command === 'artcarnelian') {
	const carnelian7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/CarnelianGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [carnelian7] });
}
if (command === 'skin1carnelian') {
	const scarnelian1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Icefield Messenger series - Hohenlohe Chillysand")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_426_billro_snow%233.png')
	.setTimestamp()

	message.channel.send({ embeds: [scarnelian1] });
}
if (command === 'skin1carnelian') {
	const scarnelian2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/CarnelianSkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [scarnelian2] });
}
if (command === 'skin1carnelian') {
	const scarnelian3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/CarnelianSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [scarnelian3] });
}
if (command === 'skin1carnelian') {
	const scarnelian4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/CarnelianSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [scarnelian4] });
}
if (command === 'skin1carnelian') {
	const scarnelian5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/CarnelianSkinGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [scarnelian5] });
}
if (command === 'skin1carnelian') {
	const scarnelian6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/CarnelianSkinGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [scarnelian6] });
}
if (command === 'skin1carnelian') {
	const scarnelian7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/CarnelianSkinGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [scarnelian7] });
}
if (command === 'skin2carnelian') {
	const scarnelian21 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Coral Coast series - Shining Dew SD08")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_426_billro_summer%238.png')
	.setTimestamp()

	message.channel.send({ embeds: [scarnelian21] });
}
if (command === 'skin2carnelian') {
	const scarnelian22 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-07/CarnelianSkinSummerGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [scarnelian22] });
}
if (command === 'skin2carnelian') {
	const scarnelian23 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-07/CarnelianSkinSummerGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [scarnelian23] });
}
if (command === 'skin2carnelian') {
	const scarnelian24 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-07/CarnelianSkinSummerGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [scarnelian24] });
}
if (command === 'skin2carnelian') {
	const scarnelian25 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-07/CarnelianSkinSummerGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [scarnelian25] });
}
if (command === 'skin2carnelian') {
	const scarnelian26 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-07/CarnelianSkinSummerGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [scarnelian26] });
}
if (command === 'skin2carnelian') {
	const scarnelian27 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-07/CarnelianSkinSummerGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [scarnelian27] });
}
if (command === 'gladiia') {
    const gladiia = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Gladiia')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('6★ Hookmaster Specialist operator nhận qua event.')
	.setThumbnail('https://i.imgur.com/K8Ukgd9.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Khác với những operators cùng subclass, ngoài khả năng kéo ra thì còn có thể gây sát thương tốt, đặc biệt đối với địch có weight thấp. Với talent tự hồi phục cho bản thân và đồng minh trong AH, Gladiia có thể được dùng để thủ lane ngoài việc chỉ dùng để kéo. Module cũng cung cấp khả năng thủ lane bền vững hơn cùng với DPS được tăng đi kèm theo.'},
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Waterless Parting of the Great Ocean', value: '`Mastery 3 để tăng lực kéo`\n> Skill total damage: 1787.1/2430.46\n> Average DPS: 603/820\nKhả năng kéo giống như những operators khác, không gì nổi bật hơn.', inline: true },
		{ name: 'Skill 2 - Waterless Grasp of the Raging Seas', value: '`Mastery 3 để tăng lực kéo`\n> Skill total damage: 12254.4/16665.98\n> Average DPS: 537/730\n__Ưu điểm__\n• Kéo 2 mục tiêu.\n• Kéo liên tục trong khoảng thời gian.', inline: true },
	)
	.addFields({ name: "Skill 3 - Waterless Dance of the Shattered", value: '`Mastery 3 để tăng lực kéo`\n> Skill total damage: 6637.8/9027.41\n> Average DPS: 526/715\n__Ưu điểm__\n• AoE damage.\n• Khống chế đám đông tốt.\n• Giữ chân kẻ địch từ xa.\n• Dễ dàng cancel animation attack.', inline: true })
	.setImage('https://i.imgur.com/B2Yja8b.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: có thể kéo kẻ địch và triển khai trên ô dành cho ranged operator.\n• Potential 5 tăng Talent 2.\n• Trust +50 ATK, +50 DEF. \n• Bind (trói): không thể di chuyển.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [gladiia] });
}
if (command === 'artgladiia') {
	const gladiia1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_474_glady_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [gladiia1] });
}
if (command === 'artgladiia') {
	const gladiia2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_474_glady_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [gladiia2] });
}
if (command === 'artgladiia') {
	const gladiia3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-04/GladiiaGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [gladiia3] });
}
if (command === 'artgladiia') {
	const gladiia4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-04/GladiiaGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [gladiia4] });
}
if (command === 'artgladiia') {
	const gladiia5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/GladiiaGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [gladiia5] });
}
if (command === 'artgladiia') {
	const gladiia6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/GladiiaGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [gladiia6] });
}
if (command === 'artgladiia') {
	const gladiia7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/GladiiaGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [gladiia7] });
}
if (command === 'skingladiia') {
	const sgladiia1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Bloodline of Combat series - Return")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_474_glady_boc%235.png')
	.setTimestamp()

	message.channel.send({ embeds: [sgladiia1] });
}
if (command === 'skingladiia') {
	const sgladiia2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-05/GladiiaSkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sgladiia2] });
}
if (command === 'skingladiia') {
	const sgladiia3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-05/GladiiaSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sgladiia3] });
}
if (command === 'skingladiia') {
	const sgladiia4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-05/GladiiaSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sgladiia4] });
}
if (command === 'skingladiia') {
	const sgladiia5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-05/GladiiaSkinGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sgladiia5] });
}
if (command === 'skingladiia') {
	const sgladiia6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-05/GladiiaSkinGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sgladiia6] });
}
if (command === 'skingladiia') {
	const sgladiia7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-05/GladiiaSkinGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sgladiia7] });
}
if (command === 'passenger') {
    const passenger = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle("Passenger")
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('6★ Chain Caster operator.')
	.setThumbnail('https://i.imgur.com/N5DCtTh.png')
	.addFields(
		{ name: 'Tổng Quan', value: "Passenger - operator qua nhiều lần rework để đạt được mức sát thương ổn định và được người chơi sử dụng nhiều hơn. Là một operator thú vị nhưng cách dùng cũng không hề dễ. Cả 2 talent của Passenger đều dễ dùng và cũng dễ kích hoạt. Anh khó dùng vì cả 2 skill chính đều yêu cầu mức SP cao, tuy nhiên module đã cải thiện việc hồi SP nhanh chóng nên bạn cần phải đầu tư nhiều nếu muốn dùng Passenger dễ dàng hơn. Ngoài ra skill 3 sẽ là skill khó dùng nhất, đòi hỏi nên đặt Passenger ở vị trí nào để tận dụng tốt tầm tấn công cũng như biết rõ chỉ số của địch để có tận dụng linh hoạt phạm vi tấn công đó. Nếu muốn dùng Passenger tốt và dễ hơn, đừng ngại đầu tư module cho anh ta vì module đã cải thiện nhiều khuyết điểm mà Passenger mắc phải."},
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Touch of Static', value: '> Skill total damage: 36018.13\n> Average DPS: 660\n__Ưu điểm__\n• Chi phí SP thấp.\n• Kiểm soát địch theo chu kì tốt.\n\n__Nhược điểm\n• Không charges.', inline: true },
		{ name: 'Skill 2 - Focus Command', value: '`Mastery 3 để kiểm soát đám đông tốt`\n> Skill total damage: 42315\n> Average DPS: 830\n__Ưu điểm__\n• DPS ổn.\n• Kiểm soát đám đông tốt.\n• Sát thương gây ra liên tục trong một khoảng thời gian.\n• Dễ dàng kích talent 2.\n\n__Nhược điểm__\n• Chi phí SP cao.', inline: true },
	)
	.addFields({ name: "Skill 3 - Glorious Shards", value: '`Mastery 3 nếu muốn mang làm DPS`\n> Skill total damage: 14407.25\n> Average DPS: 896\n__Ưu điểm__\n• DPS cao.\n• Linh hoạt vị trí tấn công.\n• Kiểm soát đám đông tốt.\n• Có charges.\n• Dễ dàng kích talent 2.\n• Sốc sát thương nếu chỉ duy nhất 1 kẻ địch.\n\n__Nhược điểm\n• Chi phí SP cao.\n• Cần biết rõ chỉ số địch để tránh đặt tâm bão sai nơi mong muốn.', inline: true })
	.setImage('https://i.imgur.com/tJZOoSx.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: đòn tấn công gây sát thương phép và làm chậm trong 0.5 giây. Đòn tấn công có thể nảy sang 4 kẻ địch và sát thương giảm 15% sau mỗi lần nảy.\n• Potential 3 tăng Talent 2. Potential 6 tăng Talent 1.\n• Trust +85 ATK.\n• Total damage và DPS đã bao gồm cả 2 talent. ', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [passenger] });
}
if (command === 'artpassenger') {
	const passenger1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_472_pasngr_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [passenger1] });
}
if (command === 'artpassenger') {
	const passenger2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_472_pasngr_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [passenger2] });
}
if (command === 'artpassenger') {
	const passenger3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-04/PassengeGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [passenger3] });
}
if (command === 'artpassenger') {
	const passenger4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-04/PassengeGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [passenger4] });
}
if (command === 'artpassenger') {
	const passenger5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/PassengeGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [passenger5] });
}
if (command === 'artpassenger') {
	const passenger6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/PassengeGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [passenger6] });
}
if (command === 'artpassenger') {
	const passenger7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/PassengeGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [passenger7] });
}
if (command === 'skinpassenger') {
	const spassenger1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("EPOQUE series - Dream in A Moment")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_472_pasngr_epoque%2317.png')
	.setTimestamp()

	message.channel.send({ embeds: [spassenger1] });
}
if (command === 'skinpassenger') {
	const spassenger2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-10/PassengerSkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [spassenger2] });
}
if (command === 'skinpassenger') {
	const spassenger3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-10/PassengerSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [spassenger3] });
}
if (command === 'skinpassenger') {
	const spassenger4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-10/PassengerSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [spassenger4] });
}
if (command === 'skinpassenger') {
	const spassenger5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-10/PassengerSkinGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [spassenger5] });
}
if (command === 'skinpassenger') {
	const spassenger6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-10/PassengerSkinGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [spassenger6] });
}
if (command === 'skinpassenger') {
	const spassenger7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-10/PassengerSkinGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [spassenger7] });
}
if (command === 'surtr') {
    const surtr = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle("Surtr")
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('6★ Arts Fighter Guard operator.')
	.setThumbnail('https://i.imgur.com/tjjVCGk.png')
	.addFields(
		{ name: 'Tổng Quan', value: "Nắng đã có mũ\nMưa đã có ô\nCòn mọi event khó, đã có Surtr lo.\nĐúng vậy, mỗi lần bạn gặp map khó và không thể vượt qua, hãy nhập .justsurtrit"},
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Laevatain', value: '> Skill total damage: 2480\n> Average DPS: 1074\n__Ưu điểm__\n• Chi phí SP thấp.\n• DPS cao.\n\n__Nhược điểm__\n• Hạ gục địch để tận dụng kỹ năng hồi SP.\n• Block 1.', inline: true },
		{ name: 'Skill 2 - Molten Giant', value: '> Skill total damage: 39424\n> Average DPS: 1406\n__Ưu điểm__\n• DPS cao.\n• Đánh 2 mục tiêu\n\n__Nhược điểm__\n• Tăng số mục tiêu tấn công nhưng muốn sát thương cao thì phải tấn công 1 mục tiêu.', inline: true },
	)
	.addFields({ name: "Skill 3 - Twilight", value: '`Nên Mastery 3`\n> Skill total damage: 92880\n> Average DPS: 2453\n__Ưu điểm__\n• DPS cao.\n• Mang để bait tốt.\n\n__Nhược điểm\n• Nếu mang làm DPS, tránh bị tấn công để mất nhiều HP dẫn đến kích hoạt talent 2 nhanh.', inline: true })
	.setImage('https://i.imgur.com/3XDKO6X.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: đòn tấn công gây sát thương phép\n• Potential 3 tăng Talent 2. Potential 6 tăng Talent 1.\n• Trust +100 ATK.\n• Trust +85 ATK.\n• Total damage và DPS đã bao gồm cả 2 talent. ', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [surtr] });
}
if (command === 'artsurtr') {
	const surtr1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_350_surtr_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [surtr1] });
}
if (command === 'artsurtr') {
	const surtr2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_350_surtr_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [surtr2] });
}
if (command === 'artsurtr') {
	const surtr3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2020-09/SurtrPokeGIF.gif')
	.setTimestamp()

	message.channel.send({ embeds: [surtr3] });
}
if (command === 'artsurtr') {
	const surtr4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2020-09/SurtrDeployGIF.gif')
	.setTimestamp()

	message.channel.send({ embeds: [surtr4] });
}
if (command === 'artsurtr') {
	const surtr5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SurtrS2GIF.gif')
	.setTimestamp()

	message.channel.send({ embeds: [surtr5] });
}
if (command === 'artsurtr') {
	const surtr6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SurtrS3GIF.gif')
	.setTimestamp()

	message.channel.send({ embeds: [surtr6] });
}
if (command === "skinsurtr") {
	const ssurtr = new EmbedBuilder()
	.setColor("Random")
	.setDescription("`.skin1surtr`: Crossover series - Liberté//Échec\n`.skin2surtr`: Coral Coast series - Wonderland CW03")
	.setTimestamp()
	message.channel.send({ embeds: [ssurtr]});
}
if (command === 'skin1surtr') {
	const ssurtr1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Crossover series - Liberté//Échec")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_350_surtr_it%231.png')
	.setTimestamp()

	message.channel.send({ embeds: [ssurtr1] });
}
if (command === 'skin1surtr') {
	const ssurtr2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SurtrSkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssurtr2] });
}
if (command === 'skin1surtr') {
	const ssurtr3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SurtrSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssurtr3] });
}
if (command === 'skin1surtr') {
	const ssurtr4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SurtrSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssurtr4] });
}
if (command === 'skin1surtr') {
	const ssurtr5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SurtrSkinGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssurtr5] });
}
if (command === 'skin1surtr') {
	const ssurtr6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SurtrSkinGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssurtr6] });
}
if (command === 'skin1surtr') {
	const ssurtr7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/SurtrSkinGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssurtr7] });
}
if (command === 'skin2surtr') {
	const ssurtr21 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Coral Coast series - Wonderland CW03")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_350_surtr_summer%239.png')
	.setTimestamp()

	message.channel.send({ embeds: [ssurtr21] });
}
if (command === 'skin2surtr') {
	const ssurtr22 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-08/SurtrSkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssurtr22] });
}
if (command === 'skin2surtr') {
	const ssurtr23 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-08/SurtrSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssurtr23] });
}
if (command === 'skin2surtr') {
	const ssurtr24 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-08/SurtrSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssurtr24] });
}
if (command === 'skin2surtr') {
	const ssurtr25 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-08/SurtrSkinGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssurtr25] });
}
if (command === 'skin2surtr') {
	const ssurtr26 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-08/SurtrSkinGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssurtr26] });
}
if (command === 'skin2surtr') {
	const ssurtr27 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-08/SurtrSkinGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [ssurtr27] });
}
if (command === 'gnosis') {
    const gnosis = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Gnosis')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('6★ Hexer Supporter operator.')
	.setThumbnail('https://i.imgur.com/gc1HQJV.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Một operator có sự kết hợp giữa debuff và DPS.  So với các debuff khác, thời gian debuff của Gnosis sẽ ngắn hơn nhưng anh ta có thể tự gây sát thương một cách đáng kể để bù lại phần thời gian debuff ít ỏi. Do đó, chỉ số hiệu ứng Fragile của Gnosis lại cao hơn so với các debuff khác. Gnosis vẫn là một lựa chọn mạnh mẽ, tuy nhiên cũng như Ash, khuyết điểm lớn nhất của anh là khi gặp phải những kẻ địch kháng cold/frozen.'},
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - High-Speed Cogitation', value: '__Ưu điểm__\n• Đóng băng địch lập tức.\n\n__Nhược điểm__\n• Khống chế 1 kẻ địch trong thời gian ngắn.\n• Không charges.', inline: true },
		{ name: 'Skill 2 - Zero-Point Burst', value: '`Nên Mastery 3`\n> Skill total damage: 16790.08\n> Average DPS: 657\n__Ưu điểm__\n• Khống chế đám đông tốt.\n• AoE debuff.\n\nNhược điểm\n• Nên biết cần bật kỹ năng khi nào.', inline: true },
	)
	.addFields({ name: "Skill 3 - Hypothermia", value: '`Nên Mastery 3`\n> Skill total damage: 6637.8/9027.41\n> Average DPS: 526/715\n__Ưu điểm__\n• Khống chế đám đông tốt.\n• AoE debuff.\n• DPS cao.\n\n__Nhược điểm__\n• Chi phí SP cao.', inline: true })
	.setImage('https://i.imgur.com/xZ87X5x.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: đòn tấn công gây sát thương phép.\n• Potential 5 tăng Talent 1.\n• Trust +80 ATK. \n• Charged: gồm 2 thanh SP, khi đạt đủ thanh SP đầu tiên, tiếp tục hồi SP. Sau khi đạt đủ 2 thanh SP, tiến vào trạng thái charged. Kích hoạt kỹ năng ở trạng thái charged sẽ cho thêm hiệu ứng (tiêu hao tất cả SP).\n• Resist: giảm 50% hiệu lực của trạng thái xấu như choáng, đóng băng,...\n• Stun (choáng): không tấn công, không di chuyển, không thể bị chặn.\n• Cold: giảm 30 tốc độ đánh. Nếu cộng dồn, chuyển sang frozen.\n• Frozen: không tấn công, không di chuyển. Kẻ địch bị đóng băng sẽ giảm 15 RES.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [gnosis] });
}
if (command === 'artgnosis') {
	const gnosis1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_206_gnosis_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [gnosis1] });
}
if (command === 'artgnosis') {
	const gnosis2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_206_gnosis_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [gnosis2] });
}
if (command === 'artgnosis') {
	const gnosis3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-12/GnosisGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [gnosis3] });
}
if (command === 'artgnosis') {
	const gnosis4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-12/GnosisGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [gnosis4] });
}
if (command === 'artgnosis') {
	const gnosis5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/GnosisGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [gnosis5] });
}
if (command === 'artgnosis') {
	const gnosis6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/GnosisGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [gnosis6] });
}
if (command === 'artgnosis') {
	const gnosis7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/GnosisGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [gnosis7] });
}
if (command === 'skingnosis') {
	const sgnosis1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Bloodline of Combat series - Forerunner")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_206_gnosis_boc%234.png')
	.setTimestamp()

	message.channel.send({ embeds: [sgnosis1] });
}
if (command === 'skingnosis') {
	const sgnosis2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/GnosisSkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sgnosis2] });
}
if (command === 'skingnosis') {
	const sgnosis3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/GnosisSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sgnosis3] });
}
if (command === 'skingnosis') {
	const sgnosis4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/GnosisSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sgnosis4] });
}
if (command === 'skingnosis') {
	const sgnosis5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/GnosisSkinGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sgnosis5] });
}
if (command === 'skingnosis') {
	const sgnosis6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/GnosisSkinGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sgnosis6] });
}
if (command === 'skingnosis') {
	const sgnosis7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/GnosisSkinGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sgnosis7] });
}
if (command === 'aurora') {
    const aurora = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Aurora')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('5★ Duelist Defender.')
	.setThumbnail('https://i.imgur.com/C6bP0hd.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Thuộc một trong những subclass kém trong việc hồi SP. Tuy nhiên, talent của Aurora đã giảm đi phần lớn của sự bất tiện này. Ngoài ra module cũng khắc phục khả năng hồi SP. Như cái tên duelist, Aurora chỉ block 1 và ATK rất cao, đồng nghĩa với việc DPS sẽ cao. Tuy nhiên, để DPS tăng lên đáng kể thì cần sự trợ giúp những operators có khả năng đóng băng để 9 viên đạn ở skill 2 của Aurora đều được tối ưu hóa sát thương.'},
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Homeland Protector', value: '__Ưu điểm__\n• Trở thành defender cứng.\n• Có thể đối đầu với map hoặc địch gây choáng hoặc đóng băng.\n\n__Nhược điểm__\n• Khả năng hồi SP.\n• Choáng sau khi kết thúc kỹ năng.', inline: true },
		{ name: 'Skill 2 - Artificial Snowfall', value: '> Skill total damage: 26600.7/49688.1\n__Ưu điểm__\n• Có khả năng đóng băng.\n• Gây sát thương cao khi đóng băng.\n\n__Nhược điểm__\n• Khả năng hồi SP.\n• Bản thân chỉ tự đóng băng địch 2 lần.\n• Muốn DPS cao phải phụ thuộc vào operator có khả năng đóng băng địch.', inline: true },
	)
	.setImage('https://i.imgur.com/lopZwWl.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: chỉ hồi SP khi chặn địch.\n• Potential 5 tăng Talent.\n• Trust +55 ATK, +55 DEF. \n• Resist: giảm 50% hiệu lực của trạng thái xấu như choáng, đóng băng,...\n• Stun (choáng): không tấn công, không di chuyển, không thể bị chặn.\n• Cold: giảm 30 tốc độ đánh. Nếu cộng dồn, chuyển sang frozen.\n• Frozen: không tấn công, không di chuyển. Kẻ địch bị đóng băng sẽ giảm 15 RES.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [aurora] });
}
if (command === 'artaurora') {
	const aurora1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_422_aurora_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [aurora1] });
}
if (command === 'artaurora') {
	const aurora2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_422_aurora_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [aurora2] });
}
if (command === 'artaurora') {
	const aurora3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-12/AuroraGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [aurora3] });
}
if (command === 'artaurora') {
	const aurora4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-12/AuroraGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [aurora4] });
}
if (command === 'artaurora') {
	const aurora5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/AuroraGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [aurora5] });
}
if (command === 'artaurora') {
	const aurora6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/AuroraGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [aurora6] });
}
if (command === 'skinaurora') {
	const saurora1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Bloodline of Combat series - Polar Catcher")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_422_aurora_boc%234.png')
	.setTimestamp()

	message.channel.send({ embeds: [saurora1] });
}
if (command === 'skinaurora') {
	const saurora2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/AuroraSkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [saurora2] });
}
if (command === 'skinaurora') {
	const saurora3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/AuroraSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [saurora3] });
}
if (command === 'skinaurora') {
	const saurora4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-04/AuroraSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [saurora4] });
}
if (command === 'thorns') {
    const thorns = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Thorns')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('6★ Lord Guard operator.')
	.setThumbnail('https://i.imgur.com/csuXUkq.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Sniper trá hình.'},
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - ATK Up γ', value: '> Skill total damage: 38188.8/45552\n> Average DPS: 988/1165\n__Ưu điểm__\nKhông có gì nổi bật.', inline: true },
		{ name: 'Skill 2 - Protective Spikes', value: '> Skill total damage: 75996.16/92195.2\n> Average DPS: 1456/1750\n__Ưu điểm__\n• Mini defender.\n• AoE damage\n• Dễ dàng kích talent 2 và sử dụng cực tốt talent 1.\n• Hiệu lực kỹ năng dài.\n\n__Nhược điểm__\n• Kén map.', inline: true },
	)
	.addFields({ name: "Skill 3 - Destreza", value: '`Nên Mastery 3`\n> Skill total damage: ∞\n> Average DPS: 2204\n__Ưu điểm__\n• DPS cao.\n• Thủ lane tốt.\n• ATK không bị ảnh hưởng bởi trait.\n\n__Nhược điểm__\n• Offensive recovery.\n• Tầm tấn công đôi khi sẽ bóp talent 2.', inline: true })
	.setImage('https://i.imgur.com/6Bw8Y6r.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: có thể thực hiện các đòn tấn công tầm xa, tuy nhiên sẽ bị giảm còn 80% atk.\n• Potential 3 tăng Talent 2. Potential 5 tăng Talent 1.\n• Trust +30 ATK, +70 DEF.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [thorns] });
}
if (command === 'artthorns') {
	const thorns1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_293_thorns_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [thorns1] });
}
if (command === 'artthorns') {
	const thorns2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_293_thorns_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [thorns2] });
}
if (command === 'artthorns') {
	const thorns3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2020-08/ThornsPokeGIF.gif')
	.setTimestamp()

	message.channel.send({ embeds: [thorns3] });
}
if (command === 'artthorns') {
	const thorns4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2020-08/ThornsDeployGIF.gif')
	.setTimestamp()

	message.channel.send({ embeds: [thorns4] });
}
if (command === 'artthorns') {
	const thorns5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/ThornsS2GIF.gif')
	.setTimestamp()

	message.channel.send({ embeds: [thorns5] });
}
if (command === 'artthorns') {
	const thorns6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/ThornsS3GIF.gif')
	.setTimestamp()

	message.channel.send({ embeds: [thorns6] });
}
if (command === 'skinthorns') {
	const sthorns1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Crossover - Cómodo")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_293_thorns_it%231.png')
	.setTimestamp()

	message.channel.send({ embeds: [sthorns1] });
}
if (command === 'skinthorns') {
	const sthorns2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/ThornsSkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sthorns2] });
}
if (command === 'skinthorns') {
	const sthorns3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/ThornsSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sthorns3] });
}
if (command === 'skinthorns') {
	const sthorns4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/ThornsSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sthorns4] });
}

if (command === 'skinthorns') {
	const sthorns5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/ThornsSkinGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sthorns5] });
}
if (command === 'skinthorns') {
	const sthorns6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/ThornsSkinGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sthorns6] });
}
if (command === 'lee') {
    const lee = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Lee')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('6★ Merchant Specialist operator.')
	.setThumbnail('https://i.imgur.com/Y4N2sCr.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Lee có thể dễ dàng bị thay thế trong việc thủ lane do chỉ block 1. Tuy nhiên anh ta có nhiều khả năng khác nhau, gây một lượng lớn sát thương phép, biến những trận đấu đám đông thành tay đôi và khả năng miễn khống chế. Nhờ vào khả năng miễn khống chế, Lee khá được trọng dụng trong những map có nhiều crowd-control nếu bạn lười suy nghĩ nên dùng chiến thuật nào để đối phó những màn như này. Đổi lại muốn sử dụng anh ta, hãy đảm bảo bạn có đủ lượng DP trước mắt, module đã giảm đi số DP mà Lee đã tiêu thụ.'},
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Stern Admonishment', value: '> Skill total damage: ∞\n> Average DPS: 1819\nKhông có gì nổi bật.', inline: true },
		{ name: 'Skill 2 - Exorcise Evil', value: '> Average DPS: 1380\n__Ưu điểm__\n• AoE damage.\n• DPS cao.\n\n__Nhược điểm\n• Block 1.\n• Cần phụ thuộc operators có tốc đánh cao để khả năng kích nổ nhanh chóng.', inline: true },
	)
	.addFields({ name: "Skill 3 - Honored Guest", value: '`Mastery 3 để tăng khả năng sống sót`\n> Skill total damage: ∞\n> Average DPS: 1706\n__Ưu điểm__\n• DPS cao.\n• Thủ lane tốt.\n• Phù hợp với talent 1.\n• Giữ chân đám đông.\n• Có khả năng cancel animation attack của địch.\n\n__Nhược điểm__\n• Không phù hợp đối đầu với địch có weight cao.', inline: true })
	.setImage('https://i.imgur.com/Q0RXsiJ.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: giảm thời gian tái triển khai. Không hoàn trả DP khi rút lui. Tiêu hao 3 DP mỗi 3 giây (tự động rút lui khi không đủ DP).\n• Potential 5 tăng Talent 1.\n• Trust +300 HP tối đa, +55 ATK.\n• Total damage và DPS đã bao gồm 2 yếu tố ở talent 1.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047191720510632016/Fci712qacAAB8oI.jpg?width=934&height=662' });

    message.channel.send({ embeds: [lee] });
}
if (command === 'artlee') {
	const lee1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_322_lmlee_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [lee1] });
}
if (command === 'artlee') {
	const lee2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_322_lmlee_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [lee2] });
}
if (command === 'artlee') {
	const lee3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-01/LeeGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [lee3] });
}
if (command === 'artlee') {
	const lee4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-01/LeeGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [lee4] });
}
if (command === 'artlee') {
	const lee5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/LeeGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [lee5] });
}
if (command === 'artlee') {
	const lee6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/LeeGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [lee6] });
}
if (command === 'artlee') {
	const lee7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/LeeGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [lee7] });
}
if (command === 'skinlee') {
	const slee1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Witch Feast series - Trust Your Eyes")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_322_lmlee_witch%233.png')
	.setTimestamp()

	message.channel.send({ embeds: [slee1] });
}
if (command === 'skinlee') {
	const slee2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-10/LeeSkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [slee2] });
}
if (command === 'skinlee') {
	const slee3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-10/LeeSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [slee3] });
}
if (command === 'askinlee') {
	const slee4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-10/LeeSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [slee4] });
}
if (command === 'skinnlee') {
	const slee5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-10/LeeSkinGIFS1.gif')
	.setTimestamp()

	message.channel.send({ embeds: [slee5] });
}
if (command === 'skinlee') {
	const slee6 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-10/LeeSkinGIFS2.gif')
	.setTimestamp()

	message.channel.send({ embeds: [slee6] });
}
if (command === 'skinlee') {
	const slee7 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 3")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-10/LeeSkinGIFS3.gif')
	.setTimestamp()

	message.channel.send({ embeds: [slee7] });
}
if (command === 'myrtle') {
    const myrtle = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Myrtle')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('4★ Standard Bearer Vanguard operator.')
	.setThumbnail('https://i.imgur.com/xxRBXOx.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Bà hoàng meta Congency Contract\nChúa tể tạo DP\nVũ công múa trên nhịp điệu thời gian hồi DP\nNgười thành lập khẩu hiệu Flagpipe\nMẹ đỡ đầu tag risk DP' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Support β', value: 'Hồi DP.', inline: true },
		{ name: 'Skill 2 - Healing Wings', value: '> Skill total healing: 4608\n> Average HPS: 132\n__Ưu điểm__\n• Hồi HP cho đồng minh.\n\n__Nhược điểm__\n• Chi phí SP cao nếu cần DP nhanh chóng cho đầu game.', inline: true },
	)
	.setImage('https://i.imgur.com/7SOB34k.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: block bằng 0 khi kích hoạt kỹ năng.\n• Potential 5 tăng Talent.\n• Trust +50 DEF.\n• Nên M6', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png' });

    message.channel.send({ embeds: [myrtle] });
}
if (command === 'skinmyrtle') {
	const smyrtle1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("EPOQUE series - Light Gold Celebration")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_151_myrtle_epoque%2312.png')
	.setTimestamp()

	message.channel.send({ embeds: [smyrtle1] });
}
if (command === 'skinmyrtle') {
	const smyrtle2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MyrtleSkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smyrtle2] });
}
if (command === 'skinmyrtle') {
	const smyrtle3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MyrtleSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smyrtle3] });
}
if (command === 'skinmyrtle') {
	const smyrtle4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/MyrtleSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [smyrtle4] });
}
if (command === 'artmyrtle') {
	const myrtle1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_151_myrtle_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [myrtle1] });
}
if (command === 'artmyrtle') {
	const myrtle2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_151_myrtle_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [myrtle2] });
}
if (command === 'skin1myrtle') {
	const ssrmyrtle = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Soviet Myrtle")
	.setImage('https://i.imgur.com/Yj9QsoF.png')
	.setTimestamp()

	message.channel.send({ embeds: [ssrmyrtle] });
}
if (command === 'pinecone') {
    const pinecone = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Myrtle')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('4★ Spreadshooter Sniper operator.')
	.setThumbnail('https://i.imgur.com/P3h50Uo.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Một lựa chọn thân thiện hàng đầu với newbie nếu cần một operator có thể đối đầu với nhiều địch có DEF cao.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - RMA Spikes', value: '`Nên Mastery 3`\n> Skill total damage: 15000\n> Average DPS: 489\n__Ưu điểm__\n• Chi phí SP thấp.\n• Bỏ qua DEF địch.\n• Có charges.', inline: true },
		{ name: 'Skill 2 - Electrical Overcharge', value: '> Skill total damage: 22275\n> Average DPS: 641\n__Ưu điểm__\n• ATK được tăng cao.\n\n__Nhược điểm__\n• Cần kiếm vị trí thích hợp với tầm tấn công khi bị giảm.\n• Mất nhiều lần kích hoạt kỹ năng để ATK được tăng tối đa.\n• Tự động kích hoạt kỹ năng dễ có nhiều lỗi phát sinh.', inline: true },
	)
	.setImage('https://i.imgur.com/FGa3P2D.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: tấn công tất cả kẻ địch trong tầm tấn công. Sát thương lên đến 150% khi kẻ địch ở hàng phía trước.\n• Potential 5 tăng Talent.\n• Trust +55 ATK.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png' });

    message.channel.send({ embeds: [pinecone] });
}
if (command === 'artpinecone') {
	const pinecone1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_440_pinecn_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [pinecone1] });
}
if (command === 'artpinecone') {
	const pinecone2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_440_pinecn_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [pinecone2] });
}
if (command === 'artpinecone') {
	const pinecone3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2020-12/PineconeGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [pinecone3] });
}
if (command === 'artpinecone') {
	const pinecone4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2020-12/PineconeGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [pinecone4] });
}
if (command === 'skinpinecone') {
	const spinecone1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Shining Steps series - Sing a Song")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_440_pinecn_shining%231.png')
	.setTimestamp()

	message.channel.send({ embeds: [spinecone1] });
}
if (command === 'skinpinecone') {
	const spinecone2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/PineconeSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [spinecone2] });
}
if (command === 'skinpinecone') {
	const spinecone3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/PineconeSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [spinecone3] });
}
if (command === 'roberta') {
    const roberta = new EmbedBuilder()
    .setColor(0x0099FF)
	.setTitle('Roberta')
	.setURL('https://discord.gg/arknights-vns')
	.setAuthor({ name: 'Syalis', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png', url: 'https://discord.gg/arknights-vns' })
	.setDescription('4★ Artificer Supporter operator.')
	.setThumbnail('https://i.imgur.com/HnW9M1I.png')
	.addFields(
		{ name: 'Tổng Quan', value: 'Một supporter thiêng về hỗ trợ DEF cho Operators từ xa qua thiết bị hỗ trợ, điều nổi bật nhất của Roberta là có thể cung cấp Shield cho bản thân hoặc Operators khác. Bạn có thể lợi dụng Shield đó để đối đầu với tùy tình huống cần thiết. Tuy vậy, Roberta không có nổi bật gì nhiều về gameplay để mà làm lựa chọn hàng đầu ưu tiên.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Skill 1 - Siracusan-Style Makeup', value: 'Không có gì nổi bật.', inline: true },
		{ name: 'Skill 2 - Full Auto Modeler', value: '__Ưu điểm__\n• Mini defender.\n\n__Nhược điểm__\n• Chi phí SP cao.\n• Mất nhiều thời gian để nhận 1 Modeler.', inline: true },
	)
	.setImage('https://i.imgur.com/5Gxp9k3.png')
	.setTimestamp()
	.setFooter({ text: '• Trait: tấn công tất cả kẻ địch trong tầm tấn công. Sát thương lên đến 150% khi kẻ địch ở hàng phía trước.\n• Potential 5 tăng Talent.\n• Trust +35 ATK, +35 DEF.', iconURL: 'https://media.discordapp.net/attachments/1000231354149122130/1047192320556142612/image_1.png' });

    message.channel.send({ embeds: [roberta] });
}
if (command === 'artroberta') {
	const roberta1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 0")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_484_robrta_1.png')
	.setTimestamp()

	message.channel.send({ embeds: [roberta1] });
}
if (command === 'artroberta') {
	const roberta2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Elite 2")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_484_robrta_2.png')
	.setTimestamp()

	message.channel.send({ embeds: [roberta2] });
}
if (command === 'artroberta') {
	const roberta3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-09/RobertaGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [roberta3] });
}
if (command === 'artroberta') {
	const roberta4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2021-09/RobertaGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [roberta4] });
}
if (command === 'artroberta') {
	const roberta5 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Skill 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/inline-images/RobertaGIFS2AndSupportDevice.gif')
	.setTimestamp()

	message.channel.send({ embeds: [roberta5] });
}
if (command === 'skinroberta') {
	const sroberta1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Coral Coast series - Summer Flowers FA374")
	.setImage('https://raw.githubusercontent.com/Aceship/Arknight-Images/main/characters/char_484_robrta_summer%2310.png')
	.setTimestamp()

	message.channel.send({ embeds: [sroberta1] });
}
if (command === 'skinroberta') {
	const sroberta2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 1")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-08/RobertaSkinGIFPoke.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sroberta2] });
}
if (command === 'skinroberta') {
	const sroberta3 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Base 2")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-08/RobertaSkinGIFBase.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sroberta3] });
}
if (command === 'skinroberta') {
	const sroberta4 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Deploy")
	.setImage('https://gamepress.gg/arknights/sites/arknights/files/2022-08/RobertaSkinGIFDeploy.gif')
	.setTimestamp()

	message.channel.send({ embeds: [sroberta4] });
}
if (command === 'cnlist') {
	const cnlist = new EmbedBuilder()
	.setColor("Random")
	.setImage('https://i.imgur.com/qm6hziy.jpg')
	.setTimestamp()

	message.channel.send({ embeds: [cnlist] });
}
if (command === 'cnlist') {
	const cnlist1 = new EmbedBuilder()
	.setColor("Random")
	.setImage('https://i.imgur.com/fv9kdKk.jpg')
	.setTimestamp()

	message.channel.send({ embeds: [cnlist1] });
}
if (command === 'cnlist') {
	const cnlist2 = new EmbedBuilder()
	.setColor("Random")
	.setImage('https://i.imgur.com/OqXkSr4.jpg')
	.setTimestamp()

	message.channel.send({ embeds: [cnlist2] });
}
if (command === 'cnlist') {
	const cnlist3 = new EmbedBuilder()
	.setColor("Random")
	.setImage('https://i.imgur.com/7919mEG.png')
	.setTimestamp()

	message.channel.send({ embeds: [cnlist3] });
}
if (command === 'cnlist') {
	const cnlist4 = new EmbedBuilder()
	.setColor("Random")
	.setImage('https://i.imgur.com/IO3ipUL.png')
	.setTimestamp()

	message.channel.send({ embeds: [cnlist4] });
}
if (command === 'cnlist') {
	const cnlist5 = new EmbedBuilder()
	.setColor("Random")
	.setImage('https://i.imgur.com/z7BNTdY.png')
	.setTimestamp()

	message.channel.send({ embeds: [cnlist5] });
}
if (command === 'cnlist') {
	const cnlist6 = new EmbedBuilder()
	.setColor("Random")
	.setImage('https://i.imgur.com/LihawuJ.png')
	.setTimestamp()

	message.channel.send({ embeds: [cnlist6] });
}
if (command === 'cnlist') {
	const cnlist7 = new EmbedBuilder()
	.setColor("Random")
	.setImage('https://i.imgur.com/otRjHVT.png')
	.setTimestamp()

	message.channel.send({ embeds: [cnlist7] });
}
if (command === 'event') {
	const event1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Sidestory: Lingering Echoes")
	.setDescription("Mô tả sự kiện: người chơi hoàn thành nhiệm vụ cũng như các màn trong event để nhận thưởng cũng như đổi phần thưởng trong shop.\nĐiều kiện tham gia: hoàn thành map 1-10.\nSự kiện chia làm 2 giai đoạn:\n• Afterglow Hall\n> Thời gian: <t:1672203600:F> | <t:1672160400:R> - <t:1673391540:F> | <t:1673348340:R>\n\n• Back Alleys\n> Thời gian: <t:1672830000:F> | <t:1672786800:R> - <t:1673391540:F> | <t:1673348340:R>")
	.setImage('https://i.imgur.com/0PkWATj.png')
	.setTimestamp()

	message.channel.send({ embeds: [event1] });
}
if (command === 'event') {
	const event2 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("Thông tin địch")
	.setImage('https://i.imgur.com/aqQ3Tt6.jpeg')
	.setTimestamp()

	message.channel.send({ embeds: [event2] });
}
if (command === 'event') {
	const event3 = new EmbedBuilder()
	.setColor("Random")
	.setImage('https://i.imgur.com/msMmBaV.jpeg')
	.setTimestamp()

	message.channel.send({ embeds: [event3] });
}
if (command === 'event') {
	const event4 = new EmbedBuilder()
	.setColor("Random")
	.setImage('https://i.imgur.com/dQNM2Y6.jpeg')
	.setTimestamp()

	message.channel.send({ embeds: [event4] });
}
if (command === 'event') {
	const event5 = new EmbedBuilder()
	.setColor("Random")
	.setImage('https://i.imgur.com/eWXxCBt.jpeg')
	.setTimestamp()

	message.channel.send({ embeds: [event5] });
}
if (command === 'standard') {
	const standard1 = new EmbedBuilder()
	.setColor("Random")
	.setTitle("`STANDARD BANNER`")
	.setDescription("Thời gian: <t:1671836400:F> | <t:1671793200:R> - <t:1673045940:F> | <t:1673002740:R>\nNhững operators sau sẽ được rate up:\n> ★★★★★★: Archetto, Blemishine\n> ★★★★★: La Pluma, Franka, Cliffheart\n\nOperators được vào shop\n> ★★★★★★: Blemishine\n> ★★★★★: Franka")
	.setImage('https://i.imgur.com/TrZQoME.png')
	.setTimestamp()

	message.channel.send({ embeds: [standard1] });
}
})

client.login("MTA0Mjc0MTc2NTcyNTIzNzMyMA.GlDe7k.PvEg5Ay-Yil89-TflXkGH9O9ukpT24s01jdgbk")