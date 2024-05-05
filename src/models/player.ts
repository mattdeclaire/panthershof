import { contentfulClient } from "../lib/contentful";
import type { EntryFieldTypes } from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

interface ContentfulPlayer {
	contentTypeId: "player",
	fields: {
		name: EntryFieldTypes.Text,
		slug: EntryFieldTypes.Text,
		graduationYear: EntryFieldTypes.Integer,
		headshot: {fields: {file: {url: string }}},
		bio: EntryFieldTypes.RichText,
	}
}

export interface Player {
    name: string,
    slug: string,
    graduationYear: number,
    headshot: string,
    bio: string,
}

export async function getPlayers(): Promise<Player[]> {
	const playerEntries = await contentfulClient.getEntries<ContentfulPlayer>({
        content_type: "player",
    });

	const players = playerEntries.items.map((player): Player => ({
		name: player.fields.name,
		slug: player.fields.slug,
		graduationYear: player.fields.graduationYear,
		headshot: player.fields.headshot.fields.file.url || 'http://placekitten.com/200/300',
		bio: documentToHtmlString(player.fields.bio),
	}));

	return players;
}
