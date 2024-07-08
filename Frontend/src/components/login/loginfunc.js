import {setToken,setfirstName,setlastName,setuserName,logout} from "../../Slice/loginslice"


export async function LoginUser (logs, dispatch, navigate){
    try{
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(logs),
        });

        if (response.status === 400) {
            alert("La combinaison de l'adresse mail et/ou du mot de passe est mauvaise.");
            return;
        }

        const retour = await response.json()

        dispatch(setToken({token: retour.body.token}));
        const userProfile = await UserProfile(retour.body.token);
        dispatch(setuserName(userProfile.userName));
        dispatch(setfirstName(userProfile.firstName));
        dispatch(setlastName(userProfile.lastName));
        navigate("/accountPage");
    }
    catch (error){
        console.error(error);
        throw error;
    }
}


async function UserProfile (token) {
    try{
        const response = await fetch ("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
        });
        const retour = await response.json();
        return retour.body;
    }
    catch (error) {
        console.error(error);
        throw error;    
    }
}

export async function ChangeUsername (newusername, dispatch,token){
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {"userName": newusername}
            )
            });
            const retour = await response.json();
            dispatch(setuserName(newusername ));
            return retour.body;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }

export function Logout(navigate, dispatch) {
    return new Promise((resolve, reject) => {
        dispatch(logout());
        resolve(navigate("/")); 
    });
}

