import config from '#config.json' assert { type: 'json' };
import { EmbedBuilder, WebhookClient } from 'discord.js';
import fetch from 'node-fetch';

const endpoint = `https://testflight.apple.com/v3/accounts/${config.testflight.accountId}/apps/${config.testflight.appAdamId}`;
let lastVersion = '0';

const webhook = new WebhookClient({ url: config.discord.webhookUrl });

async function checkForUpdate() {
	console.log('Checking for updates...');

	// Fetch data from TestFlight API
	const {
		data: {
			platforms: [{ build }]
		}
	} = (await (await fetch(endpoint, { headers: config.testflight.headers })).json()) as App;

	if (lastVersion !== build.cfBundleVersion) {
		console.log(`Found new version ${build.cfBundleShortVersion} (${build.cfBundleVersion})`);
		lastVersion = build.cfBundleVersion;

		const newVersionEmbed = new EmbedBuilder({
			author: {
				name: build.name
			},
			thumbnail: {
				url: `https://is1-ssl.mzstatic.com/image/thumb/${build.iconLargeAssetToken}/512x0w.png`
			},
			title: `New version released - ${build.cfBundleShortVersion} (${build.cfBundleVersion})`,
			description: build.whatsNew + '\n\n' + build.compatibilityMessage,
			timestamp: build.releaseDate,
			footer: {
				text: build.bundleId
			}
		});

		await webhook.send({ embeds: [newVersionEmbed] });
	} else console.log('No updates found');

	setTimeout(checkForUpdate, config.testflight.interval);
}

checkForUpdate();
