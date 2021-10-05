import { getSession } from "../../helpers/utility"
export const verifyCredential = () => {
    if (getSession() == null) {
        window.location.href = '/';
    }
}