import {AxiosInstance} from "axios";

export class ApiRanking {
    private instance: AxiosInstance


    constructor(instance: AxiosInstance) {
        this.instance = instance;
    }

    // 绘画榜
    illust(param: {
        p: number;
        mode: `daily` | `weekly` | `monthly` | `rookie` | `original` | `male` | `female` | `daily_r18` | `weekly_r18` | `male_r18` | `female_r18`;
        content: `all` | `illust` | `manga` | `ugoira`;
        date?: string
    }) {
        const {date, content, p, mode} = param
        const params = {date, content, p, mode, format: "json"}
        return this.instance.get(`/ranking.php`, {params}).then(res => {
            return res.data
        })
    }
}