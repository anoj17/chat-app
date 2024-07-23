import axios from "axios"

const URL = process.env.NEXT_PUBLIC_URL

export const signIn = async (data: any) => {
    try {
        // console.log(data)
        return await axios.post(`${URL}/api/user/signup`, data,)
        // {
        //     headers: {
        //         "Content-Type": "multipart/form-data"
        //     }
        // }

    } catch (error) {
        console.log("backend error", error)
    }
}

export const login = async (data: any) => {
    try {
        // console.log(data)
        return await axios.post(`${URL}/api/user`, data,)
        // {
        //     headers: {
        //         "Content-Type": "multipart/form-data"
        //     }
        // }

    } catch (error) {
        console.log("backend error", error)
    }
}