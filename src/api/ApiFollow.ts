import {AxiosInstance} from "axios";

export class ApiFollow {
    readonly token: string
    private instance: AxiosInstance

    constructor(instance: AxiosInstance, token: string) {
        this.instance = instance;
        this.token = token;
    }

    //关注
    add(userId: number, restrict: 0 | 1, tag?: string): Promise<any> {
        let formData = new FormData();
        formData.append("user_id", "" + userId)
        formData.append("restrict", "" + restrict)
        formData.append("tag", tag ? tag : "")
        formData.append("mode", "add")
        formData.append("type", "user")
        formData.append("format", "json")
        return this.instance.post("/bookmark_add.php", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                'x-csrf-token': this.token,
            }
        })
    }

    //取关
    del(userId: number): Promise<{ type: string; user_id: number }> {
        let formData = new FormData();
        formData.append("id", "" + userId)
        formData.append("mode", "del")
        formData.append("type", "bookuser")
        return this.instance.post("/rpc_group_setting.php", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                'x-csrf-token': this.token,
            }
        }).then(res => {
            return res.data
        })
    }
}