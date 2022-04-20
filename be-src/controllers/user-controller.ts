import { User } from "../models/User";


export async function getProfile(userId) {
    const userProfile = User.findByPk(userId);
    
    return userProfile;
}
