import { contentfulClient } from "../lib/contentful";
import type { EntryFieldTypes } from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

interface ContentfulPlayer {
	contentTypeId: "player",
	fields: {
		name: EntryFieldTypes.Text,
		slug: EntryFieldTypes.Text,
		graduationYear: EntryFieldTypes.Integer,
		headshot: EntryFieldTypes.AssetLink,
		bio: EntryFieldTypes.RichText,
	}
}

export interface Player {
    name: string,
    slug: string,
    graduationYear: number,
	bio: string,

    headshot: {
		title: string,
		description: string,
		file: {
			url: string,
			details: {
				size: number,
				image: {
					width: number,
					height: number,
				}
			}
		},
	},
}

export async function getPlayers() {
	const playerEntries = await contentfulClient.getEntries<ContentfulPlayer>({
        content_type: "player",
    });

	const players = await Promise.all(playerEntries.items.map(async (player) => ({
		name: player.fields.name,
		slug: player.fields.slug,
		graduationYear: player.fields.graduationYear,
		headshot: (await contentfulClient.getAsset(player.fields.headshot.sys.id)).fields,
		bio: documentToHtmlString(player.fields.bio),
	})));

	return players;
}
