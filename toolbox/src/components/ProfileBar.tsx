import { useNavigate } from "react-router-dom";
import { User } from "../types/types";
import { Avatar, Button } from "@mui/material";

interface sidebarFace{
    user: User;
}
const ProfileBar = (props: sidebarFace) => {
        let navigate = useNavigate();

        return(
            <div className="bg-white h-full flex flex-col gap-20 p-10 justify-start pt-64">
                <div className="flex flex-col justify-center gap-5">
                    <Avatar 
                        sx={{
                            width: 128,
                            height: 128,
                            m : 0, 
                            bgcolor: 'primary.main',
                        }}>
                            {props.user.firstname} {props.user.lastname}
                    </Avatar>
                    <div className="flex flex-col justify-start text-left">
                        <h1 className="font-bold text-lg">{props.user.firstname} {props.user.lastname}</h1>
                        <p className="font-thin">@{props.user.username} </p>           
                    </div>

                </div>
                <div className="flex flex-col gap-2">
                    <Button variant="contained" sx={{p:2}} onClick={() => navigate("/profile")}>Min profil</Button>
                    <Button variant="contained" sx={{p:2}} onClick={() => navigate("/myads")}>Mine annonser</Button> 
                    <Button variant="contained" sx={{p:2}} onClick={() => navigate("/savedads")}>Lagrede annonser</Button>
                    <Button variant="contained" sx={{p:2}} onClick={() => navigate("/myreviews")}>Mine anmeldelser</Button>

                </div>
            </div>
    );
}

export default ProfileBar;