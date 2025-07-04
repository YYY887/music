// GD音乐台get(适配SPlayer的UNM-Server)
// 感谢来自GD Studio的开发API
// https://music.gdstudio.xyz/

const createOption = require('../util/option.js')

module.exports = async (query, request) => {
    try {
        const { id, br } = query
        if (!id) {
            return {
                status: 400,
                body: {
                    code: 400,
                    msg: 'Missing song ID',
                    data: [],
                },
            }
        }
        const vaildbr = ["128", "192", "320", "740", "999"]
        if (br && !vaildbr.includes(br)) {
            return {
                status: 400,
                body: {
                    code: 400,
                    msg: 'Invalid bitrate',
                    data: [],
                },
            }
        }
        const apiUrl = new URL("https://music.gdstudio.xyz/api.php")
        apiUrl.searchParams.append("types", "url");
        apiUrl.searchParams.append("id", id);
        apiUrl.searchParams.append("br", br || "320");

        const response = await fetch(apiUrl.toString());
        if (!response.ok) throw new Error(`API 响应状态: ${response.status}`);
        const result = await response.json();
        return {
            status: 200,
            body: {
                code: 200,
                msg: 'Success',
                data: result.data || [],
            },
        }
    } catch (err) {
      return {
            status: 500,
            body: {
                code: 500,
                msg: err.message || 'Internal Server Error',
                data: [],
            },
        }  
    }
}
