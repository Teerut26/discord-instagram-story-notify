import { MessageAttachment, WebhookClient } from "discord.js";
import InstagramStoryWatching from "./lib/InstagramStoryWatching";
import { Item } from "./lib/InstagramStoryWatching/interfaces/story";
require("dotenv").config();

let instagramStoryWatching = new InstagramStoryWatching(
    process.env.INSTAGRAM_URL as string,
    process.env.COOKIE as string
);

instagramStoryWatching

const webhook = new WebhookClient({
    url: process.env.WEBHOOK as string,
});

instagramStoryWatching.on("item", (data: Item) => {
    console.log(data.image_versions2.candidates[0].url);
    const attachment = new MessageAttachment(
        data.image_versions2.candidates[0].url
    );
    webhook.send({
        files: [attachment]
    });
});