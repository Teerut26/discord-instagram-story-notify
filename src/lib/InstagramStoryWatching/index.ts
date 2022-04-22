import HttpRequest from "./http_request";
import { Item } from "./interfaces/story";
import EventEmitter from "events";
require("dotenv").config();
import _ from "lodash";


export default class InstagramStoryWatching {
    private http_request = new HttpRequest();
    public last_story: Item | null = null;
    private frist_run: boolean = false;
    private history_id: string[] = [];
    public events: EventEmitter = new EventEmitter();

    private url: string = "";
    private cookie: string = "";

    constructor(url: string, cookie: string) {
        this.cookie = cookie;
        this.url = url;
        this.getData();
    }

    async getData() {
        setInterval(async () => {
            let res = await this.http_request.getData(this.url, this.cookie);
            let last_data = _.last(res.data.reel?.items);
            if (res.data.reel !== null && this.last_story === null) {
                this.last_story = last_data as Item;
                if (this.frist_run) {
                    this.events.emit("item", last_data);
                    this.history_id.push(last_data?.id as string);
                }
                this.frist_run = true;
            } else if (res.data.reel !== null) {
                let result = last_data?.id === this.last_story?.id;
                if (!result) {
                    if (
                        !this.history_id.includes(
                            (last_data as Item).id as string
                        )
                    ) {
                        this.events.emit("item", last_data);
                        this.last_story = last_data as Item;
                        this.history_id.push(last_data?.id as string);
                    }
                }
                this.frist_run = true;
            } else {
                this.frist_run = true;
            }
        }, Number.parseInt(process.env.TIME as string));
    }
}
