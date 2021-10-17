import axios from 'axios'
const KEY = 'AIzaSyACPQqwiWlZ1bLLwp7yQyuaWzfocNo1Ecs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        // type: 'video',
    }
});
