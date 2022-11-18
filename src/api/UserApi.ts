import {AxiosInstance} from "axios";
import {UserInfo, UserRecommend} from "../interface/user";

export class UserApi {
    private instance: AxiosInstance


    constructor(instance: AxiosInstance) {
        this.instance = instance;
    }

    /**
     * 关注
     * @param userId
     * @param restrict
     * @param tag
     */
    follow(userId: number, restrict: 0 | 1, tag?: string): Promise<any> {
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
            }
        })
    }

    /**
     * 推荐用户
     * @param uid
     * @param params
     */
    recommend(uid: number, params: { lang?: string, userNum: number, workNum: number, isR18: Boolean }): Promise<UserRecommend> {
        return this.instance.get(`/ajax/user/${uid}/recommends`, {params}).then(res => {
            return res.data.body
        })
    }

    /**
     * 取关
     * @param userId
     */
    unfollow(userId: number): Promise<{ type: string; user_id: number }> {
        let formData = new FormData();
        formData.append("id", "" + userId)
        formData.append("mode", "del")
        formData.append("type", "bookuser")
        return this.instance.post("/rpc_group_setting.php", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(res => {
            return res.data
        })
    }

    /**
     * 查询用户信息
     * @param uid
     * @param full
     */
    userInfo(uid: number, full: 1 | 0): Promise<UserInfo> {
        return this.instance.get(`/ajax/user/` + uid, {params: {full}}).then(res => {
            return res.data.body
        })
    }


}