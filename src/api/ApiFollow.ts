import {AxiosInstance} from "axios";

export class ApiFollow {
    readonly token: string
    private instance: AxiosInstance

    constructor(instance: AxiosInstance, token: string) {
        this.instance = instance;
        this.token = token;
    }

    //todo 关注
    add(userId: number, restrict: 0 | 1, tag: string): Promise<any> {
        let formData = new FormData();
        formData.append("user_id", "" + userId)
        formData.append("restrict", "" + restrict)
        formData.append("tag", tag)
        formData.append("mod", "add")
        formData.append("type", "user")
        formData.append("format", "json")
        return this.instance.post("/bookmark_add.php", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                'x-csrf-token': this.token,
            }
        })
    }

    //todo 取关
    del(userId: number): Promise<any> {
        let formData = new FormData();
        formData.append("id", "" + userId)
        formData.append("mod", "del")
        formData.append("type", "bookuser")
        return this.instance.post("/rpc_group_setting.php", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                'x-csrf-token': this.token,
            }
        })
    }
}